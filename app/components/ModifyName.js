import { useState } from "react";
import { Pressable, Text, View, Dimensions, TextInput } from "react-native";
import { Center, Modal } from "native-base";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";

export default function ModifyName({
  language,
  onPressHandlerName,
  name,
  setError,
  error,
  isOpen,
  setIsOpen,
}) {
  const [value, setValue] = useState(name);
  return (
    <Center>
      <Animatable.View
        duration={700}
        animation="fadeInLeft"
        delay={400}
        style={{
          borderRadius: 10,
          overflow: "hidden",
        }}
      >
        <Pressable
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          android_ripple={{
            color: colors.SECOND,
          }}
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "center",
          }}
        >
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: 25,
              textAlign: "center",
              backgroundColor: colors.SECOND + "90",
              borderColor: colors.SECOND,
              borderWidth: 2,
              color: "white",
              borderRadius: 10,
              width: "80%",
              paddingVertical: 4,
            }}
          >
            {name}
          </Text>
        </Pressable>
      </Animatable.View>
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
            width: "90%",
            height: "50%",
            borderRadius: 20,
            borderWidth: 2,
            borderColor: colors.SECOND,
            alignItems: "center",
            justifyContent: "space-around",
          }}
        >
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 26 : 24,
              textAlign: "center",
            }}
          >
            {language === 0
              ? "nouveau prénom"
              : language === 1
              ? "new name"
              : "الاسم الجديد"}
          </Text>

          <View
            style={{
              width: "80%",
              justifyContent: "center",
            }}
          >
            <TextInput
              style={{
                fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                fontSize: language === 2 ? 18 : 16,
                width: "100%",
                padding: 20,
                borderColor: colors.SECOND,
                borderWidth: 2,
                borderRadius: 10,
                color: colors.SECOND,
                textAlign: language === 2 ? "right" : "left",
              }}
              maxLength={12}
              placeholderTextColor={colors.SECOND + "90"}
              placeholder={
                language === 0
                  ? "Le nouveau prénom de votre enfant"
                  : language === 1
                  ? "Your child's new name"
                  : "اسم طفلك الجديد"
              }
              value={value}
              onChangeText={(text) => {
                setValue(text);
                setError(false);
              }}
            />
            {error && (
              <Text
                style={{
                  fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                  color: "red",
                  marginStart: 5,
                  marginTop: 5,
                }}
              >
                {language === 0
                  ? "Le nom ne doit pas être vide"
                  : language === 1
                  ? "Name must not be empty"
                  : "يجب ألا يكون الاسم فارغا"}
              </Text>
            )}
          </View>
          <View
            style={{
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
                }}
                onPress={() => onPressHandlerName(value)}
              >
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                    fontSize: language === 2 ? 18 : 16,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {language === 0
                    ? "Continuer"
                    : language === 1
                    ? "Continue"
                    : "تابع"}
                </Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </Center>
  );
}
