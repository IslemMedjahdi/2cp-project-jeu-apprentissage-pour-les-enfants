import { Image, Text, TouchableHighlight, View } from "react-native";
import colors from "../colors";

export default function SelectMode() {
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <TouchableHighlight
          style={{
            backgroundColor: colors.YELLOW,
            borderRadius: 20,
            alignItems: "center",
            justifyContent: "center",
            marginBottom: 10,
          }}
        >
          <Image
            style={{
              width: 150,
              height: 150,
              transform: [{ scale: 1.3 }],
            }}
            source={require("../../assets/images/home1.png")}
          />
        </TouchableHighlight>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.CYAN,
            maxWidth: 150,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderBottomRightRadius: 20,
            borderTopRightRadius: 20,
            transform: [{ translateX: -5 }],
            zIndex: -1,
          }}
        >
          Acceder à la carte
        </Text>
      </View>
      <View
        style={{
          flexDirection: "row-reverse",
          alignItems: "center",
          marginTop: 30,
        }}
      >
        <TouchableHighlight
          style={{
            backgroundColor: colors.YELLOW,
            borderRadius: 20,
            justifyContent: "center",
            alignItems: "center",
            marginBottom: 10,
          }}
        >
          <Image
            style={{ width: 150, height: 150, transform: [{ scale: 1.3 }] }}
            source={require("../../assets/images/home0.png")}
          />
        </TouchableHighlight>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.CYAN,
            maxWidth: 150,
            paddingVertical: 10,
            paddingHorizontal: 15,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderBottomLeftRadius: 20,
            borderTopLeftRadius: 20,
            transform: [{ translateX: 5 }],
            zIndex: -1,
          }}
        >
          Acceder aux challenges
        </Text>
      </View>
    </View>
  );
}
