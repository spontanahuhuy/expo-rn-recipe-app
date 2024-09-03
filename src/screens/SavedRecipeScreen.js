import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web"

const SavedRecipeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <Text>Saved Recipe Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('SavedRecipeScreen')}>
                <Text>Saved Recipes</Text>
            </TouchableOpacity>
        </View>        
    );
}

const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default SavedRecipeScreen;