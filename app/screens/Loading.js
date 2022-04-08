import { useEffect, useState } from "react";
import { View } from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";
import LottieView from "lottie-react-native";
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
    }, 5000);
  }, []);

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
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "white",
      }}
    >
      <View style={{}}>
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
          leftRotation="0deg"
          leftDistance={-100}
          speed={1200}
          size={150}
        />
      </View>

      {/* <View style={{
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
        </View>  */}

      <View
        style={{
          width: "100%",
          height: "50%",
        }}
      >
        <LottieView
          source={require("../../99589-loader-for-web.json")}
          autoPlay
          loop
        />
      </View>
    </View>
  );
}
