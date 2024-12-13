import { createContext, useReducer } from "react";
import { UserProfile } from "../../schemas/usersApi/src/Api";

const USER: UserProfile = {
  userName: "",
  descriptions: "singer songwritter",
  favoriteGeneres: ["rock", "pop", "country"],
};

export const UserProfileContext = createContext({
  user: {},
  loginToProfile: (UserProfile) => {},
});

function useProfileReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const user: UserProfile = {
        ...state,
        userName: action.payload.userName,
      };
      return user;
    default:
      return state;
  }
}

function UsersProfileContextProvider({ children }) {
  const [profileState, dispatch] = useReducer(useProfileReducer, USER);

  function loginToProfile(userData) {
    dispatch({ type: "ADD", payload: userData });
  }

  const value = {
    user: profileState,
    loginToProfile: loginToProfile,
  };

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  );
}

export default UsersProfileContextProvider;
