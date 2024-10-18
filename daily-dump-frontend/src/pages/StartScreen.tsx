import React from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import backgroundImage from "../assets/images/login-background.jpg";
import openEnvelopeImage from "../assets/images/opened-heart-envelope.png";

const StartScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <View style={styles.items}>
        <Text style={styles.title}>Daily Dump</Text>
        <Image style={styles.envelope} source={openEnvelopeImage} />
        <View style={styles.loginContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate("LoginScreen")}
            style={styles.button}
          >
            <Text style={styles.buttonText}>Login</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  items: {
    flex: 3,
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    fontSize: 32,
  },
  envelope: {
    marginLeft: -12,
    marginTop: 50,
  },
  loginContainer: {
    backgroundColor: "rgba(255, 255, 255, 0.32)",
    width: 330,
    height: 244,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginBottom: -70,
  },
  button: {
    backgroundColor: "#F6D6DF",
    justifyContent: "center",
    alignItems: "center",
    width: 274,
    height: 58,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Alike-Regular",
  },
});

export default StartScreen;
