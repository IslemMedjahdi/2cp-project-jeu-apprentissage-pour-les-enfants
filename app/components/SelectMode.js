import { Image, Text, TouchableHighlight, View } from "react-native";
import colors from "../colors";

export default function SelectMode() {
  return (
    <View
      style={{
        flexDirection: "row",
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 150,
      }}
    >
      <View>
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
            source={require("../../assets/acced_carte.png")}
          />
        </TouchableHighlight>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.CYAN,
            maxWidth: 150,
          }}
        >
          Acceder à la carte
        </Text>
      </View>
      <View>
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
            source={require("../../assets/challenges.png")}
          />
        </TouchableHighlight>
        <Text
          style={{
            textAlign: "center",
            fontSize: 20,
            fontWeight: "bold",
            color: colors.CYAN,
            maxWidth: 150,
          }}
        >
          Acceder aux challenges
        </Text>
      </View>
    </View>
  );
}
