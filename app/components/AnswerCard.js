import { Text, Pressable, Dimensions, Image } from "react-native";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";
export default function AnswerCard({
  pressHandlerAnswer,
  answer,
  bgColor,
  disabled,
  language,
  type,
  image,
  themeIndex,
}) {
  return (
    <Animatable.View
      animation={"zoomIn"}
      duration={1000}
      style={{
        height: (16 * Dimensions.get("window").height) / 100,
        width: themeIndex===4 && type===0 ? "100%" : "45%",
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
        {type === 1 && image ? (
          <Image
            source={image}
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: bgColor,
              opacity: bgColor === "white" ? 1 : 0.3,
            }}
            resizeMode={"cover"}
          />
        ) : (
          <Text
            style={{
              color: "black",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 22 : 18,
              padding: 5,
              borderRadius: 15,
              textAlign: "center",
            }}
          >
            {type === 1 && <Text>img: </Text>}
            {answer}
          </Text>
        )}
      </Pressable>
    </Animatable.View>
  );
}
