import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  Dimensions,
  FlatList,
  Pressable,
  Image,
} from "react-native";
import colors from "../data/colors";
import avatars from "../data/avatars";
import { useDispatch } from "react-redux";
import { addProfileHandler } from "../redux/profilesSlice";
import * as Animatable from "react-native-animatable";

export default function SelectAvatar({
  language,
  setPage,
  setProfile,
  profile,
  navigation,
}) {
  const [avatar, setAvatar] = useState(0);
  const dispatch = useDispatch();
  const pressHandler = () => {
    setProfile((oldProfile) => {
      return {
        ...oldProfile,
        avatar,
        id: new Date().getTime(),
      };
    });
  };
  useEffect(() => {
    if (profile.id !== 0) {
      dispatch(addProfileHandler({ profile }));
      navigation.replace("Loading");
    }
  }, [profile]);
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
            ? "Choisissez un avatar pour votre enfant"
            : language === 1
            ? "Select an avatar for your kid"
            : "اختر صورة لطفلك "}
        </Text>
      </View>
      <View
        style={{
          height: (6 * Dimensions.get("window").height) / 100,
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
            ? "Personnalisez votre profil"
            : language === 1
            ? "Personalize your profile"
            : "خصص صفحتك الشخصية"}
        </Text>
      </View>
      <View
        style={{
          height: (37 * Dimensions.get("window").height) / 100,
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
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          numColumns={3}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Animatable.View
              duration={500}
              delay={item * 100}
              animation={"zoomIn"}
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
                onPress={() => setAvatar(item)}
                android_ripple={{ color: colors.SECOND }}
                style={{
                  backgroundColor:
                    item === avatar ? colors.SECOND : "transparent",
                  padding: 4,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 50, height: 50 }}
                  source={avatars[item]}
                />
              </Pressable>
            </Animatable.View>
          )}
        />
      </View>
      <View
        style={{
          height: (7 * Dimensions.get("window").height) / 100,
          alignItems: "center",
          justifyContent: "space-evenly",
          width: "80%",
          flexDirection: language === 2 ? "row" : "row-reverse",
        }}
      >
        <Pressable
          onPress={() => pressHandler()}
          style={{
            backgroundColor: colors.SECOND,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
          }}
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
        <Pressable
          style={{
            backgroundColor: "transparent",
            borderColor: colors.SECOND,
            borderWidth: 1,
            paddingHorizontal: 20,
            paddingVertical: 15,
            borderRadius: 10,
          }}
          onPress={() => setPage(1)}
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
    </>
  );
}
