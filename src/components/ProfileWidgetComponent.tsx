import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const ProfileWidgetComponent = ({ image, text, width, height }) => {
  return (
    <LinearGradient colors={["#FFCDFE", "#DBA0DA"]} style={styles.background}>
      <View style={styles.contentContainer}>
        <View style={styles.imageContainer}>
          <Image
            source={image}
            style={[styles.image, { width: width, height: height }]}
            resizeMode="cover"
          />
        </View>
        <Text style={styles.text}>{text}</Text>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 162,
    height: 146,
    borderRadius: 20,
    padding: 10,
    justifyContent: "center",
    alignItems: "flex-start",
  },
  contentContainer: {
    flex: 1,
    justifyContent: "flex-start",
    alignItems: "flex-start",
    marginLeft: 5,
  },
  imageContainer: {
    height: 60,
    justifyContent: "flex-start",
    marginBottom: 10,
    marginTop: 10,
  },
  image: {},
  text: {
    fontSize: 20,
    textAlign: "left",
    position: "absolute",
    bottom: 10,
  },
});

export default ProfileWidgetComponent;
