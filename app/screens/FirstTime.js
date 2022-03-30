import AsyncStorageLib from "@react-native-async-storage/async-storage";
import { Pressable, Dimensions, Text, View, Image } from "react-native";
import colors from "../colors";

export default function FirstTime({ navigation }) {
  const setData = async () => {
    try {
      await AsyncStorageLib.setItem(
        "profiles",
        JSON.stringify([
          {
            id: 0,
            name: "Asmaa",
            birthday: 2015,
            score: 500,
            avatar: 2,
            music: false,
            sound: false,
            language: 0,
            badges: [
              {
                image: 0,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 1,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 2,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 4,
                text: ["Master", "Master", "عربية"],
              },
            ],
            levels: [],
            level: 2,
          },
          {
            id: 1,
            name: "Islem",
            birthday: 2002,
            score: 100,
            avatar: 1,
            music: false,
            sound: false,
            language: 0,
            badges: [
              {
                image: 0,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 1,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 2,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 4,
                text: ["Master", "Master", "عربية"],
              },
            ],
            levels: [],
            level: 3,
          },
          {
            id: 3,
            name: "badro",
            birthday: 2002,
            score: 1000,
            avatar: 4,
            music: false,
            sound: false,
            language: 0,
            badges: [
              {
                image: 0,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 1,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 2,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 4,
                text: ["Master", "Master", "عربية"],
              },
            ],
            levels: [],
            level: 3,
          },
          {
            id: 4,
            name: "hadjer",
            birthday: 2002,
            score: 10020,
            avatar: 3,
            music: false,
            sound: false,
            language: 0,
            badges: [
              {
                image: 0,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 1,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 2,
                text: ["Master", "Master", "عربية"],
              },
              {
                image: 4,
                text: ["Master", "Master", "عربية"],
              },
            ],
            levels: [],
            level: 3,
          },
        ])
      );
      console.warn("Hello world2");
    } catch (e) {
      console.warn(e);
    }
  };
  const pressHanlder = () => {
    setData();
    navigation.replace("Loading");
  };
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.MAIN,
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "70%",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <View>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "RowdiesBold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Commencez une aventure avec Mystique
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            overflow: "hidden",
            width: "80%",
          }}
        >
          <Pressable
            android_ripple={{ color: colors.COLOR3 }}
            style={{
              padding: 10,
              backgroundColor: colors.COLOR3 + "AA",
            }}
            onPress={() => pressHanlder()}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "RowdiesBold",
                color: "#FFF",
                fontSize: 16,
              }}
            >
              Commencer
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            transform: [
              { translateX: Dimensions.get("window").width / 5 },
              { rotate: "-15deg" },
              { translateY: Dimensions.get("window").height / 16 },
            ],
          }}
          source={require("../../assets/hero/acceuil.png")}
        />
      </View>
    </View>
  );
}
