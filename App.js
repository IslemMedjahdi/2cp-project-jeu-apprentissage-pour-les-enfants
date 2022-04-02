import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

//Screens

import Home from "./app/screens/Home";
import Loading from "./app/screens/Loading";
import Login from "./app/screens/Login";
import SelectProfile from "./app/screens/SelectProfile";
import AddProfile from "./app/screens/AddProfile";
import Begin from "./app/screens/Begin";
import Intro from "./app/screens/Intro";
import DeleteProfile from "./app/screens/DeleteProfile";
import ModifyProfile from "./app/screens/ModifyProfile";

//redux
import { Provider } from "react-redux";
import { store } from "./app/redux/store";

// stack
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store={store}>
      <NativeBaseProvider>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              header: () => null,
            }}
          >
            <Stack.Screen name="Loading" component={Loading} />
            <Stack.Screen name="SelectProfile" component={SelectProfile} />
            <Stack.Screen name="AddProfile" component={AddProfile} />
            <Stack.Screen name="DeleteProfile" component={DeleteProfile} />
            <Stack.Screen name="ModifyProfile" component={ModifyProfile} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Begin" component={Begin} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
