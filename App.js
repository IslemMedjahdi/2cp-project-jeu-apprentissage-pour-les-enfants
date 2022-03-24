import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

//Screens

import Home from "./app/screens/Home";
import Loading from "./app/screens/Loading";
import Login from "./app/screens/Login";
import SelectProfile from "./app/screens/SelectProfile";
import FirstTime from "./app/screens/FirstTime";
import AddProfile from "./app/screens/AddProfile";

//redux
import { Provider } from "react-redux";
import { store } from "./app/redux/store";
import Intro from "./app/screens/Intro";

// stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator screenOptions={{ header: () => null }}>
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="SelectProfile" component={SelectProfile} />
            <Stack.Screen name="AddProfile" component={AddProfile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="FirstTime" component={FirstTime} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
