import { Center, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../colors";

export default function Profil() {
  const [showModal, setShowModal] = useState(false);
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const dispatch = useDispatch();
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        <View
          style={{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 900,
            padding: 4,
          }}
        >
          <Image
            style={{
              padding: 2,
              height: 40,
              width: 40,
            }}
            source={require(`../../assets/avatars/avatar0.png`)}
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
                Profile
              </Text>
              <Image
                style={{ width: 40, height: 40 }}
                source={require(`../../assets/avatars/avatar0.png`)}
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
          <View style={{ alignItems: "center" }}>
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginRight: 30,
                }}
              >
                {profiles[selectedProfile].name}
              </Text>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../../assets/icons/Pencil.png")}
              />
            </View>
            <View
              style={{
                width: "50%",
                height: 2,
                backgroundColor: "black",
                alignSelf: "center",
                marginBottom: 20,
                marginTop: 7,
              }}
            />
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <Text
                style={{
                  textAlign: "center",
                  fontWeight: "bold",
                  fontSize: 20,
                  marginRight: 30,
                }}
              >
                {2022 - profiles[selectedProfile].birthday.year} ans
              </Text>
              <Image
                style={{ width: 18, height: 18 }}
                source={require("../../assets/icons/Calendar.png")}
              />
            </View>
            <View
              style={{
                width: "50%",
                height: 2,
                backgroundColor: "black",
                alignSelf: "center",
                marginBottom: 20,
                marginTop: 7,
              }}
            />
          </View>
        </View>
      </Modal>
    </Center>
  );
}
