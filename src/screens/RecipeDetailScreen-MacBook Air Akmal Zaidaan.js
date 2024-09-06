import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import RecipesData from "../contants/RecipeData.json";
import colors from "../themes/colors";
import { Ionicons } from "@expo/vector-icons";
 
const RecipeDetailScreen = () => {
  const route = useRoute();
  const { recipeId } = route.params;
  const recipeDetail = RecipesData.recipes.find(
    (recipe) => Number(recipe.id) === Number(recipeId)
  );
 
  return (
    <ScrollView style={styles.screen} showsVerticalScrollIndicator={false}>
      <Image
        source={{ uri: recipeDetail.image }}
        resizeMode="cover"
        style={styles.imageRecipe}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.name}>{recipeDetail.name}</Text>
        <View style={styles.infoContainer}>
          <View
            style={[
              styles.infoContainer,
              {
                borderRightWidth: 1,
              },
            ]}
          >
            <Ionicons name="star" size={24} color={colors.start} />
            <Text style={styles.info}>{recipeDetail.rating}</Text>
          </View>
          <View
            style={[
              styles.infoContainer,
              {
                paddingLeft: 8,
                borderRightWidth: 1,
              },
            ]}
          >
            <Ionicons name="timer-outline" size={24} color={colors.primary} />
            <Text style={styles.info}>{recipeDetail.cookTimeMinutes} mins</Text>
          </View>
          <View
            style={[
              styles.infoContainer,
              {
                paddingLeft: 8,
                borderRightWidth: 1,
              },
            ]}
          >
            <Ionicons
              name="cellular-outline"
              size={24}
              color={colors.primary}
            />
            <Text style={styles.info}>{recipeDetail.difficulty}</Text>
          </View>
          <View
            style={[
              styles.infoContainer,
              {
                paddingLeft: 8,
              },
            ]}
          >
            <Ionicons name="scale-outline" size={24} color={colors.primary} />
            <Text style={styles.info}>
              {recipeDetail.caloriesPerServing} Cal
            </Text>
          </View>
        </View>
        {/* Ingredientssss */}
        <Text style={styles.sectionTitle}>Ingredients</Text>
        <View style={styles.ingredientsContainer}>
          {recipeDetail.ingredients.map((ingredient, index) => (
            <Text key={index} style={styles.ingredient}>
              {ingredient}
              {index !== recipeDetail.ingredients.length - 1 && ", "}
            </Text>
          ))}
        </View>
        {/* Instructionsss */}
        <Text style={styles.sectionTitle}>Instructions</Text>
        {recipeDetail.instructions.map((instruction, index) => (
          <Text key={index} style={styles.instruction}>
            {index + 1}. {instruction}
          </Text>
        ))}
      </View>
    </ScrollView>
  );
};
 
const styles = StyleSheet.create({
  screen: {
    flexGrow: 1,
  },
  loadingContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
  },
  imageRecipe: {
    backgroundColor: colors.border,
    height: 300,
  },
  contentContainer: {
    flex: 1,
    marginTop: -16,
    backgroundColor: colors.background,
    borderTopLeftRadius: 16,
    borderTopRightRadius: 16,
    paddingVertical: 20,
    paddingHorizontal: 24,
  },
  name: {
    fontSize: 24,
    color: colors.text,
  },
  infoContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10,
    paddingRight: 10,
    borderColor: colors.border,
    marginBottom: 20,
  },
  info: {
    fontSize: 14,
    color: colors.primary,
    marginLeft: 8,
  },
  sectionTitle: {
    fontSize: 20,
    color: colors.text,
    marginBottom: 6,
  },
  ingredientsContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1,
    flexWrap: "wrap",
    marginBottom: 20,
  },
  ingredient: {
    fontSize: 16,
    color: colors.text,
  },
  instruction: {
    fontSize: 16,
    color: colors.text,
    marginBottom: 6,
  },
  headerBtn: {
    height: 35,
    width: 35,
    borderRadius: 35 / 2,
    backgroundColor: colors.background,
    justifyContent: "center",
    alignItems: "center",
    borderColor: colors.border,
    borderWidth: 1,
  },
});
 
export default RecipeDetailScreen;