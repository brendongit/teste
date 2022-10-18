import { StyleSheet } from "react-native"

export default StyleSheet.create({
  content: {
    height: 70,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    display: "flex",
  },

  textContent: {
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
  },

  text: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },

  icon: {
    width: 60,
    left: 10,
  },
});
