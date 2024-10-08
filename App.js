// In App.js in a new project

import * as React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useNavigation } from "@react-navigation/native";
import colors from "./src/themes/colors";
import MainScreen from "./src/screens/MainScreen";
import RecipeDetailScreen from "./src/screens/RecipeDetailScreen";

const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer
      theme={{
        dark: false,
        colors: {
          background: colors.background,
          border: colors.border,
          card: colors.card,
          notification: colors.notification,
          primary: colors.primary,
          text: colors.text,
        },
      }}
    >
      <Stack.Navigator>
        <Stack.Screen
          name="MainScreen"
          component={MainScreen}
          options={{
            headerShown: false,
          }}
        />
        <Stack.Screen
          name="RecipeDetailScreen"
          component={RecipeDetailScreen}
          options={{
            title: "Recipe Detail",
            headerTransparent: true,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;

// function HomeScreen() {
//   const navigation = useNavigation(); //Wajib untuk dimasukkan kedalam tiap function
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//     <TouchableOpacity onPress={() => navigation.navigate('Detail')}>
//       <Text>Home Screen</Text>
//     </TouchableOpacity>
//     </View>
//   );
// }

// function DetailScreeen() {
//   const navigation = useNavigation(); //Wajib untuk dimasukkan kedalam tiap function
//   return (
//     <view style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <TouchableOpacity onPress={() => navigation.navigate('AccountScreen')}>
//         <Text>Go to Detail Screen</Text>
//       </TouchableOpacity>
//     </view>
//   )
// }

// function AccountScreen() {
//   const navigation = useNavigation(); //Wajib untuk dimasukkan kedalam tiap function
//   return (
//     <view style={{ flex: 1, alignItems: 'center', justifyContent: 'center'}}>
//       <TouchableOpacity onPress={() => navigation.navigate('Home')}>
//         <Text>Go to Account Screen</Text>
//       </TouchableOpacity>
//     </view>
//   )
// }
