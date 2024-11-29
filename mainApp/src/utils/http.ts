import axios from "axios";
import { UserProfile } from "../../schemas/usersApi/src/Api";

export async function sendUserInLogin(user: UserProfile) {
  const answer = await axios.get(
    "http://10.100.102.7:8080/api/users/" + user.userName
  );
  return answer;
}
