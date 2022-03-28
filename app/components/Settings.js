import { Center, FlatList, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import colors from "../colors";
import avatars from "../avatars";

export default function Settings() {
  const [showModal, setShowModal] = useState(false);
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  return (
    <Center>
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
            <Pressable
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
                  fontFamily: "RowdiesBold",
                }}
              >
                Règlages
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              height: "75%",
              backgroundColor: colors.MAIN,
              width: "100%",
            }}
          ></View>
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
