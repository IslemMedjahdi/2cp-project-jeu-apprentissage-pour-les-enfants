import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Center, Modal } from "native-base";
import colors from "../data/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function DeleteButton({ language, deleteProfileHandler, name }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Center>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        android_ripple={{
          color: "#FF000040",
          borderless: true,
        }}
      >
        <Image
          style={{ width: 40, height: 40 }}
          source={require("../../assets/icons/Remove.png")}
          resizeMode="contain"
        />
      </Pressable>
      <Modal
        animationPreset="slide"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "81%",
            height: "40%",
            borderRadius: 40,
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.SECOND,
            justifyContent: "space-around",
          }}
        >
          <View
            style={{
              height: "40%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 28 : 25,
                textAlign: "center",
                maxWidth: "90%",
              }}
            >
              {language === 0
                ? "Voulez-vous vraiment supprimer le profil de  "
                : language === 1
                ? "Are you sure you want to delete the profile of  "
                : "  هل أنت متأكد أنك تريد حذف صفحة"}
              {name}
              {language === 0 ? " ? " : language === 1 ? " ? " : " ؟ "}
            </Text>
          </View>
          <View
            style={{
              height: "30%",
              width: "100%",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Pressable
              android_ripple={{ color: "#FFFFFFEE" }}
              onPress={deleteProfileHandler}
              style={{
                paddingVertical: 10,
                backgroundColor: colors.SECOND,
                borderRadius: 15,
                paddingHorizontal: 30,
              }}
            >
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                  fontSize: language === 2 ? 24 : 22,
                  color: "white",
                  textAlign: "center",
                }}
              >
                {language === 0
                  ? "Supprimer"
                  : language === 1
                  ? "Delete"
                  : "حذف"}
              </Text>
            </Pressable>
          </View>

          <View
            style={{
              flexDirection: language === 2 ? "row-reverse" : "row",
              justifyContent: "flex-end",
              alignItems: "center",
              alignSelf: language === 2 ? "flex-start" : "flex-end",
              height: "30%",
            }}
          >
            <Pressable onPress={() => setIsOpen(false)}>
              {({ pressed }) => (
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize: language === 2 ? 22 : 20,
                    textAlign: "center",
                    color: pressed ? colors.SECOND + "AA" : colors.SECOND,
                    textDecorationLine: "underline",
                  }}
                >
                  {language === 0
                    ? "Annuler"
                    : language === 1
                    ? "Cancel"
                    : "إلغاء"}
                </Text>
              )}
            </Pressable>
            <Image
              source={require("../../assets/hero/mystick11.png")}
              style={{
                width: 160,
                height: 160,
                transform: [{ rotateY: language === 2 ? "180deg" : "0deg" }],
              }}
              resizeMode="contain"
            />
          </View>
        </View>
      </Modal>
    </Center>
  );
}
