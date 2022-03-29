import { Pressable, Dimensions, Text, View, Image } from "react-native";
import colors from "../colors";

export default function FirstTime() {
  return (
    <View
      style={{
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: colors.MAIN,
      }}
    >
      <View
        style={{
          justifyContent: "space-evenly",
          alignItems: "center",
          width: "70%",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <View>
          <Text
            style={{
              color: "#FFF",
              fontFamily: "RowdiesBold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Commencez une aventure avec Mystique
          </Text>
        </View>
        <View
          style={{
            borderRadius: 20,
            overflow: "hidden",
            width: "80%",
          }}
        >
          <Pressable
            android_ripple={{ color: colors.COLOR3 }}
            style={{
              padding: 10,
              backgroundColor: colors.COLOR3 + "AA",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "RowdiesBold",
                color: "#FFF",
                fontSize: 16,
              }}
            >
              Commencer
            </Text>
          </Pressable>
        </View>
      </View>
      <View
        style={{
          flexDirection: "row",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <Image
          resizeMode="contain"
          style={{
            transform: [
              { translateX: Dimensions.get("window").width / 5 },
              { rotate: "-20deg" },
              { translateY: 30 },
            ],
          }}
          source={require("../../assets/hero/acceuil.png")}
        />
      </View>
    </View>
  );
}
