import { Pressable, StatusBar, Text, View } from "react-native";
import { useSelector } from "react-redux";
import colors from "../data/colors";

export default function Intro({ navigation }) {
  // get the infos from Redux
  const profiles = useSelector((state) => state.profiles.value); //get the profiles from redux
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  return (
    <View>
      <StatusBar
        backgroundColor={"white"}
        translucent={true}
        barStyle={"light-content"}
      />
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.MAIN,
          height: "100%",
        }}
      >
        <Text
          style={{ fontFamily: "RowdiesBold", color: "white", fontSize: 20 }}
        >
          Salut {profiles[selectedProfile].name} ...{" "}
        </Text>
        <Pressable
          android_ripple={{ color: colors.SECOND + "90" }}
          onPress={() => navigation.replace("Home")}
          style={{ backgroundColor: colors.SECOND, borderRadius: 10 }}
        >
          <View>
            <Text
              style={{
                color: "white",
                padding: 20,
                fontFamily: "RowdiesBold",
              }}
            >
              Click
            </Text>
          </View>
        </Pressable>
      </View>
    </View>
  );
}
