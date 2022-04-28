import { Center, Modal, Pressable, Switch } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";

export default function SettingsGame({
  toggleSound,
  sound,
  language,
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
                height: 30,
                width: 30,
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
            height: "60%",
            borderRadius: 20,
            alignItems: "center",
          }}
        >
          <View style={{ height: "17%", justifyContent: "center" }}>
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
                  ? "Pause"
                  : language === 1
                  ? "Pause"
                  : "إيقاف مؤقت"}
              </Text>
            </View>
          </View>
          <View
            style={{
              height: "70%",
              backgroundColor: colors.MAIN,
              width: "100%",
              padding: 20,
              alignItems: "center",
            }}
          >
            <View style={{ height: "90%", width: "100%" }}>
              <View
                style={{
                  flexDirection: language === 2 ? "row-reverse" : "row",
                  width: "100%",
                  alignItems: "center",
                  justifyContent: "space-between",
                  borderBottomWidth: 3,
                  borderColor: "white",
                  height: "35%",
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
                  borderBottomWidth: 3,
                  borderColor: "white",
                  height: "35%",
                  justifyContent: "space-between",
                }}
              >
                <Image
                  style={{ width: 40, height: 40 }}
                  resizeMode="contain"
                  source={require("../../assets/icons/quitter.png")}
                />
                <Pressable onPress={() => navigation.replace("SelectTheme")}>
                  <Text
                    style={{
                      color: "white",
                      fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                      fontSize: language === 2 ? 20 : 18,
                    }}
                  >
                    {language === 0
                      ? "Sortir"
                      : language === 1
                      ? "Get out"
                      : "خروج"}
                  </Text>
                </Pressable>
                <View />
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
