import { Center, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import colors from "../colors";

export default function ProfilesManager({
  toggleMusic,
  toggleSound,
  toggleLanguage,
  language,
}) {
  const [showModal, setShowModal] = useState(false);
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        {({ pressed }) => (
          <Text
            style={{
              color: pressed ? colors.SECOND + "90" : colors.SECOND,
              fontFamily: "RowdiesBold",
              textDecorationLine: "underline",
              textDecorationColor: colors.SECOND,
              textDecorationStyle: "solid",
              fontSize: 18,
            }}
          >
            gérer mes profiles
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
                  fontFamily: "RowdiesBold",
                  fontSize: 16,
                }}
              >
                Getion de profils
              </Text>
            </View>
          </View>
        </View>
      </Modal>
    </Center>
  );
}
