import React from "react";
import { View, StyleSheet, Image, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import postImage from "../assets/images/filler-post-image.jpg";

const FeedComponent = ({ title, coverImage, description, time }) => {
  const formatDateTime = (isoString) => {
    const date = new Date(isoString);

    const formattedDate = date.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "numeric",
    });

    const formattedTime = date.toLocaleTimeString("en-US", {
      hour: "numeric",
      hour12: true,
    });

    return { formattedDate, formattedTime };
  };

  const { formattedDate, formattedTime } = formatDateTime(time);
  return (
    <LinearGradient colors={["#E99E9E", "#F07474"]} style={styles.background}>
      <View style={styles.feedItem}>
        <View style={styles.imageContainer}>
          <Image
            source={{ uri: coverImage }}
            style={styles.image}
            resizeMode="cover"
          />
        </View>
        <View style={styles.text}>
          <View style={styles.textTitle}>
            <Text>{title}</Text>
          </View>
          <View style={styles.textDesc}>
            <Text>{formattedDate}</Text>
            <Text>{formattedTime}</Text>
            <Text>lemonyum</Text>
          </View>
        </View>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  background: {
    width: 367,
    height: 132,
    borderRadius: 20,
    marginBottom: 20,
    overflow: "hidden",
  },
  feedItem: {
    flexDirection: "row",
    flex: 1,
  },
  imageContainer: {
    width: 100,
    height: 100,
    overflow: "hidden",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: 15,
    marginTop: 15,
    borderRadius: 10,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  text: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "flex-end",
    marginRight: 15,
  },
  textTitle: {
    marginTop: 15,
  },
  textDesc: {
    marginTop: 35,
  },
});
export default FeedComponent;
