import { useEffect, useState } from "react";
import { Text, View } from "react-native";
//font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useDispatch } from "react-redux";
import { loadProfiles } from "../redux/profilesSlice";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { loadUser } from "../redux/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../Core/firebaseConfig";

const firstTime = false;
const fetchFont = () => {
  return Font.loadAsync({
    RowdiesBold: require("../../assets/fonts/Rowdies-Bold.ttf"),
    Rowdies: require("../../assets/fonts/Rowdies-Regular.ttf"),
    RowdiesLight: require("../../assets/fonts/Rowdies-Light.ttf"),
    ArbFont: require("../../assets/fonts/arbFont.otf"),
  });
};

export default function Loading({ navigation }) {
  const [fontLoaded, setfontLoaded] = useState(false);
  const dispatch = useDispatch();
  const tryToGetUser = async () => {
    try {
      const value = await AsyncStorageLib.getItem("user");
      if (value !== null) {
        const user = await JSON.parse(value);
        dispatch(loadUser({ user }));
        tryToGetData(user);
      } else {
        navigation.replace("Begin");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  const tryToGetData = async (user) => {
    try {
      const value = await AsyncStorageLib.getItem("profiles");
      if (value !== null) {
        const profiles = await JSON.parse(value);
        if (user.connected) {
          setDoc(doc(db, "users", user.uid), { profiles }).catch((e) =>
            console.log(e)
          );
        }
        dispatch(loadProfiles({ profiles }));
        navigation.replace("SelectProfile");
      } else {
        navigation.replace("AddProfile");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      if (firstTime) {
        AsyncStorageLib.clear();
      } else {
        tryToGetUser();
      }
      /* 
      @Todo
      get The info from local storage, if existe navigate to select Profiles (offline)
      if not :  show login (online) + new User screen ( offline)
      */
    }, 3000);
  }, []);
  const [text, setText] = useState("nothing");
  const [value, setValue] = useState("");
  if (!fontLoaded) {
    return (
      <AppLoading
        startAsync={fetchFont}
        onError={() => console.log("ERROR")}
        onFinish={() => setfontLoaded(true)}
      />
    );
  }
  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text>Loading ....</Text>
    </View>
  );
}
