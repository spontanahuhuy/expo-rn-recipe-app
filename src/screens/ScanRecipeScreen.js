import { useNavigation } from "@react-navigation/native";
import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web"

const ScanRecipeScreen = () => {
    const navigation = useNavigation();
    return (
        <View style={styles.screen}>
            <Text>Scan Recipe Screen</Text>
            <TouchableOpacity onPress={() => navigation.navigate('ScanRecipeScreen')}>
                <Text>Scan Recipe</Text>
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

export default ScanRecipeScreen;