import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  View,
} from "react-native";
import avatars from "../data/avatars";
import colors from "../data/colors";
import { useEffect, useState } from "react";
import themes from "../data/themes";

/* 
NOTE : rani dayer user y9ad ychouf les competences
 te3 les niveau li rah 3ndeh fihom 3 stars berk .
 bech tchouf les competences bla ma tjib 3 stars
  hawad ta7t w baddal fel condition (lines 300 - 331).
  Mazel mdrtch traduction te3 klmat 3la hssab language .
  durha nta wla khliha ki nod ndirha .
 */

export default function ShowProgressSelectedProfile({ navigation, route }) {
  const { profile, user } = route.params;
  const language = user.language;
  const [themePage, setThemePage] = useState(0);
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("ShowProgress");
        return true;
      }
    );
    return () => backHandler.remove();
  });
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <View
        style={{
          height: (25 * Dimensions.get("window").height) / 100,
          backgroundColor: colors.MAIN,
          borderBottomLeftRadius: 30,
          borderBottomRightRadius: 30,
          flexDirection: "row",
        }}
      >
        <View
          style={{
            height: "100%",
            width: "40%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <View
            style={{
              height: (15 * Dimensions.get("window").height) / 100,
              width: (15 * Dimensions.get("window").height) / 100,
              backgroundColor: "white",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: 60,
            }}
          >
            <Image
              source={avatars[profile.avatar]}
              style={{ height: 100, width: 100 }}
              resizeMode="contain"
            />
          </View>
        </View>
        <View
          style={{
            justifyContent: "center",
            alignItems: "center",
            width: "60%",
          }}
        >
          <Text
            style={{
              color: "white",
              fontFamily: "RowdiesBold",
              fontSize: 30,
            }}
          >
            {" "}
            Nom : {profile.name}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: "RowdiesBold",
              fontSize: 30,
            }}
          >
            Age : {new Date().getFullYear() - profile.birthday} ans
          </Text>
        </View>
      </View>
      <View
        style={{
          height: (30 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <View
          style={{
            height: (10 * Dimensions.get("window").height) / 100,
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "RowdiesBold",
              fontSize: 28,
              width: "60%",
            }}
          >
            Score accumulé :
          </Text>
          <Text
            style={{
              color: colors.MAIN,
              fontFamily: "RowdiesBold",
              fontSize: 28,
              borderWidth: 2,
              paddingHorizontal: 30,
              borderRadius: 20,
              borderColor: colors.MAIN,
              width: "30%",
              height: "55%",
              textAlign: "center",
            }}
          >
            {profile.score}
          </Text>
        </View>
        <View
          style={{
            height: (10 * Dimensions.get("window").height) / 100,
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "RowdiesBold",
              fontSize: 28,
              width: "60%",
            }}
          >
            Niveau actuel :
          </Text>
          <Text
            style={{
              color: colors.MAIN,
              fontFamily: "RowdiesBold",
              fontSize: 28,
              borderWidth: 2,
              paddingHorizontal: 30,
              borderRadius: 20,
              borderColor: colors.MAIN,
              width: "30%",
              height: "55%",
              textAlign: "center",
            }}
          >
            {profile.level} / {themes.length}
          </Text>
        </View>
        <View
          style={{
            height: (10 * Dimensions.get("window").height) / 100,
            flexDirection: "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "RowdiesBold",
              fontSize: 28,
              width: "60%",
            }}
          >
            Badges :
          </Text>
          <Text
            style={{
              color: colors.MAIN,
              fontFamily: "RowdiesBold",
              fontSize: 28,
              borderWidth: 2,
              paddingHorizontal: 30,
              borderRadius: 20,
              borderColor: colors.MAIN,
              width: "30%",
              height: "55%",
              textAlign: "center",
            }}
          >
            {profile.badges.length} / 5
          </Text>
        </View>
      </View>
      <View
        style={{
          backgroundColor: colors.MAIN,
          height: (40 * Dimensions.get("window").height) / 100,
          width: "95%",
          alignSelf: "center",
          borderRadius: 20,
        }}
      >
        <Text
          style={{
            color: "white",
            fontSize: 22,
            fontFamily: "RowdiesBold",
            alignSelf: "center",
          }}
        >
          Compétences acquises
        </Text>
        <View
          style={{
            flexDirection: "row",
            width: "100%",
            height: "82%",
            justifyContent: "center",
          }}
        >
          <View style={{ height: "30%", width: "10%", alignSelf: "center" }}>
            {themePage > 0 && (
              <Pressable
                onPress={() => {
                  setThemePage(themePage - 1);
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: "100%" }}
                  resizeMode="contain"
                  source={require("../../assets/icons/whiteArrowleft.png")}
                />
              </Pressable>
            )}
          </View>
          <View
            style={{
              backgroundColor: "white",
              height: "100%",
              width: "80%",
              alignSelf: "center",
              borderRadius: 20,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignSelf: "center",
                justifyContent: "space-evenly",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: "RowdiesBold",
                }}
              >
                Theme :
              </Text>
              <Text
                style={{
                  color: colors.MAIN,
                  fontSize: 20,
                  fontFamily: "RowdiesBold",
                }}
              >
                {themes[themePage].name[language]}
              </Text>
            </View>
            <View style={{ borderWidth: 2, borderColor: colors.MAIN }}></View>
            {profile.levels[themePage].stars === 3 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                data={themes[themePage].skills}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      flexDirection: "row",
                      justifyContent: "center",
                      margin: 4,
                    }}
                  >
                    <Text style={{ color: colors.MAIN, fontSize: 30 }}>
                      {" • "}
                    </Text>
                    <Text
                      style={{
                        fontFamily: "Rowdies",
                        fontSize: 16,
                        width: "90%",
                      }}
                    >
                      {item[language]}
                    </Text>
                  </View>
                )}
              />
            )}
            {profile.levels[themePage].stars !== 3 && (
              <View
                style={{
                  height: "85%",
                  backgroundColor: "#D3D3D3",
                  justifyContent: "center",
                  borderBottomLeftRadius: 20,
                  borderBottomRightRadius: 20,
                }}
              >
                <Image
                  resizeMode="contain"
                  source={require("../../assets/icons/lock.png")}
                  style={{
                    width: 100,
                    height: 100,
                    alignSelf: "center",
                  }}
                />
              </View>
            )}
          </View>
          <View style={{ height: "30%", width: "10%", alignSelf: "center" }}>
            {themePage < themes.length - 1 && (
              <Pressable
                onPress={() => {
                  setThemePage(themePage + 1);
                }}
                style={{
                  height: "100%",
                  width: "100%",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Image
                  style={{ height: "100%" }}
                  resizeMode="contain"
                  source={require("../../assets/icons/whiteArrowright.png")}
                />
              </Pressable>
            )}
          </View>
        </View>
      </View>
      <Pressable
        onPress={() => {
          navigation.goBack();
        }}
        style={{
          height: (10 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
          alignItems: "center",
          alignSelf: "center",
        }}
      >
        <Image
          style={{ height: "100%" }}
          resizeMode="contain"
          source={require("../../assets/icons/Undo.png")}
        />
      </Pressable>
    </View>
  );
}
