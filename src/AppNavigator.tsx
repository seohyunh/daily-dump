import * as React from "react";

import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import StartScreen from "./pages/StartScreen";
import LoginScreen from "./pages/LoginScreen";
import FeedScreen from "./pages/FeedScreen";
import MessageScreen from "./pages/MessageScreen";
import CreateScreen from "./pages/CreateScreen";
import JournalEntryScreen from "./pages/JournalEntryScreen";
import ProfileScreen from "./pages/ProfileScreen";

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="StartScreen" component={StartScreen} />
        <Stack.Screen
          name="LoginScreen"
          component={LoginScreen}
          options={{ animation: "none" }}
        />
        <Stack.Screen name="FeedScreen" component={FeedScreen} />
        <Stack.Screen name="MessageScreen" component={MessageScreen} />
        <Stack.Screen
          name="CreateScreen"
          component={CreateScreen}
          options={{ animation: "slide_from_bottom" }}
        />
        <Stack.Screen
          name="JournalEntryScreen"
          component={JournalEntryScreen}
        />
        <Stack.Screen
          name="ProfileScreen"
          component={ProfileScreen}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
