import {
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  BackHandler,
  Dimensions,
} from "react-native";
import { changeProfileHandler } from "../redux/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../data/colors";
import avatars from "../data/avatars";
import React from "react";
import { useEffect, useState } from "react";
import * as Animatable from "react-native-animatable";
import ModifyAge from "../components/ModifyAge";
import ModifyName from "../components/ModifyName";
import ModifyAvatar from "../components/ModifyAvatar";

export default function ModifySelectedProfile({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const user = useSelector((state) => state.user.value);
  const [isOpenAvatar, setIsOpenAvatar] = useState(false);
  const dispatch = useDispatch();
  const [profile, setProfile] = useState(profiles[selectedProfile]);
  const [error, setError] = useState(false);
  const [isOpenName, setIsOpenName] = useState(false);
  const [isOpenAge, setIsOpenAge] = useState(false);
  const onPressHandlerAge = (age) => {
    setProfile({ ...profile, birthday: new Date().getFullYear() - age });
    setIsOpenAge(false);
  };
  const onPressHandlerName = (value) => {
    if (value.trim().length > 0) {
      setProfile((profile) => {
        return { ...profile, name: value };
      });
      setIsOpenName(false);
    } else {
      setError(true);
    }
  };
  const onPressHandlerAvatar = (index) => {
    setProfile((profile) => {
      return {
        ...profile,
        avatar: index,
      };
    });
    setIsOpenAvatar(false);
  };
  const saveHandler = () => {
    dispatch(changeProfileHandler({ profile, selectedProfile }));
    navigation.replace("Loading");
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("ModifyProfile");
        return true;
      }
    );
    return () => backHandler.remove();
  });

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <StatusBar
        backgroundColor={"white"}
        translucent={true}
        barStyle={"light-content"}
      />
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={require("../../assets/icons/fond1.png")}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: Dimensions.get("window").height / 30,
            left: 10,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/hero/mytick4.png")}
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            top: (10 * Dimensions.get("window").height) / 12,
            left: -20,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            height: (30 * Dimensions.get("window").height) / 100,
            width: Dimensions.get("window").width,
            justifyContent: "center",
            marginBottom: 20,
          }}
        >
          <Text
            style={{
              fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: user.language === 2 ? 36 : 30,
              textAlign: "center",
            }}
          >
            {user.language === 0
              ? "Entrez les nouvelles données du profil"
              : user.language === 1
              ? "Enter new profile data"
              : "أدخل بيانات الملف الشخصي الجديدة"}
          </Text>
        </View>

        <View
          style={{
            borderColor: colors.SECOND,
            borderWidth: 3,
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: (50 * Dimensions.get("window").height) / 100,
            borderRadius: 20,
          }}
        >
          <ModifyAvatar
            avatar={profile.avatar}
            language={user.language}
            isOpen={isOpenAvatar}
            setIsOpen={setIsOpenAvatar}
            onPressHandlerAvatar={onPressHandlerAvatar}
          />
          <ModifyName
            error={error}
            name={profile.name}
            language={user.language}
            setError={setError}
            onPressHandlerName={onPressHandlerName}
            isOpen={isOpenName}
            setIsOpen={setIsOpenName}
          />
          <ModifyAge
            language={user.language}
            age={new Date().getFullYear() - profile.birthday}
            onPressHandlerAge={onPressHandlerAge}
            isOpen={isOpenAge}
            setIsOpen={setIsOpenAge}
          />
        </View>
        <View
          style={{
            height: (20 * Dimensions.get("window").height) / 100,
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ borderRadius: 15, overflow: "hidden" }}>
            <Pressable
              android_ripple={{ color: "#FFFFFFEE" }}
              onPress={() => {
                saveHandler();
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
                backgroundColor: colors.SECOND,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 20 : 18,
                  textAlign: "center",
                  color: "white",
                }}
              >
                {user.language === 0
                  ? "Sauvegarder"
                  : user.language === 1
                  ? "Save"
                  : "حفظ"}
              </Text>
            </Pressable>
          </View>
          <View style={{ borderRadius: 15, overflow: "hidden" }}>
            <Pressable
              android_ripple={{ color: colors.SECOND + "10" }}
              onPress={() => {
                navigation.replace("ModifyProfile");
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 20 : 18,
                  textAlign: "center",
                  color: colors.SECOND,
                  textDecorationLine: "underline",
                }}
              >
                {user.language === 0
                  ? "Annuler"
                  : user.language === 1
                  ? "Cancel"
                  : "إلغاء"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
