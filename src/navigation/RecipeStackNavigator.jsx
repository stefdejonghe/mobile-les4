import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import RecipeDetailScreen from "../screens/RecipeDetailScreen";

// Stack Navigator gaan we hier definiëren
// We gaan hier meegeven welke screens/components op welk pad getoond kunnen worden

// Instantie maken van mijn Stack Navigator
const Stack = createStackNavigator();

const RecipeStackNavigator = () => {
  return (
    // De Navigator is nodig om navigatie afhankelijke methodes te kunnen gebruiken
    // Bvb. push(), pop(), ...
    <Stack.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#EE3A18" },
        headerTintColor: "white",
        headerTitleStyle: { fontFamily: "OpenSansBold" },
        headerBackTitleStyle: { fontFamily: "OpenSansBold" },
      }}
    >
      {/* name prop moet uniek zijn doorheen je applicatie */}
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{ title: "Recepten" }}
      />
      <Stack.Screen
        name="Details"
        component={RecipeDetailScreen}
        options={{ title: "Recept" }}
      />
    </Stack.Navigator>
  );
};
export default RecipeStackNavigator;
