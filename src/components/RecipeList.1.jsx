import {
  FlatList,
  ImageBackground,
  Text,
  TouchableOpacity,
} from "react-native";
import recipesData from "../utils/recipes.json";
import { styles } from "./RecipeList";

export const RecipeList = (props) => {
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
              navigation.push("Details"), { recipe: item };
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
