import React from "react";
import {
  View,
  Text,
  Dimensions,
  Image,
  TextInput,
  Pressable,
} from "react-native";
import colors from "../colors";
import { useState } from "react";

export default function NameInput({ language, setProfile, setPage }) {
  const [value, setValue] = useState("");
  const pressHandler = () => {
    if (value.trim().length > 0) {
      setProfile((profile) => {
        return { ...profile, name: value };
      });
      setPage(1);
    } else {
      console.warn("value must be > 0");
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
          alignItems: "center",
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
          }}
          placeholderTextColor={colors.SECOND + "90"}
          placeholder={
            language === 0
              ? "Le prénom de votre enfant"
              : language === 1
              ? "your child name"
              : "اسم طفلك"
          }
          onChangeText={setValue}
        />
      </View>
      <View
        style={{
          height: (15 * Dimensions.get("window").height) / 100,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Pressable
          style={{
            backgroundColor: colors.SECOND,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
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
    </>
  );
}
