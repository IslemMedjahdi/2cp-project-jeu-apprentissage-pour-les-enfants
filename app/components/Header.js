import { Image, Text, View } from "react-native";
import Profil from "./Profil";
import Settings from "./Settings";
import colors from "../colors";

export default function Header() {
  return (
    <View
      style={{
        height: 150,
        width: "100%",
        backgroundColor: colors.YELLOW,
        borderBottomLeftRadius: 50,
        borderBottomRightRadius: 50,
        justifyContent: "flex-end",
        paddingVertical: 30,
      }}
    >
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-around",
          alignItems: "center",
        }}
      >
        <Profil />
        <View
          style={{
            flexDirection: "row",
            backgroundColor: "white",
            paddingHorizontal: 20,
            paddingVertical: 9,
            borderRadius: 12,
          }}
        >
          <Text
            style={{
              marginRight: 10,
              fontWeight: "bold",
            }}
          >
            1053099
          </Text>
          <Image source={require("../../assets/gold.png")} />
        </View>
        <Settings />
      </View>
    </View>
  );
}
