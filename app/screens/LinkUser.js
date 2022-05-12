import { useEffect, useState } from "react";
import {
  Pressable,
  Text,
  TextInput,
  View,
  Image,
  Dimensions,
  BackHandler,
} from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../Core/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setConnected } from "../redux/userSlice";
import { doc, setDoc } from "firebase/firestore";
import { Spinner } from "native-base";
import colors from "../data/colors";

export default function LinkUser({ navigation }) {
  const dispatch = useDispatch();
  const [error, setError] = useState("");
  const profiles = useSelector((state) => state.profiles.value);
  const language = useSelector((state) => state.user.value.language);
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const auth = getAuth();
  const submitHandler = () => {
    if (data.password === data.passwordCheck) {
      setLoading(true);
      createUserWithEmailAndPassword(auth, data.email, data.password)
        .then((response) => {
          dispatch(
            setConnected({ email: response.user.email, uid: response.user.uid })
          );
          setDoc(doc(db, "users", response.user.uid), { profiles }).then(() =>
            navigation.replace("SelectProfile")
          );
        })
        .catch((e) => setError(e.code))
        .finally(() => setLoading(false));
    } else {
      setError(
        language === 0
          ? "les mots de passe ne correspondent pas"
          : language === 1
          ? "password are not matching"
          : "كلمتي السر لا يتطابقان"
      );
    }
  };

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
          source={require("../../assets/hero/mystick10.png")}
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
            ? "Lier votre compte"
            : language === 1
            ? "Link your account"
            : "اربط حسابك مع اللعبة"}
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
              ? "mot de passe"
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
              ? "confirmer le mot de passe"
              : language === 1
              ? "confirme password"
              : "أعد ادخال كلمة السر"
          }
          onChangeText={(text) =>
            setData((data) => {
              setError("");
              return { ...data, passwordCheck: text };
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
              flexDirection: language === 2 ? "row-reverse" : "row",
              alignItems: "center",
            }}
            onPress={() => submitHandler()}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 18 : 16,
                color: "white",
                textAlign: "center",
                marginRight: 10,
              }}
            >
              {language === 0
                ? "Connexion"
                : language === 1
                ? "Login"
                : "تسجيل الدخول"}
            </Text>
            {loading && <Spinner color={"white"} size="sm" />}
          </Pressable>
        </View>
      </View>
    </View>
  );
}
