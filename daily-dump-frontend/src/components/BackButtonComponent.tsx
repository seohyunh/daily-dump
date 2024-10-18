import React from "react";
import { TouchableOpacity, StyleSheet, Image } from "react-native";
import leftArrowImage from "../assets/images/left-arrow.png";

const BackButtonComponent = ({ navigation }) => {
  return (
    <TouchableOpacity
      style={styles.backButton}
      onPress={() => navigation.goBack()}
    >
      <Image style={styles.backButtonImage} source={leftArrowImage} />
    </TouchableOpacity>
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
});

export default BackButtonComponent;
