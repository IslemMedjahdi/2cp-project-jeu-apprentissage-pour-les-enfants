import { FlatList, Pressable, Text, View } from "react-native";
import { Center, Modal } from "native-base";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";

export default function ModifyAge({
  language,
  age,
  onPressHandlerAge,
  isOpen,
  setIsOpen,
}) {
  return (
    <Center>
      <Animatable.View
        duration={700}
        animation="fadeInLeft"
        delay={700}
        style={{
          overflow: "hidden",
          borderRadius: 10,
          marginTop: 20,
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
            {age} {language === 0 ? "ans" : language === 1 ? "years" : "سنوات"}
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
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.SECOND,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 26 : 24,
              textAlign: "center",
              width: "90%",
            }}
          >
            {language === 0
              ? "Sélectionnez le nouveau age de votre enfant"
              : language === 1
              ? "Select your child's new age"
              : "حدد عمر طفلك الجديد"}
          </Text>
          <View
            style={{
              height: "80%",
              width: "80%",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <FlatList
              contentContainerStyle={{
                justifyContent: "space-evenly",
                alignContent: "space-between",
                height: "100%",
                padding: 20,
              }}
              data={language === 2 ? [5, 4, 7, 6] : [4, 5, 6, 7]}
              numColumns={2}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <Animatable.View
                  animation={"zoomIn"}
                  duration={500}
                  delay={(item - 4) * 300}
                  style={{
                    alignItems: "center",
                    justifyContent: "center",
                    borderColor: colors.SECOND,
                    borderWidth: 2,
                    borderRadius: 10,
                    margin: 10,
                    overflow: "hidden",
                  }}
                >
                  <Pressable
                    android_ripple={{
                      color: item === age ? "#ffffff40" : colors.SECOND,
                    }}
                    style={{
                      padding: item === age ? 22 : 20,
                      backgroundColor:
                        item === age ? colors.SECOND : "transparent",
                    }}
                    onPress={() => onPressHandlerAge(item)}
                  >
                    <Text
                      style={{
                        fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                        fontSize: language === 2 ? 18 : 16,
                        color: item === age ? "white" : colors.SECOND,
                        textAlign: "center",
                      }}
                    >
                      {item}{" "}
                      {language === 0
                        ? "ans"
                        : language === 1
                        ? "years"
                        : "سنوات"}
                    </Text>
                  </Pressable>
                </Animatable.View>
              )}
            />
          </View>
        </View>
      </Modal>
    </Center>
  );
}
