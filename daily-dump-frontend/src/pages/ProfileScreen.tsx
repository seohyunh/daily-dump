import React from "react";
import backgroundImage from "../assets/images/profile-background.png";
import profileImage from "../assets/images/miffywithdog.jpeg";
import {
  ImageBackground,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
  Touchable,
} from "react-native";
import BackButtonComponent from "../components/BackButtonComponent";
import ProfileWidgetComponent from "../components/ProfileWidgetComponent";
import journalImage from "../assets/images/journal.png";
import settingsImage from "../assets/images/settings.png";
import editImage from "../assets/images/edit-icon.png";
import logoutImage from "../assets/images/log-out-icon.png";

const ProfileScreen = ({ navigation }) => {
  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <BackButtonComponent navigation={navigation} />
      <View style={styles.info}>
        <View style={styles.profilePicContainer}>
          <Image source={profileImage} style={styles.profilePic} />
        </View>
        <View style={styles.nameContainer}>
          <Text style={styles.name}>Seo Hyun Hwang</Text>
        </View>
        <View style={styles.userNameContainer}>
          <Text style={styles.userName}>@lemonyum</Text>
        </View>
      </View>
      <View style={styles.widgets}>
        <TouchableOpacity style={styles.widget}>
          <ProfileWidgetComponent
            image={journalImage}
            text="My Journal"
            width={50}
            height={70}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget}>
          <ProfileWidgetComponent
            image={settingsImage}
            text="Settings"
            width={60}
            height={60}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget}>
          <ProfileWidgetComponent
            image={editImage}
            text="Edit Profile"
            width={60}
            height={60}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.widget}>
          <ProfileWidgetComponent
            image={logoutImage}
            text="Log Out"
            width={60}
            height={60}
          />
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    alignItems: "center",
  },
  info: {
    paddingTop: 145,
    alignItems: "center",
  },
  profilePicContainer: {},
  profilePic: {
    width: 155,
    height: 155,
    borderRadius: 100,
  },
  nameContainer: {
    paddingTop: 20,
  },
  name: {
    fontSize: 20,
  },
  userNameContainer: {
    paddingTop: 7,
  },
  userName: {
    fontSize: 15,
  },
  widgets: {
    flex: 1,
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    marginTop: 30,
  },
  widget: {
    margin: 5,
  },
});
export default ProfileScreen;
