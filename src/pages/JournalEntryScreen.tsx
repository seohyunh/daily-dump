import React from "react";
import BackgroundImage from "../assets/images/green-gradient.png";
import { ImageBackground, StyleSheet, Text } from "react-native";
import BackButtonComponent from "../components/BackButtonComponent";

const JournalEntryScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <BackButtonComponent navigation={navigation} />
      <Text>Some Random Title</Text>
      <Text>Blah blah this is my sick ass blog hahahahahahahahahah aoifhdifjawoiwnfpanfp nifnapdfnapwifn paiwenf'pfn 'adpsinf wpai nfpadifn 'dfin padsnf pandf 'pndf in</Text>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
});

export default JournalEntryScreen;
