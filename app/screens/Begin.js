import { Pressable, Dimensions, Text, View, Image } from "react-native";
import colors from "../colors";

export default function Begin() {
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
          justifyContent: "space-between",
          alignItems: "center",
          width: "70%",
          height: Dimensions.get("window").height / 2,
        }}
      >
        <View
          style={{
            flexDirection: "row",
            height: Dimensions.get("window").height / 2,
          }}
        >
          <Image
            resizeMode="contain"
            source={require("../../assets/hero/mystick2.png")}
            style={{
              width: Dimensions.get("window").width / 3.5,
              top: "-70%",
            }}
          />
        </View>
        <View style={{}}>
          <Text
            style={{
              textAlign: "center",
              fontFamily: "RowdiesBold",
              color: "#FFF",
              fontSize: 16,
            }}
          >
            Apprendre avec XXXXX{" "}
          </Text>
        </View>
      </View>
      <View>
        <View
          style={{
            borderRadius: 20,
            overflow: "hidden",
            width: "80%",
            padding: 10,
            backgroundColor: colors.COLOR3 + "AA",
          }}
        >
          <Pressable style={{ padding: 10, backgroundColor: colors.COLOR2 }}>
            <Text
              style={{
                textAlign: "center",
                fontFamily: "RowdiesBold",
                color: "#FFF",
                fontSize: 16,
              }}
            >
              Je veux commencer
            </Text>
          </Pressable>
        </View>
        <View
          style={{
            borderRadius: 20,
            overflow: "hidden",
            width: "80%",
          }}
        >
          <Pressable
            style={{ padding: 10, backgroundColor: colors.COLOR3 + "AA" }}
          >
            <Text
              style={{
                textAlign: "center",
                fontFamily: "RowdiesBold",
                color: "#FFF",
                fontSize: 16,
              }}
            >
              Je posséde un compte
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}
