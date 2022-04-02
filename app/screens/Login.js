import React, { useState } from "react";
import {
  View,
  Text,
  Pressable,
  TextInput,
  Image,
  Dimensions,
} from "react-native";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../Core/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { useDispatch } from "react-redux";
import { loadProfiles } from "../redux/profilesSlice";
import { loadUser } from "../redux/userSlice";
import colors from "../data/colors";

export default function Login({ navigation, route }) {
  const [error, setError] = useState("");
  const { language } = route.params;
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const auth = getAuth();
  const dispatch = useDispatch();
  const getData = async (uid) => {
    const data = await getDoc(doc(db, "users", uid));
    if (data.exists()) {
      dispatch(loadProfiles({ profiles: data.data().profiles }));
      console.log(data.data().profiles);
    }
  };
  const submitHandler = () => {
    signInWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        getData(response.user.uid);
        dispatch(
          loadUser({
            user: {
              language: 0,
              uid: response.user.uid,
              email: response.user.email,
              connected: true,
            },
          })
        );
        navigation.navigate("SelectProfile");
      })
      .catch((e) => setError(e.code));
  };
  return (
    <View
      style={{ height: "100%", backgroundColor: "white", alignItems: "center" }}
    >
      <View
        style={{
          height: (35 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: "100%" }}
          source={require("../../assets/hero/mystick0.png")}
        />
      </View>
      <View
        style={{
          height: (15 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
        }}
      >
        <Text
          style={{
            textAlign: "center",
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: language === 2 ? 26 : 22,
          }}
        >
          {language === 0
            ? "Connectez vous avec votre compte existant"
            : language === 1
            ? "Connect with your existant account"
            : "قم بتسجيل الدخول بحسابك"}
        </Text>
      </View>
      <View
        style={{
          width: "80%",
          height: (35 * Dimensions.get("window").height) / 100,
          justifyContent: "space-evenly",
        }}
      >
        <TextInput
          style={{
            fontFamily: language === 2 ? "ArbFont" : "Rowdies",
            textAlign: language === 2 ? "right" : "left",
            fontSize: language === 2 ? 18 : 16,
            width: "100%",
            padding: 20,
            borderColor: colors.SECOND,
            borderWidth: 2,
            borderRadius: 10,
            color: colors.SECOND,
          }}
          placeholderTextColor={colors.SECOND + "90"}
          placeholder={
            language === 0 ? "email" : language === 1 ? "email" : "الإيميل"
          }
          onChangeText={(text) => {
            setData((data) => {
              setError("");
              return { ...data, email: text };
            });
          }}
        />
        <TextInput
          style={{
            fontFamily: language === 2 ? "ArbFont" : "Rowdies",
            textAlign: language === 2 ? "right" : "left",
            fontSize: language === 2 ? 18 : 16,
            width: "100%",
            padding: 20,
            borderColor: colors.SECOND,
            borderWidth: 2,
            borderRadius: 10,
            color: colors.SECOND,
          }}
          secureTextEntry
          placeholderTextColor={colors.SECOND + "90"}
          placeholder={
            language === 0
              ? "mot de pass"
              : language === 1
              ? "password"
              : "كلمة السر"
          }
          onChangeText={(text) =>
            setData((data) => {
              setError("");
              return { ...data, password: text };
            })
          }
        />
        <Text
          style={{
            fontFamily: "RowdiesBold",
            color: "red",
            textAlign: language === 2 ? "right" : "left",
            marginEnd: 5,
          }}
        >
          {error}
        </Text>
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
            onPress={() => submitHandler()}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 18 : 16,
                color: "white",
                textAlign: "center",
              }}
            >
              {language === 0
                ? "Connexion"
                : language === 1
                ? "Login"
                : "تسجيل الدخول"}
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
