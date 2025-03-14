import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Forms from "./src/component/forms";
import TelaResultado from "./src/screen/resultado";

const Stack = createStackNavigator();

export default function App() {
  return (

    <NavigationContainer>
      <Stack.Navigator initialRouteName="Forms">
        <Stack.Screen name="Forms" component={Forms} options={{ headerShown: false }} />
        <Stack.Screen name="Resultado" component={TelaResultado} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  );

}
