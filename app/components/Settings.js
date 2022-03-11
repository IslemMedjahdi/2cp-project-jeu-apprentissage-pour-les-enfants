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
            width: "80%",
            height: "80%",
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
              }}
            >
              <Text
                style={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginRight: 10,
                }}
              >
                Règlages
              </Text>
              <Image
                style={{ width: 40, height: 40 }}
                source={require("../../assets/icons/settings.png")}
              />
            </View>
          </View>
          <Pressable onPress={() => setShowModal(false)}>
            <Image
              style={{
                backgroundColor: "white",
                borderRadius: 999999,
                alignSelf: "flex-end",
                marginRight: 10,
              }}
              source={require("../../assets/icons/Close.png")}
            />
          </Pressable>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-evenly",
              marginTop: 20,
            }}
          >
            <Image
              style={{ marginLeft: 12, minWidth: 40 }}
              source={require("../../assets/icons/notes.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 17,
                minWidth: 160,
                textAlign: "center",
              }}
            >
              Musique
            </Text>
            <Pressable
              onPress={() => dispatch(toggleMusic({ selectedProfile }))}
            >
              <Text
                style={{
                  backgroundColor: profiles[selectedProfile].music
                    ? colors.GREEN
                    : colors.RED,
                  padding: 7,
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 10,
                  marginRight: 12,
                }}
              >
                {profiles[selectedProfile].music ? "ON" : "OFF"}
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
              justifyContent: "space-evenly",
            }}
          >
            <Image
              style={{ marginLeft: 12, minWidth: 40 }}
              source={require("../../assets/icons/loudspeaker.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 17,
                minWidth: 160,
                textAlign: "center",
              }}
            >
              Son
            </Text>
            <Pressable
              onPress={() => dispatch(toggleSound({ selectedProfile }))}
            >
              <Text
                style={{
                  backgroundColor: profiles[selectedProfile].sound
                    ? colors.GREEN
                    : colors.RED,
                  padding: 7,
                  color: "white",
                  fontWeight: "bold",
                  borderRadius: 10,
                  marginRight: 12,
                }}
              >
                {profiles[selectedProfile].sound ? "ON" : "OFF"}
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
              justifyContent: "space-evenly",
            }}
          >
            <Image
              style={{ marginLeft: 12, minWidth: 40 }}
              source={require("../../assets/icons/Language.png")}
            />
            <Text
              style={{
                fontWeight: "bold",
                color: "black",
                fontSize: 17,

                minWidth: 160,
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
              onPress={() => dispatch(changeLanguage({ selectedProfile }))}
            >
              {profiles[selectedProfile].language === 0 ? (
                <Image source={require("../../assets/flags/flag0.png")} />
              ) : profiles[selectedProfile].language === 1 ? (
                <Image source={require("../../assets/flags/flag1.png")} />
              ) : (
                <Image source={require("../../assets/flags/flag2.png")} />
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
              style={{ marginLeft: 12, minWidth: 40 }}
              source={require("../../assets/icons/aide.png")}
            />
            <Pressable>
              <Text
                style={{
                  fontWeight: "bold",
                  color: "black",
                  fontSize: 17,
                  minWidth: 160,
                  textAlign: "center",
                }}
              >
                Aide
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
