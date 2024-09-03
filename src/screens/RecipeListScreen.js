import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native-web"
import RecipeData from '../contants/RecipeData.json';
import ItemRecipe from '../components/ItemRecipe.js';

const RecipeListScreen = () => {
    const navigation = useNavigation();
    // console.log('Recipe Data',RecipeData);
    return (
        <View style={styles.screen}>
            <FlatList
                data={RecipeData.recipes}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({item}) => (<ItemRecipe item={item} />)}
                />
        </View>        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
    }
});

export default RecipeListScreen;