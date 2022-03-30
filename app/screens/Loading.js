import { useEffect, useState } from "react";
import { Text, View, Pressable, Image, TextInput } from "react-native";

//font
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import { useDispatch } from "react-redux";
import { loadProfiles } from "../redux/profilesSlice";
import AsyncStorageLib from "@react-native-async-storage/async-storage";
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
  const tryToGetData = async () => {
    try {
      const value = await AsyncStorageLib.getItem("profiles", value);
      if (value !== null) {
        const profiles = await JSON.parse(value);
        dispatch(loadProfiles({ profiles }));
        navigation.replace("SelectProfile");
      } else {
        navigation.replace("FirstTime");
      }
    } catch (e) {
      console.warn(e);
    }
  };
  useEffect(() => {
    setTimeout(() => {
      /* 
                @Todo
                get The info from local storage, if existe navigate to select Profiles (offline)
                if not :  show login (online) + new User screen ( offline)
      */
      tryToGetData();
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
      }}
    >
      <View style={{ marginTop: 40, alignItems: "center" }}>
        <Pressable onPress={() => setText("nothing")}>
          {({ pressed }) => (
            <Image
              source={require("../../assets/avatars/avatar0.png")}
              style={{
                width: 100,
                height: 100,
                transform: [
                  {
                    scale: pressed ? 0.9 : 1,
                  },
                ],
              }}
              resizeMode="contain"
            />
          )}
        </Pressable>
        <Text style={{ fontFamily: "RowdiesBold", fontSize: 30 }}>Logo.</Text>
      </View>
      <View style={{ marginTop: 20 }}>
        <Text style={{ fontFamily: "RowdiesBold", fontSize: 20 }}>
          You clicked {text}
        </Text>
      </View>
      <View
        style={{
          marginTop: 30,
          flexWrap: "wrap",
          flexDirection: "row",
          justifyContent: "center",
          padding: 10,
        }}
      >
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "pink",
            borderRadius: 10,
            margin: 5,
          }}
          android_ripple={{ color: "pink" }}
          onPress={() => setText("Islem Medjahdi")}
        >
          <Text style={{ color: "white" }}>Islem Medjahdi</Text>
        </Pressable>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "pink",
            borderRadius: 10,
            margin: 5,
          }}
          android_ripple={{ color: "pink" }}
          onPress={() => setText("Ines Boumaazouza")}
        >
          <Text style={{ color: "white" }}>Ines Boumaazouza</Text>
        </Pressable>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "pink",
            borderRadius: 10,
            margin: 5,
          }}
          android_ripple={{ color: "pink" }}
          onPress={() => setText("Ismail Abderazak")}
        >
          <Text style={{ color: "white" }}>Ismail Abderazak</Text>
        </Pressable>
        <Pressable
          style={{
            padding: 10,
            backgroundColor: "pink",
            borderRadius: 10,
            margin: 5,
          }}
          android_ripple={{ color: "pink" }}
          onPress={() => setText("Habouche Abdou")}
        >
          <Text style={{ color: "white" }}>Habouche Abdou</Text>
        </Pressable>
      </View>
      <View>
        <TextInput
          placeholder="Enter a name"
          style={{
            backgroundColor: "white",
            height: 40,
            width: 200,
            margin: 12,
            padding: 10,
            borderRadius: 10,
          }}
          value={value}
          onChangeText={setValue}
        />
      </View>
      <View>
        <Text style={{ fontFamily: "RowdiesBold", fontSize: 20 }}>
          {value.length > 3 ? value : "your text is short"}
        </Text>
      </View>
      <View>
        <Pressable onPress={() => navigation.replace("FirstTime")}>
          <Text
            style={{
              padding: 10,
              backgroundColor: "pink",
              borderRadius: 10,
              marginTop: 20,
              color: "white",
              fontWeight: "bold",
              fontSize: 20,
            }}
          >
            start the application
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
