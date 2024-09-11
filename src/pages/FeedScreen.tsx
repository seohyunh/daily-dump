import React from "react";
import {
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
  Image,
  View,
  ScrollView,
} from "react-native";
import { useNavigation, useNavigationBuilder } from "@react-navigation/native";
import backgroundImage from "../assets/images/feed-background.jpg";
import FeedComponent from "../components/FeedComponent";
import profilePic from "../assets/images/miffywithdog.jpeg";
import NavBar from "../components/NavBar";

const FeedScreen = ({ navigation }) => {
  return (
    <>
      <ImageBackground style={styles.background} source={backgroundImage}>
        <TouchableOpacity
          style={styles.profile}
          onPress={() => navigation.navigate("ProfileScreen")}
        >
          <Image source={profilePic} style={styles.profilePic} />
        </TouchableOpacity>
        <View style={styles.feed}>
          <ScrollView contentContainerStyle={styles.scrollContainer}>
            <View style={styles.items}>
              <FeedComponent />
              <FeedComponent />
              <FeedComponent />
              <FeedComponent />
              <FeedComponent />
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
      <View>
        <NavBar navigation={navigation} />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  profile: {
    position: "absolute",
    top: 60,
    right: 20,
    zIndex: 1,
  },
  profilePic: {
    width: 55,
    height: 55,
    borderRadius: 50,
  },
  feed: {
    height: "80%",
    marginTop: 70,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "flex-start",
    alignItems: "center",
  },
  items: {
    alignItems: "center",
  },
});

export default FeedScreen;
