import React from "react";
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from "../themes/colors";
import { Ionicons } from "@expo/vector-icons";
import  {useNavigation} from "@react-navigation/native";


const ItemRecipe = ({item}) => {
    const navigation = useNavigation();
    return (
        <TouchableOpacity 
            onPress={() => navigation.navigate('RecipeDetailScreen', {
            recipeId: item.id,
        })}
        style={styles.itemContainer}
    >
        <Image
            source={{ uri: item.image }}
            resizeMode="cover"
            style={styles.imageRecipe}
        />
        <View style={styles.infoContainer}>
            <Text style={styles.name}>{item.name}</Text>
            <View style={styles.ratingcontainer}>
                <Ionicons name="star" size={16} color={colors.start}/>
                <Text style={styles.rating}>{item.rating} | {item.tags} </Text>
            </View>
        </View>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        padding: 16,
        borderBottomWidth: 1,
        borderColor: colors.border,
        flexDirection: "row",
    },
    imageRecipe: {
        backgroundColor: colors.border,
        height: 78,
        width: 78,
        borderRadius: 8,
    },
    infoContainer: {
        marginLeft: 16,
        justifyContent: 'space-between',
        flex: 1,
    },
    name: {
        fontSize: 16,
        color: colors.text,
    },

    ratingcontainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 8,
    },
    
    rating: {
        fontSize: 16,
        color: colors.primary,
        marginLeft: 8,
    },

});

export default ItemRecipe;