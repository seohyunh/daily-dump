import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const MessageComponent = () => {
  return (
    <LinearGradient colors={["#9ECAE9", "#375F82"]} style={styles.background}>
      <View style={styles.text}>
        <View style={styles.message}>
          <Text>wow so cool!!!</Text>
        </View>
        <View style={styles.user}>
          <Text>crayolacow1234</Text>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 367,
    height: 109,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
    padding: 20,
  },
  text: {
    flex: 1,
    justifyContent: "space-between",
    paddingTop: 10,
  },
  message: {},
  user: {
    alignSelf: "flex-end",
  },
});

export default MessageComponent;
