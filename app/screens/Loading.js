import { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";

//font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

const fetchFont = () => {
  return Font.loadAsync({
    RowdiesBold: require("../../assets/fonts/Rowdies-Bold.ttf"),
    Rowdies: require("../../assets/fonts/Rowdies-Regular.ttf"),
    RowdiesLight: require("../../assets/fonts/Rowdies-Light.ttf"),
  });
};

export default function Loading({ navigation }) {
  const [fontLoaded, setfontLoaded] = useState(false);
  const profiles = useSelector((state) => state.profiles.value);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      /* 
                @Todo
                get The info from local storage, if existe navigate to select Profiles (offline)
                if not :  show login (online) + new User screen ( offline)
      */
    }, 3000);
  }, []);
  const pressHandler = () => {
    navigation.replace("SelectProfile");
  };
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
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontSize: 20,
          textDecorationLine: "underline",
          fontFamily: "Rowdies",
        }}
      >
        Loading page
      </Text>
      <Pressable onPress={pressHandler}>
        <Text
          style={{
            marginTop: 20,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 10,
            color: "white",
            fontFamily: "RowdiesBold",
          }}
        >
          go to selectProfile
        </Text>
      </Pressable>
    </View>
  );
}
