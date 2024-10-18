import React from "react";
import { TouchableOpacity, View, Image, StyleSheet } from "react-native";
import mailboxImage from "../assets/images/mailbox.png";
import closedEnvelope from "../assets/images/closed-envelope.png";
import quill from "../assets/images/quill.png";

const NavBar = ({ navigation }) => {
  return (
    <View style={styles.navBar}>
      <TouchableOpacity onPress={() => navigation.navigate("FeedScreen")}>
        <Image source={closedEnvelope} style={styles.envelopeIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("CreateScreen")}>
        <Image source={quill} style={styles.quillIcon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate("MessageScreen")}>
        <Image source={mailboxImage} style={styles.mailboxIcon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  navBar: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    width: "100%",
    height: 67,
    backgroundColor: "rgba(235, 235, 235, 0.90)",
    zIndex: 1,
    position: "absolute",
    bottom: 0,
  },
  envelopeIcon: {
    width: 70,
    height: 70,
    marginTop: 6,
  },
  quillIcon: {
    width: 45,
    height: 45,
    marginRight: 20,
    marginBottom: 5,
  },
  mailboxIcon: {
    width: 65,
    height: 65,
    marginTop: 20,
  },
});

export default NavBar;
