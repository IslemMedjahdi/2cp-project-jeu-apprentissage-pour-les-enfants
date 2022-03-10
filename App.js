import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Screens

import Home from "./app/screens/Home";
import Loading from "./app/screens/Loading";
import Login from "./app/screens/Login";
import NewUser from "./app/screens/NewUser";
import SelectProfile from "./app/screens/SelectProfile";

//redux
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import FirstTime from "./app/screens/FirstTime";

// stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen
            options={{ header: () => null }}
            name="Home"
            component={Home}
          />
          <Stack.Screen
            options={{ header: () => null }}
            name="Loading"
            component={Loading}
          />
          <Stack.Screen
            options={{ header: () => null }}
            name="NewUser"
            component={NewUser}
          />
          <Stack.Screen
            options={{ header: () => null }}
            name="Login"
            component={Login}
          />
          <Stack.Screen
            options={{ header: () => null }}
            name="SelectProfile"
            component={SelectProfile}
          />
          <Stack.Screen
            options={{ header: () => null }}
            name="FirstTime"
            component={FirstTime}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
}
