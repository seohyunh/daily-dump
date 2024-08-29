import React from "react";
import {
  Image,
  View,
  Text,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  SafeAreaView,
  TextInput,
} from "react-native";
import backgroundImage from "../assets/images/login-background.jpg";
import openEnvelopeImage from "../assets/images/opened-heart-envelope.png";
import leftArrowImage from "../assets/images/left-arrow.png";

const LoginScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={backgroundImage}
      style={styles.background}
      resizeMode="cover"
    >
      <TouchableOpacity
        style={styles.backButton}
        onPress={() => navigation.goBack()}
      >
        <Image style={styles.backButtonImage} source={leftArrowImage} />
      </TouchableOpacity>
      <View style={styles.items}>
        <Text style={styles.title}>Daily Dump</Text>
        <Image style={styles.envelope} source={openEnvelopeImage} />
        <View style={styles.loginContainer}>
          <SafeAreaView>
            <TextInput
              style={styles.input}
              //   onChangeText={onChangeUsername}
              //   value={username}
              placeholder="username"
            />
            <TextInput
              style={styles.input}
              //   onChangeText={onChangePassword}
              //   value={password}
              placeholder="password"
              keyboardType="numeric"
            />
          </SafeAreaView>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("FeedScreen")}
          >
            <Text style={styles.buttonText}>Login</Text>
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
  input: {
    width: 301,
    height: 44,
    backgroundColor: "rgba(177, 161, 161, 0.32)",
    marginBottom: 20,
    borderRadius: 20,
    paddingLeft: 10,
  },
  button: {
    backgroundColor: "#F6D6DF",
    justifyContent: "center",
    alignItems: "center",
    width: 274,
    height: 58,
    marginTop: 10,
    borderRadius: 10,
  },
  buttonText: {
    textAlign: "center",
    fontSize: 25,
    fontFamily: "Alike-Regular",
  },
});

export default LoginScreen;
