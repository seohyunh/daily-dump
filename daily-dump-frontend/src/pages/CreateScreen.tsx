import React, { useEffect, useRef, useState } from "react";
import {
  ImageBackground,
  StyleSheet,
  View,
  Text,
  TextInput,
  SafeAreaView,
  TouchableOpacity,
  Image,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import BackgroundImage from "../assets/images/orange-background.png";
import Ionicons from "@expo/vector-icons/Ionicons";
import * as ImagePicker from "expo-image-picker";
import { createPost, addPostContent } from "../services/api";

const CreateScreen = ({ navigation }) => {
  const [keyboardShown, setKeyboardShown] = useState(false);
  const [blocks, setBlocks] = useState<
    { id: string; type: "text" | "image"; content?: string }[]
  >([
    {
      id: Math.random().toString(36).substring(2, 9),
      type: "text",
      content: "",
    },
  ]);
  const [title, setTitle] = useState("");
  const [coverImage, setCoverImage] = useState("");

  const scrollRef = useRef<ScrollView>(null);
  const latestTextInputRef = useRef<TextInput>(null);

  useEffect(() => {
    const keyboardShownListener = Keyboard.addListener(
      "keyboardWillShow",
      () => {
        setKeyboardShown(true);
      }
    );

    const keyboardHiddenListener = Keyboard.addListener(
      "keyboardWillHide",
      () => {
        setKeyboardShown(false);
      }
    );

    return () => {
      keyboardShownListener.remove();
      keyboardHiddenListener.remove();
    };
  }, []);

  const generateRandomId = () => {
    return Math.random().toString(36).substring(2, 9);
  };

  const addImageBlock = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [1, 1],
      quality: 1,
    });

    if (!coverImage) {
      setCoverImage(result.assets[0].uri);
    }

    if (!result.canceled) {
      setBlocks((prevBlocks) => {
        const filteredBlocks = prevBlocks.filter(
          (block) => block.type !== "text" || block.content.trim() !== ""
        );

        return [
          ...filteredBlocks,
          {
            id: generateRandomId(),
            type: "image",
            content: result.assets[0].uri,
          },
          { id: generateRandomId(), type: "text", content: "" },
        ];
      });

      setTimeout(() => {
        scrollRef.current?.scrollToEnd({ animated: true });
      }, 100);
    }
  };

  const handleTitleChange = (text: string) => {
    setTitle(text);
  };

  const handleTextChange = (index: number, text: string) => {
    setBlocks((prevBlocks) => {
      const newBlocks = [...prevBlocks];
      newBlocks[index].content = text;
      return newBlocks;
    });
  };

  const handlePostSubmission = async () => {
    console.log("dump!");
    // api call to creating a post
    try {
      const postData = {
        title: title,
        cover_photo: coverImage,
        short_description: "", // future work: have a pop up before submitting to add a cover photo and description
      };

      console.log("cover image", coverImage);

      const createdPost = await createPost(postData);

      const post_id = createdPost.id;

      const contentData = {
        post_id,
        blocks: blocks.filter((block) => block.content),
      };

      const addContent = await addPostContent(contentData);

      console.log("post_id", post_id);

      navigation.navigate("JournalEntryScreen", { post_id });
    } catch (error) {
      console.error("Failed to create post", error);
    }
    // use the id thats returned to create post content
    // navigate
  };

  const scrollToEndOnContentChange = () => {
    setTimeout(() => {
      scrollRef.current?.scrollToEnd({ animated: true });
    }, 100);
  };

  return (
    <ImageBackground source={BackgroundImage} style={styles.background}>
      <View style={styles.closeContainer}>
        <TouchableOpacity
          style={styles.closeButton}
          onPress={() => navigation.goBack()}
        >
          <Ionicons
            name="close-outline"
            size={40}
            color="black"
            style={styles.closeIcon}
          ></Ionicons>
        </TouchableOpacity>
      </View>
      <KeyboardAvoidingView
        style={styles.keyboardView}
        behavior={Platform.OS === "ios" ? "padding" : "height"}
      >
        <SafeAreaView style={styles.safeArea}>
          <ScrollView
            contentContainerStyle={styles.scrollContainer}
            ref={scrollRef}
          >
            <View style={styles.textContainer}>
              <TextInput
                style={styles.title}
                placeholder="Title"
                placeholderTextColor="#373737"
                multiline={true}
                onChangeText={(text) => handleTitleChange(text)}
              />
              {blocks.map((block, index) => {
                return block.type === "text" ? (
                  <TextInput
                    key={block.id}
                    style={styles.body}
                    placeholder="Write about your day!"
                    placeholderTextColor="#373737"
                    multiline={true}
                    onChangeText={(text) => handleTextChange(index, text)}
                    onContentSizeChange={scrollToEndOnContentChange}
                    ref={
                      index === blocks.length - 1 ? latestTextInputRef : null
                    }
                  />
                ) : (
                  <View key={block.id} style={styles.imageContainer}>
                    <Image
                      style={styles.image}
                      source={{ uri: block.content }}
                    />
                  </View>
                );
              })}
            </View>
          </ScrollView>
          <View style={keyboardShown ? styles.menuKeyboard : styles.menu}>
            <TouchableOpacity
              style={styles.postButton}
              onPress={() => handlePostSubmission()}
              // onPress={() => navigation.navigate("JournalEntryScreen")}
            >
              <Text style={styles.postText}>Dump!</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.addImage} onPress={addImageBlock}>
              <Ionicons
                name="images-outline"
                style={styles.imageIcon}
                size={30}
              ></Ionicons>
            </TouchableOpacity>
          </View>
        </SafeAreaView>
      </KeyboardAvoidingView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  closeContainer: {
    position: "absolute",
    right: 20,
    top: 60,
    zIndex: 1,
  },
  closeButton: {},
  keyboardView: {
    flex: 1,
  },
  closeIcon: {},
  safeArea: {
    flex: 1,
  },
  scrollContainer: {
    paddingBottom: 20,
  },
  textContainer: {
    width: "100%",
    alignItems: "flex-start",
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 40,
  },
  imageContainer: {
    paddingLeft: 25,
    paddingBottom: 10,
    paddingTop: 10,
  },
  image: {
    width: 300,
    height: 300,
    resizeMode: "cover",
    justifyContent: "center",
    borderRadius: 20,
  },
  title: {
    fontSize: 32,
    textAlign: "left",
    color: "#373737",
  },
  body: {
    fontSize: 16,
    textAlign: "left",
    color: "#373737",
    paddingTop: 10,
  },
  menuKeyboard: {
    flexDirection: "row",
    justifyContent: "center",
    paddingBottom: 10,
    paddingTop: 10,
  },
  menu: {
    flexDirection: "row",
    justifyContent: "center",
    paddingTop: 10,
  },
  postButton: {
    backgroundColor: "rgba(255, 255, 255, 0.5)",
    width: 238,
    height: 44,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    marginRight: 30,
  },
  postText: {
    fontSize: 24,
  },
  addImage: {
    marginTop: 5,
  },
  imageIcon: {},
});

export default CreateScreen;
