import { Center, Modal, Pressable, Switch } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";

export default function Settings({
  toggleMusic,
  toggleSound,
  toggleLanguage,
  language,
  music,
  sound,
  navigation,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Animatable.View animation={"zoomIn"} duration={700} delay={500}>
        <Pressable onPress={() => setShowModal(true)}>
          <View
            style={{
              borderColor: "white",
              borderWidth: 2,
              borderRadius: 900,
              padding: 4,
              backgroundColor: "white",
            }}
          >
            <Image
              style={{
                padding: 2,
                height: 40,
                width: 40,
              }}
              resizeMode="contain"
              source={require("../../assets/icons/settings.png")}
            />
          </View>
        </Pressable>
      </Animatable.View>
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
                  fontSize: language === 2 ? 19 : 16,
                }}
              >
                {language === 0
                  ? "Règlages"
                  : language === 1
                  ? "Settings"
                  : "إعدادات"}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "75%",
              backgroundColor: colors.MAIN,
              width: "100%",
              padding: 20,
              alignItems: "center",
            }}
          >
            <View style={{ height: "60%", width: "100%" }}>
              <View
                style={{
                  flexDirection: language === 2 ? "row-reverse" : "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 3,
                  borderColor: "white",
                  height: "25%",
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                  source={require("../../assets/icons/loudspeaker.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: "RowdiesBold",
                    fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: language === 2 ? 20 : 18,
                  }}
                >
                  {language === 0 ? "son" : language === 1 ? "sound" : "صوت"}
                </Text>
                <Switch
                  size="lg"
                  thumbColor={sound ? "#2EEA84" : "#E73922"}
                  trackColor={{ false: "#FF6B6B", true: "#6BFF72" }}
                  onToggle={toggleSound}
                  value={sound}
                />
              </View>
              <View
                style={{
                  flexDirection: language === 2 ? "row-reverse" : "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 3,
                  borderColor: "white",
                  height: "25%",
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                  source={require("../../assets/icons/notes.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: language === 2 ? 20 : 18,
                  }}
                >
                  {language === 0
                    ? "musique"
                    : language === 1
                    ? "music"
                    : "موسيقى"}
                </Text>
                <Switch
                  size="lg"
                  thumbColor={music ? "#2EEA84" : "#E73922"}
                  trackColor={{ false: "#FF6B6B", true: "#6BFF72" }}
                  onToggle={toggleMusic}
                  value={music}
                />
              </View>
              <View
                style={{
                  flexDirection: language === 2 ? "row-reverse" : "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 3,
                  borderColor: "white",
                  height: "25%",
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                  source={require("../../assets/icons/Language.png")}
                />
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
                <Pressable onPress={toggleLanguage}>
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
              <View
                style={{
                  flexDirection: language === 2 ? "row-reverse" : "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 3,
                  borderColor: "white",
                  height: "25%",
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                  source={require("../../assets/icons/aide.png")}
                />
                <Text
                  style={{
                    color: "white",
                    fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: language === 2 ? 20 : 18,
                  }}
                >
                  {language === 0 ? "Aide" : language === 1 ? "Help" : "مساعدة"}
                </Text>
                <View style={{ width: "18%" }}></View>
              </View>
            </View>
            <View style={{ height: "40%" }}>
              <View
                style={{
                  marginTop: "auto",
                  borderRadius: 10,
                  overflow: "hidden",
                }}
              >
                <Pressable
                  android_ripple={{ color: colors.MAIN + "20" }}
                  style={{
                    alignItems: "center",
                    backgroundColor: "white",
                    paddingHorizontal: 10,
                    paddingVertical: 10,
                  }}
                  onPress={() => navigation.replace("SelectProfile")}
                >
                  <Text
                    style={{
                      fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                      fontSize: language === 2 ? 22 : 18,
                      color: colors.MAIN,
                    }}
                  >
                    {language === 0
                      ? "se déconnecter"
                      : language === 1
                      ? "sign out"
                      : "تسجيل الخروج"}
                  </Text>
                </Pressable>
              </View>
            </View>
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
