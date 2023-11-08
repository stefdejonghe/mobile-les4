import {
  FlatList,
  ImageBackground,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import recipesData from "../utils/recipes.json";
import { useFonts } from "expo-font";

const RecipeList = (props) => {
  const { navigation } = props;

  return (
    // <ScrollView>
    //   {recipesData.map((recipe) => (
    //     <Text key={recipe.id}>{recipe.name}</Text>
    //   ))}
    // </ScrollView>
    // Bovenstaande manier is niet performant!

    // RenderItem = { index: ..., item: { ... }}
    <FlatList
      style={styles.container}
      data={recipesData}
      renderItem={({ item }) => {
        return (
          <TouchableOpacity
            style={styles.listItem}
            onPress={() => {
              navigation.push("Details", { recipe: item });
            }}
          >
            <ImageBackground
              style={styles.listImage}
              source={{ uri: item.imageURL }}
            >
              <Text style={styles.itemTitle}>{item.name}</Text>
            </ImageBackground>
          </TouchableOpacity>
        );
      }}
      keyExtractor={(item) => item.id.toString()}
    />
  );
};
export default RecipeList;

const styles = StyleSheet.create({
  container: { flex: 1 },
  listItem: { height: 250, margin: 16 },
  listImage: {
    flex: 1,
    justifyContent: "flex-end",
    borderRadius: 24,
    overflow: "hidden",
  },
  itemTitle: {
    fontFamily: "OpenSansBold",
    color: "white",
    fontWeight: "bold",
    fontSize: 24,
    textAlign: "center",
    backgroundColor: "black",
  },
});
