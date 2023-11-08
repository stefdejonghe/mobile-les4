import { StyleSheet, Text, View } from "react-native";
const RecipeDetailScreen = (props) => {
  const {
    route: {
      params: { recipe },
    },
  } = props;

  return (
    <View>
      <Text>{recipe.name}</Text>
    </View>
  );
};
export default RecipeDetailScreen;
const styles = StyleSheet.create({});
