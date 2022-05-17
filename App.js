import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NativeBaseProvider } from "native-base";

//Screens

import Home from "./app/screens/Home";
import Loading from "./app/screens/Loading";
import LinkUser from "./app/screens/LinkUser";
import StoryBook from "./app/screens/StoryBook.js"
import Story from "./app/screens/Story.js";
import SelectProfile from "./app/screens/SelectProfile";
import AddProfile from "./app/screens/AddProfile";
import Begin from "./app/screens/Begin";
import Intro from "./app/screens/Intro";
import LoadingGame from "./app/screens/LoadingGame";
import DeleteProfile from "./app/screens/DeleteProfile";
import ModifyProfile from "./app/screens/ModifyProfile";
import ModifySelectedProfile from "./app/screens/ModifySelectedProfile";
import Login from "./app/screens/Login";
import SelectTheme from "./app/screens/SelectTheme";
import ShowProgress from "./app/screens/ShowProgress";
import QuizzTest from "./app/screens/QuizzTest";
import Results from "./app/screens/Results";
import ShowProgressSelectedProfile from "./app/screens/ShowProgressSelectedProfile";

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
            <Stack.Screen
              name="ModifySelectedProfile"
              component={ModifySelectedProfile}
            />
            <Stack.Screen name="LinkUser" component={LinkUser} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="Intro" component={Intro} />
            <Stack.Screen name="Begin" component={Begin} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="SelectTheme" component={SelectTheme} />
            <Stack.Screen name="QuizzTest" component={QuizzTest} />
            <Stack.Screen name="Results" component={Results} />
            <Stack.Screen name="LoadingGame" component={LoadingGame} />
            <Stack.Screen name="ShowProgress" component={ShowProgress} />
            <Stack.Screen name="StoryBook" component={StoryBook} />
            <Stack.Screen name="Story" component={Story} />
            <Stack.Screen name="ShowProgressSelectedProfile" component={ShowProgressSelectedProfile} />
          </Stack.Navigator>
        </NavigationContainer>
      </NativeBaseProvider>
    </Provider>
  );
}
