import { Image, Text, View } from "react-native";
import Profil from "./Profil";
import Settings from "./Settings";
import colors from "../colors";
import { useSelector } from "react-redux";

export default function Header() {
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  return (
    <View
      style={{
        height: 180,
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
            {profiles[selectedProfile].score}
          </Text>
          <Image source={require("../../assets/icons/gold.png")} />
        </View>
        <Settings />
      </View>
    </View>
  );
}
