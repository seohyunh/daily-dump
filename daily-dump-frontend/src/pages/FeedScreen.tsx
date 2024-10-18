import React, { useCallback, useEffect, useState } from "react";
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
import { getAllPosts } from "../services/api";
import { useFocusEffect } from "@react-navigation/native";

const FeedScreen = ({ navigation }) => {
  const [posts, setPosts] = useState([]);
  useFocusEffect(
    useCallback(() => {
      const fetchContent = async () => {
        try {
          const fetchedPosts = await getAllPosts();
          setPosts(fetchedPosts); // Set the posts
        } catch (error) {
          console.error("Could not fetch all posts", error.response?.data);
        }
      };

      fetchContent(); // Fetch posts when screen is focused

      return () => {};
    }, []) // Empty dependency array to avoid re-running unnecessarily
  );

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
              {posts &&
                posts
                  .sort(
                    (a, b) =>
                      new Date(a.created_at).getTime() -
                      new Date(b.created_at).getTime()
                  )
                  .map((post, index) => {
                    return (
                      <FeedComponent
                        key={index}
                        title={post.title}
                        coverImage={post.cover_photo}
                        description={post.description}
                        time={post.created_at}
                      />
                    );
                  })}
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
