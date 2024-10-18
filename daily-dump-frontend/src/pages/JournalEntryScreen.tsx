import React, { useEffect, useState } from "react";
import BackgroundImage from "../assets/images/green-gradient.png";
import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
} from "react-native";
import BackButtonComponent from "../components/BackButtonComponent";
import { getPost } from "../services/api";
import { useFocusEffect } from "@react-navigation/native";

const JournalEntryScreen = ({ navigation, route }) => {
  const { post_id } = route.params;

  const windowHeight = Dimensions.get("window").height;

  const [postContent, setPostContent] = useState(null);
  useEffect(() => {
    const fetchContent = async () => {
      try {
        console.log("id", post_id);
        const fetchedPostContent = await getPost(post_id);
        setPostContent(fetchedPostContent);
      } catch (error) {
        console.error("Failed to fetch post content", error.response.data);
      }
    };
    fetchContent();
  }, [post_id]);

  if (!postContent || postContent.length === 0) {
    return <Text>Loading...</Text>;
  }

  const { title } = postContent[0];
  console.log(postContent[0]);

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <BackButtonComponent navigation={navigation} />
      <View style={styles.textContainer}>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
        </View>
        <ScrollView style={{ height: windowHeight * 0.79 }}>
          {postContent
            .sort((a, b) => a.order_num - b.order_num)
            .map((block, index) => {
              console.log(block.content);
              return (
                <View key={index} style={styles.contentContainer}>
                  {block.content_type === "text" ? (
                    <Text style={styles.content}>{block.content}</Text>
                  ) : (
                    <Image
                      source={{ uri: block.content }}
                      style={styles.imageContent}
                    />
                  )}
                </View>
              );
            })}
        </ScrollView>
      </View>
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
  imageContent: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 20,
    marginLeft: 15,
  },
});

export default JournalEntryScreen;
