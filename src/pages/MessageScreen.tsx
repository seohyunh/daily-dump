import React from "react";
import backgroundImage from "../assets/images/blue-background.jpg";
import {
  ImageBackground,
  StyleSheet,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";
import MessageComponent from "../components/MessageComponent";
import NavBar from "../components/NavBar";
import MailboxImage from "../assets/images/mailbox.png";
import leftArrowImage from "../assets/images/left-arrow.png";

const MessageScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground style={styles.background} source={backgroundImage}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <Image style={styles.backButtonImage} source={leftArrowImage} />
        </TouchableOpacity>
        <Image source={MailboxImage} style={styles.mailboxIcon} />
        <View style={styles.messageContainer}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.messages}>
              <MessageComponent />
              <MessageComponent />
              <MessageComponent />
              <MessageComponent />
              <MessageComponent />
              <MessageComponent />
              <MessageComponent />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <NavBar navigation={navigation} />
    </>
  );
};

const styles = StyleSheet.create({
  backButton: {
    position: "absolute",
    top: 50,
    left: 20,
    zIndex: 1, // so that touchable opacity is on top
  },
  backButtonImage: {
    width: 50,
    height: 100,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mailboxIcon: {
    width: 76,
    height: 61,
    marginTop: 40,
  },
  messageContainer: {
    height: "80%",
    marginTop: 10,
    justifyContent: "center",
    alignContent: "center",
  },
  scrollContainer: {},
  messages: {},
});

export default MessageScreen;
