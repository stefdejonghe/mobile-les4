import { StyleSheet, Text, View } from "react-native";
import RecipeList from "../components/RecipeList";
const HomeScreen = (props) => {
  // Navigation property
  const { navigation } = props;

  return (
    <View style={styles.container}>
      <RecipeList navigation={navigation} />
    </View>
  );
};
export default HomeScreen;
const styles = StyleSheet.create({
  container: { flex: 1 },
});
