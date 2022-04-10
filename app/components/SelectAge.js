import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Pressable,
  Dimensions,
  FlatList,
  BackHandler,
} from "react-native";
import * as Animatable from "react-native-animatable";
import colors from "../data/colors";
export default function SelectAge({ language, setPage, setProfile }) {
  const [age, setAge] = useState(4);
  const pressHandler = () => {
    setProfile((profile) => {
      return { ...profile, birthday: new Date().getFullYear() - age };
    });
    setPage(2);
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        setPage(0);
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  return (
    <>
      <View
        style={{
          height: (15 * Dimensions.get("window").height) / 100,
          width: "80%",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Text
          style={{
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: language === 2 ? 26 : 24,
            textAlign: "center",
          }}
        >
          {language === 0
            ? "Sélectionnez l'age de votre enfant"
            : language === 1
            ? "Select the age of your children"
            : "اختر عمر طفلك "}
        </Text>
      </View>
      <View
        style={{
          height: (10 * Dimensions.get("window").height) / 100,
          width: "80%",
        }}
      >
        <Text
          style={{
            fontFamily: language === 2 ? "ArbFont" : "Rowdies",
            fontSize: language === 2 ? 16 : 14,
            color: "gray",
            textAlign: "center",
          }}
        >
          {language === 0
            ? "Nous recueillons les ages à une seule fin de personnalisation. Nous veillons à protéger votre vie privée."
            : language === 1
            ? "We collect ages for personalization purposes only. We take cate to protect your privacy."
            : "نحن نجمع الأعمار لأغراض التخصيص فقك. نحن نحرص على حماية خصوصيتك."}
        </Text>
      </View>
      <View
        style={{
          height: (33 * Dimensions.get("window").height) / 100,
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          contentContainerStyle={{
            justifyContent: "space-between",
            alignContent: "space-between",
            height: "100%",
            padding: 20,
          }}
          data={language === 2 ? [5, 4, 7, 6] : [4, 5, 6, 7]}
          numColumns={2}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Animatable.View
              animation={"zoomIn"}
              duration={500}
              delay={(item - 4) * 300}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.SECOND,
                borderWidth: 2,
                borderRadius: 10,
                margin: 10,
                overflow: "hidden",
              }}
            >
              <Pressable
                android_ripple={{
                  color: item === age ? "#ffffff40" : colors.SECOND,
                }}
                style={{
                  padding: item === age ? 22 : 20,
                  backgroundColor: item === age ? colors.SECOND : "transparent",
                }}
                onPress={() => {
                  setAge(item);
                }}
              >
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                    fontSize: language === 2 ? 18 : 16,
                    color: item === age ? "white" : colors.SECOND,
                    textAlign: "center",
                  }}
                >
                  {item}{" "}
                  {language === 0 ? "ans" : language === 1 ? "years" : "سنوات"}
                </Text>
              </Pressable>
            </Animatable.View>
          )}
        />
      </View>
      <View
        style={{
          height: (13 * Dimensions.get("window").height) / 100,
          alignItems: "center",
          justifyContent: "space-evenly",
          marginTop: 10,
          width: "80%",
          flexDirection: language === 2 ? "row" : "row-reverse",
        }}
      >
        <View
          style={{
            backgroundColor: colors.SECOND,
            borderRadius: 10,
            overflow: "hidden",
          }}
        >
          <Pressable
            style={{
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
            onPress={() => pressHandler()}
            android_ripple={{ color: "#ffffff40" }}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                fontSize: language === 2 ? 18 : 16,
                color: "white",
                textAlign: "center",
              }}
            >
              {language === 0
                ? "Continuer"
                : language === 1
                ? "Continue"
                : "تابع"}
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderRadius: 10,
            overflow: "hidden",
            borderColor: colors.SECOND,
            borderWidth: 1,
          }}
        >
          <Pressable
            android_ripple={{ color: colors.SECOND }}
            style={{
              backgroundColor: "transparent",
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
            onPress={() => setPage(0)}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                fontSize: language === 2 ? 18 : 16,
                color: colors.SECOND,
                textAlign: "center",
              }}
            >
              {language === 0 ? "Retour" : language === 1 ? "Back" : "رجوع"}
            </Text>
          </Pressable>
        </View>
      </View>
    </>
  );
}
