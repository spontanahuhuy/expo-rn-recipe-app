import React from "react";

import RecipeListScreen from "./RecipeListScreen";
import ScanRecipeScreen from "./ScanRecipeScreen";
import SavedRecipeScreen from "./SavedRecipeScreen";
import { Ionicons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const tab = createBottomTabNavigator();

const MainScreen = () => {
    return (
        <tab.Navigator>
            <tab.Screen 
                name="RecipeListScreen" 
                component={RecipeListScreen} 
                options={{
                    title: "Recipes",
                    tabBarLabel: "Recipes",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "home-sharp" : "home-outline"}
                            size={size}
                            color={color} 
                        />
                    ),
            }}/>
            <tab.Screen 
                name="ScanRecipeScreen" 
                component={ScanRecipeScreen} 
                options={{
                    title: "Scan",
                    tabBarLabel: "Scan",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "camera-sharp" : "camera-outline"}
                            size={size}
                            color={color} 
                        />
                    ),
            }}/>
            <tab.Screen 
                name="SavedRecipeScreen" 
                component={SavedRecipeScreen} 
                options={{
                    title: "Saved",
                    tabBarLabel: "Saved",
                    tabBarIcon: ({ color, size, focused }) => (
                        <Ionicons 
                            name={focused ? "beaker" : "beaker-outline"}
                            size={size}
                            color={color} 
                        />
                    ),
                }}/>
        </tab.Navigator>
    );
};

export default MainScreen;