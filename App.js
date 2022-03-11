import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens

import Home from "./app/screens/Home";
import Loading from "./app/screens/Loading";
import Login from "./app/screens/Login";
import NewUser from "./app/screens/NewUser";
import SelectProfile from "./app/screens/SelectProfile";
import FirstTime from "./app/screens/FirstTime";

//redux
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

// stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{ header: () => null }}>
          <Stack.Screen name="Home" component={Home} />
          <Stack.Screen name="Loading" component={Loading} />
          <Stack.Screen name="NewUser" component={NewUser} />
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="SelectProfile" component={SelectProfile} />
          <Stack.Screen name="FirstTime" component={FirstTime} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
