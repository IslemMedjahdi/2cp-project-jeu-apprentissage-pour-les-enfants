import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import BouncingPreloader from 'react-native-bouncing-preloaders';
import { Spinner, HStack, Heading} from "native-base";
//font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useDispatch } from "react-redux";
import { loadProfiles } from "../redux/profilesSlice";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { loadUser } from "../redux/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { app, db } from "../Core/firebaseConfig";
import colors from "../data/colors";
import { useSelector } from "react-redux";

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
  const language=1; // todo : language tji men data te3 user
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
    },4000);
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
        backgroundColor: colors.COLOR2,
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
        <View>
            <BouncingPreloader
                icons={[
                  require("../../assets/hero/mystick1.png"),
                  null,
                  require("../../assets/hero/mystick2.png"),
                  null,
                  require("../../assets/hero/mystick3.png"),
                  null,
                  require("../../assets/hero/mytick4.png"),

                ]}
                leftRotation="-90deg"
                leftDistance={-80}
                speed={1200}
                size={120} />
        </View>

        <View style={{
          marginTop : 50
        }}>
          <HStack space={3} justifyContent="center">
            <Spinner accessibilityLabel="Loading posts" size="sm" color="black"/>
            <Heading color="black" fontSize="lg" fontFamily= {language === 2 ? "ArbFont" : "RowdiesBold"}>
                {language === 0
                  ? "Chargement"
                  : language === 1
                  ? "Loading"
                  : "جاري تحميل"}
            </Heading>
          </HStack>
        </View>
    </View>
  );
}


