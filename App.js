// In App.js in a new project

import * as React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';

import RecipeListScreen from './src/screens/RecipeListScreen';
import ScanRecipeScreen from './src/screens/ScanRecipeScreen';
import SavedRecipeScreen from './src/screens/SavedRecipeScreen';
import MainScreen from './src/screens/MainScreen';

const Stack = createNativeStackNavigator(); 

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="MainScreen" component={MainScreen} options={{
          headerShown: false,
        }} />
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