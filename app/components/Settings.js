import { Center, Modal, Pressable } from "native-base";
import React, { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../colors";
import {
  changeLanguage,
  toggleMusic,
  toggleSound,
} from "../redux/profilesSlice";

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const dispatch = useDispatch();
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        <View>
          <Image
            style={{
              height: 40,
              width: 40,
            }}
            source={require("../../assets/icons/settings.png")}
          />
        </View>
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <View
          style={{
            backgroundColor: colors.YELLOW,
            width: "85%",
            height: "85%",
            borderRadius: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderColor: "white",
                justifyContent: "space-between",
                borderWidth: 2,
                borderRadius: 20,
                padding: 8,
                backgroundColor: colors.YELLOW,
                transform: [{ translateY: -10 }],
                backgroundColor: colors.BEIGE,
                shadowColor: "#000",
                shadowOffset: {
                  width: 3,
                  height: 10,
                },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: "RowdiesBold",
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginRight: 10,
                }}
              >
                {profiles[selectedProfile].language === 0
                  ? "Règlages"
                  : profiles[selectedProfile].language === 1
                  ? "Settings"
                  : "إعدادات"}
              </Text>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/icons/settings.png")}
              />
            </View>
          </View>
          <Pressable
            style={{
              marginTop: -50,
              marginRight: 10,
              borderRadius: 999,
            }}
            onPress={() => setShowModal(false)}
          >
            <Image
              style={{
                alignSelf: "flex-end",
                backgroundColor: "white",
                width: 30,
                borderRadius: 999,
                height: 30,
              }}
              source={require("../../assets/icons/Close.png")}
            />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              marginTop: 50,
            }}
          >
            <Image
              style={{ marginLeft: 12, width: 40, height: 40 }}
              resizeMode="contain"
              source={require("../../assets/icons/notes.png")}
            />
            <Text
              style={{
                fontFamily: "RowdiesBold",
                color: "black",
                fontSize: 17,
                width: 160,
                textAlign: "center",
              }}
            >
              {profiles[selectedProfile].language === 0
                ? "Musique"
                : profiles[selectedProfile].language === 1
                ? "Music"
                : "موسيقى"}
            </Text>
            <Pressable
              onPress={() => dispatch(toggleMusic({ selectedProfile }))}
            >
              <Text
                style={{
                  backgroundColor: profiles[selectedProfile].music
                    ? colors.GREEN
                    : colors.RED,
                  paddingHorizontal: 5,
                  paddingVertical: 3,
                  color: "white",
                  fontFamily: "RowdiesBold",
                  borderRadius: 10,
                  marginRight: 12,
                }}
              >
                {profiles[selectedProfile].music
                  ? profiles[selectedProfile].language === 0
                    ? "ON"
                    : profiles[selectedProfile].language === 1
                    ? "ON"
                    : "مفعل"
                  : profiles[selectedProfile].language === 0
                  ? "OFF"
                  : profiles[selectedProfile].language === 1
                  ? "OFF"
                  : "غير مفعل"}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: "90%",
              height: 2,
              backgroundColor: "black",
              alignSelf: "center",
              marginBottom: 20,
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              resizeMode="contain"
              style={{ marginLeft: 12, width: 40, height: 40 }}
              source={require("../../assets/icons/loudspeaker.png")}
            />
            <Text
              style={{
                fontFamily: "RowdiesBold",
                color: "black",
                fontSize: 17,
                width: 160,
                textAlign: "center",
              }}
            >
              {profiles[selectedProfile].language === 0
                ? "Son"
                : profiles[selectedProfile].language === 1
                ? "Sound"
                : "صوت"}
            </Text>
            <Pressable
              onPress={() => dispatch(toggleSound({ selectedProfile }))}
            >
              <Text
                style={{
                  backgroundColor: profiles[selectedProfile].sound
                    ? colors.GREEN
                    : colors.RED,
                  paddingHorizontal: 5,
                  paddingVertical: 3,
                  color: "white",
                  fontFamily: "RowdiesBold",
                  borderRadius: 10,
                  marginRight: 12,
                }}
              >
                {profiles[selectedProfile].sound
                  ? profiles[selectedProfile].language === 0
                    ? "ON"
                    : profiles[selectedProfile].language === 1
                    ? "ON"
                    : "مفعل"
                  : profiles[selectedProfile].language === 0
                  ? "OFF"
                  : profiles[selectedProfile].language === 1
                  ? "OFF"
                  : "غير مفعل"}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: "90%",
              height: 2,
              backgroundColor: "black",
              alignSelf: "center",
              marginBottom: 20,
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Image
              style={{ width: 40, height: 40, marginLeft: 16 }}
              resizeMode="contain"
              source={require("../../assets/icons/Language.png")}
            />
            <Text
              style={{
                fontFamily: "RowdiesBold",
                color: "black",
                fontSize: 17,

                width: 160,
                textAlign: "center",
              }}
            >
              {profiles[selectedProfile].language === 0
                ? "langues"
                : profiles[selectedProfile].language === 1
                ? "languages"
                : "لغات"}
            </Text>
            <Pressable
              style={{ marginRight: 20 }}
              onPress={() => dispatch(changeLanguage({ selectedProfile }))}
            >
              {profiles[selectedProfile].language === 0 ? (
                <Image
                  resizeMode="contain"
                  style={{
                    width: 40,
                    height: 40,
                  }}
                  source={require("../../assets/flags/flag0.png")}
                />
              ) : profiles[selectedProfile].language === 1 ? (
                <Image
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/flags/flag1.png")}
                />
              ) : (
                <Image
                  resizeMode="contain"
                  style={{ width: 40, height: 40 }}
                  source={require("../../assets/flags/flag2.png")}
                />
              )}
            </Pressable>
          </View>
          <View
            style={{
              width: "90%",
              height: 2,
              backgroundColor: "black",
              alignSelf: "center",
              marginBottom: 20,
              marginTop: 10,
            }}
          />
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
            }}
          >
            <Image
              style={{ marginLeft: 28, width: 40, height: 40 }}
              resizeMode="contain"
              source={require("../../assets/icons/aide.png")}
            />
            <Pressable>
              <Text
                style={{
                  fontFamily: "RowdiesBold",
                  color: "black",
                  fontSize: 17,
                  width: 160,
                  textAlign: "center",
                }}
              >
                {profiles[selectedProfile].language === 0
                  ? "Aide"
                  : profiles[selectedProfile].language === 1
                  ? "Help"
                  : "مساعدة"}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              width: "90%",
              height: 2,
              backgroundColor: "black",
              alignSelf: "center",
              marginBottom: 20,
              marginTop: 10,
            }}
          />
        </View>
      </Modal>
    </Center>
  );
}
