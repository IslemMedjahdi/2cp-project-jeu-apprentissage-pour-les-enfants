import { Center, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch } from "react-redux";
import colors from "../data/colors";
import { changeLanguageUser } from "../redux/userSlice";

export default function UserSettings({
  language,
  navigation,
  connected,
  email,
}) {
  const [showModal, setShowModal] = useState(false);
  const dispatch = useDispatch();
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? colors.SECOND + "90" : colors.SECOND,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              borderBottomWidth: 2,
              borderBottomColor: colors.SECOND,
              fontSize: language === 2 ? 18 : 16,
            }}
          >
            {language === 0
              ? "gérer mon compte"
              : language === 1
              ? "manage my account"
              : "إدارة حسابي"}
          </Text>
        )}
      </Pressable>
      <Modal
        animationPreset="slide"
        isOpen={showModal}
        onClose={() => {
          setShowModal(false);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "85%",
            height: "70%",
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <View style={{ height: "15%", justifyContent: "center" }}>
            <View
              style={{
                padding: 5,
                backgroundColor: "white",
                borderWidth: 2,
                borderColor: colors.MAIN,
                borderRadius: 10,
              }}
            >
              <Text
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 20,
                  backgroundColor: colors.MAIN,
                  color: "white",
                  borderRadius: 10,
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 18 : 16,
                }}
              >
                {language === 0
                  ? "gérer mon compte"
                  : language === 1
                  ? "manage my account"
                  : "إدارة حسابي"}
              </Text>
            </View>
          </View>
          <View
            style={{
              backgroundColor: colors.MAIN,
              height: "75%",
              width: "100%",
              alignItems: "center",
            }}
          >
            <View
              style={{
                flexDirection: language === 2 ? "row-reverse" : "row",
                width: "80%",
                alignItems: "center",
                justifyContent: "space-between",
                padding: 10,
                borderBottomWidth: 2,
                borderColor: "white",
              }}
            >
              <Text
                style={{
                  color: "white",
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 20 : 18,
                }}
              >
                {language === 0
                  ? "langue"
                  : language === 1
                  ? "language"
                  : "لغة"}
              </Text>
              <Pressable onPress={() => dispatch(changeLanguageUser())}>
                <Image
                  style={{ width: 45, height: 45 }}
                  resizeMode={"contain"}
                  source={
                    language === 0
                      ? require("../../assets/flags/flag0.png")
                      : language === 1
                      ? require("../../assets/flags/flag1.png")
                      : require("../../assets/flags/flag2.png")
                  }
                />
              </Pressable>
            </View>
            {!connected ? (
              <Pressable
                style={{
                  flexDirection: language === 2 ? "row-reverse" : "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomColor: "white",
                  borderBottomWidth: 2,
                  padding: 10,
                  width: "80%",
                }}
                onPress={() => navigation.replace("LinkUser")}
              >
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: language === 2 ? 22 : 20,
                    color: "white",
                  }}
                >
                  {language === 0
                    ? "Connectez-vous avec votre email"
                    : language === 1
                    ? "Connect with your email"
                    : "الربط مع بريدي الالكترونيء"}
                </Text>
                <Image
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/icons/Add.png")}
                />
              </Pressable>
            ) : (
              <View style={{ alignItems: "center", padding: 10 }}>
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: language === 2 ? 22 : 20,
                    color: "white",
                  }}
                >
                  {language === 0
                    ? "Compte connecté avec"
                    : language === 1
                    ? "Account connected with"
                    : "الحساب مربوط ب"}
                </Text>
                <Text
                  style={{
                    fontFamily: "RowdiesBold",
                    fontSize: 20,
                    color: "white",
                  }}
                >
                  {email}
                </Text>
              </View>
            )}
          </View>
          <Pressable
            onPress={() => {
              setShowModal(false);
            }}
            style={{
              height: "10%",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              style={{ height: "90%" }}
              resizeMode="contain"
              source={require("../../assets/icons/Undo.png")}
            />
          </Pressable>
        </View>
      </Modal>
    </Center>
  );
}
