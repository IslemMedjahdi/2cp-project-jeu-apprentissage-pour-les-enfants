import { Text, Pressable, Dimensions, View } from "react-native";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";
export default function AnswerCard({
  pressHandlerAnswer,
  answer,
  bgColor,
  disabled,
  language,
}) {
  return (
    <Animatable.View
      animation={"zoomIn"}
      duration={1000}
      style={{
        height: (17 * Dimensions.get("window").height) / 100,
        width: "45%",
        margin: 5,
        justifyContent: "center",
        overflow: "hidden",
        borderRadius: 15,
        borderWidth: 3,
        borderColor: colors.MAIN,
      }}
    >
      <Pressable
        disabled={disabled}
        onPress={pressHandlerAnswer}
        style={{
          justifyContent: "center",
          backgroundColor: bgColor,
          width: "100%",
          height: "100%",
        }}
        android_ripple={{ color: colors.MAIN + "40" }}
      >
        <Text
          style={{
            color: "black",
            fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: language === 2 ? 18 : 16,
            padding: 15,
            borderRadius: 15,
            textAlign: "center",
          }}
        >
          {answer}
        </Text>
      </Pressable>
    </Animatable.View>
  );
}
