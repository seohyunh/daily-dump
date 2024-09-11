import React from "react";
import BackgroundImage from "../assets/images/green-gradient.png";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import BackButtonComponent from "../components/BackButtonComponent";

const JournalEntryScreen = ({ navigation }) => {
  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <BackButtonComponent navigation={navigation} />
      <ScrollView style={styles.scrollContainer}>
        <View style={styles.textContainer}>
          <View style={styles.titleContainer}>
            <Text style={styles.title}>Some Random Title</Text>
          </View>
          <View style={styles.contentContainer}></View>
          <Text style={styles.content}>
            Blah blah this is my sick ass blog hahahahahahahahahah
            aoifhdifjawoiwnfpanfp nifnapdfnapwifn paiwenf'pfn 'adpsinf wpai
            nfpadifn 'dfin padsnf pandf 'pndf in
          </Text>
        </View>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  scrollContainer: {},
  textContainer: {
    paddingTop: 130,
    paddingLeft: 30,
  },
  titleContainer: {},
  title: {
    fontSize: 32,
    textAlign: "left",
    color: "#373737",
  },
  contentContainer: {
    paddingTop: 10,
  },
  content: {
    fontSize: 16,
    textAlign: "left",
    color: "#373737",
  },
});

export default JournalEntryScreen;
