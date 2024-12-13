import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000000",
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  text: {
    color: "#fff", // White text color
  },
  icon: {
    width: 24,
    height: 24,
    resizeMode: "contain",
  },
});

export default mainStyle;
