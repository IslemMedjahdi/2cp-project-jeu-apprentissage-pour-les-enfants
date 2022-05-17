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
          flexDirection: language === 2 ? "row-reverse" : "row",
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
              style={{
                height: 100,
                width: 100,
                transform: [{ rotateY: language === 2 ? "180deg" : "0deg" }],
              }}
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
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 33 : 30,
            }}
          >
            {language === 0 ? "Nom" : language === 1 ? "Name" : "الاسم"} :{" "}
            {profile.name}
          </Text>
          <Text
            style={{
              color: "white",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 33 : 30,
            }}
          >
            {language === 0 ? "Age" : language === 1 ? "Age" : "العمر"} :{" "}
            {new Date().getFullYear() - profile.birthday}{" "}
            {language === 0 ? "ans" : language === 1 ? "years" : "سنوات"}
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
            flexDirection: language === 2 ? "row-reverse" : "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 30 : 28,
              width: "60%",
            }}
          >
            {language === 0
              ? "Score accumulé :"
              : language === 1
              ? "Accumulated score :"
              : "النقاط المحصلة : "}
          </Text>
          <View
            style={{
              borderRadius: 20,
              borderColor: colors.MAIN,
              width: "30%",
              height: "55%",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: colors.MAIN,
                fontFamily: "RowdiesBold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {profile.score}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: (10 * Dimensions.get("window").height) / 100,
            flexDirection: language === 2 ? "row-reverse" : "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 30 : 28,
              width: "60%",
            }}
          >
            {language === 0
              ? " Niveau actuel : "
              : language === 1
              ? "Actual level : "
              : "المستوى الحالي : "}
          </Text>

          <View
            style={{
              borderRadius: 20,
              borderColor: colors.MAIN,
              width: "30%",
              height: "55%",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: colors.MAIN,
                fontFamily: "RowdiesBold",
                fontSize: 20,
                textAlign: "center",
              }}
            >
              {profile.level} / {themes.length}
            </Text>
          </View>
        </View>
        <View
          style={{
            height: (10 * Dimensions.get("window").height) / 100,
            flexDirection: language === 2 ? "row-reverse" : "row",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 30 : 28,
              width: "60%",
            }}
          >
            {language === 0
              ? " Badges : "
              : language === 1
              ? " Badges : "
              : "الإنجازات : "}
          </Text>
          <View
            style={{
              borderRadius: 20,
              borderColor: colors.MAIN,
              width: "30%",
              height: "55%",
              borderWidth: 2,
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                color: colors.MAIN,
                fontSize: 20,
                fontFamily: "RowdiesBold",
                textAlign: "center",
              }}
            >
              {profile.badges.length} / 5
            </Text>
          </View>
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
            fontSize: language === 2 ? 24 : 22,
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            alignSelf: "center",
          }}
        >
          {language === 0
            ? "Compétences acquises"
            : language === 1
            ? "Acquired skills"
            : "الكفاءات المكتسبة"}
        </Text>
        <View
          style={{
            flexDirection: language === 2 ? "row-reverse" : "row",
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
                  transform: [{ rotateY: language === 2 ? "180deg" : "0deg" }],
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
                flexDirection: language === 2 ? "row-reverse" : "row",
                alignSelf: "center",
                justifyContent: "space-evenly",
                width: "90%",
              }}
            >
              <Text
                style={{
                  fontSize: 20,
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                }}
              >
                {language === 0
                  ? "Theme : "
                  : language === 1
                  ? "Theme : "
                  : "المستوى : "}
              </Text>
              <Text
                style={{
                  color: colors.MAIN,
                  fontSize: 20,
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                }}
              >
                {themes[themePage].name[language]}
              </Text>
            </View>
            <View style={{ borderWidth: 2, borderColor: colors.MAIN }}></View>
            {profile.levels[themePage].stars >= 2 && (
              <FlatList
                showsVerticalScrollIndicator={false}
                keyExtractor={(_, index) => index.toString()}
                data={themes[themePage].skills}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      alignSelf: "center",
                      width: "100%",
                      flexDirection: language === 2 ? "row-reverse" : "row",
                      justifyContent: "center",
                      alignItems: "center",
                      marginHorizontal: 4,
                      marginVertical: 10,
                    }}
                  >
                    <View
                      style={{
                        width: 10,
                        height: 10,
                        borderRadius: 5,
                        backgroundColor: colors.MAIN,
                        marginHorizontal: 5,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                        fontSize: language === 2 ? 18 : 16,
                        width: "90%",
                        lineHeight: language === 2 ? 20 : 18,
                      }}
                    >
                      {item[language]}
                    </Text>
                  </View>
                )}
              />
            )}
            {profile.levels[themePage].stars < 2 && (
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
                  transform: [{ rotateY: language === 2 ? "180deg" : "0deg" }],
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
