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
        shadowColor: "#000",
        shadowOffset: {
          width: 0,
          height: 8,
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 8,
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
            shadowColor: "#000",
            shadowOffset: {
              width: 0,
              height: 2,
            },
            shadowOpacity: 0.9,
            shadowRadius: 3.84,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              marginRight: 10,
              fontFamily: "RowdiesBold",
            }}
          >
            {profiles[selectedProfile].score}
          </Text>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode="stretch"
            source={require("../../assets/icons/gold.png")}
          />
        </View>
        <Settings />
      </View>
    </View>
  );
}
