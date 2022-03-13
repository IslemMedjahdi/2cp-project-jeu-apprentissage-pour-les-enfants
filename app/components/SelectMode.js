import { Image, Text, View, Pressable } from "react-native";
import { useSelector } from "react-redux";
import colors from "../colors";

export default function SelectMode() {
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  return (
    <View
      style={{
        justifyContent: "space-evenly",
        alignItems: "center",
        marginTop: 50,
      }}
    >
      <Pressable>
        {({ pressed }) => (
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: pressed ? colors.CYAN : colors.YELLOW,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
                borderColor: pressed ? colors.YELLOW : "white",
                borderWidth: pressed ? 3 : 0,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4.65,
                elevation: 8,
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
            </View>

            <Text
              style={{
                textAlign: "center",
                backgroundColor: pressed ? colors.CYAN : "white",
                fontSize: 20,
                fontFamily: "RowdiesBold",
                color: pressed ? "white" : colors.CYAN,
                maxWidth: 170,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderColor: colors.YELLOW,
                borderWidth: 3,
                borderBottomRightRadius: 20,
                borderTopRightRadius: 20,
                transform: [{ translateX: -5 }],
                zIndex: -1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.3,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              {profiles[selectedProfile].language === 0
                ? "Acceder à la carte"
                : profiles[selectedProfile].language === 1
                ? "Access to the map"
                : "اختيار الخريطة"}
            </Text>
          </View>
        )}
      </Pressable>
      <Pressable>
        {({ pressed }) => (
          <View style={{ flexDirection: "row-reverse", alignItems: "center" }}>
            <View
              style={{
                backgroundColor: pressed ? colors.CYAN : colors.YELLOW,
                borderRadius: 20,
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 10,
                borderColor: pressed ? colors.YELLOW : "white",
                borderWidth: pressed ? 3 : 0,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 150,
                  transform: [{ scale: 1.3 }],
                }}
                source={require("../../assets/images/home0.png")}
              />
            </View>

            <Text
              style={{
                textAlign: "center",
                backgroundColor: pressed ? colors.CYAN : "white",
                fontSize: 20,
                fontFamily: "RowdiesBold",
                color: pressed ? "white" : colors.CYAN,
                maxWidth: 170,
                paddingVertical: 10,
                paddingHorizontal: 15,
                borderColor: colors.YELLOW,
                borderWidth: 3,
                borderBottomLeftRadius: 20,
                borderTopLeftRadius: 20,
                transform: [{ translateX: 5 }],
                zIndex: -1,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 4,
                },
                shadowOpacity: 0.5,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              {profiles[selectedProfile].language === 0
                ? "Acceder aux challenges"
                : profiles[selectedProfile].language === 1
                ? "Access to Challenges"
                : "اختيار التحديات"}
            </Text>
          </View>
        )}
      </Pressable>
    </View>
  );
}
