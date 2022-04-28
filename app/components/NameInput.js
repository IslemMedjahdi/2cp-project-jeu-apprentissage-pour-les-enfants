import React, { useEffect } from "react";
import {
  View,
  Text,
  Dimensions,
  TextInput,
  Pressable,
  BackHandler,
} from "react-native";
import colors from "../data/colors";
import { useState } from "react";

export default function NameInput({
  language,
  setProfile,
  setPage,
  navigation,
}) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("SelectProfile");
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const pressHandler = () => {
    if (value.trim().length > 0) {
      setProfile((profile) => {
        return { ...profile, name: value };
      });
      setPage(1);
    } else {
      setError(true);
    }
  };
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
            ? "Le prénom de votre enfant"
            : language === 1
            ? "your child name"
            : "اسم طفلك"}
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
            ? "Ajouter le nom de votre enfant ici. Vous pourrez le changer aprés"
            : language === 1
            ? "Add the name of your child here. You can change it at any time"
            : "أدخل اسم طفلك هنا. يمكنك تغييره في أي وقت "}
        </Text>
      </View>
      <View
        style={{
          height: (25 * Dimensions.get("window").height) / 100,
          width: "80%",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            fontFamily: language === 2 ? "ArbFont" : "Rowdies",
            fontSize: language === 2 ? 18 : 16,
            width: "100%",
            padding: 20,
            borderColor: colors.SECOND,
            borderWidth: 2,
            borderRadius: 10,
            color: colors.SECOND,
            textAlign: language === 2 ? "right" : "left",
          }}
          maxLength={12}
          placeholderTextColor={colors.SECOND + "90"}
          placeholder={
            language === 0
              ? "Le prénom de votre enfant"
              : language === 1
              ? "your child name"
              : "اسم طفلك"
          }
          onChangeText={(text) => {
            setValue(text);
            setError(false);
          }}
        />
        {error && (
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "Rowdies",
              color: "red",
              marginStart: 5,
              marginTop: 5,
            }}
          >
            {language === 0
              ? "Le nom ne doit pas être vide"
              : language === 1
              ? "Name must not be empty"
              : "يجب ألا يكون الاسم فارغا"}
          </Text>
        )}
      </View>
      <View
        style={{
          height: (15 * Dimensions.get("window").height) / 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Pressable
            android_ripple={{ color: "#ffffff30" }}
            style={{
              backgroundColor: colors.SECOND,
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
            onPress={() => pressHandler()}
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
      </View>
    </>
  );
}
