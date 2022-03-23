import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import avatars from "../avatars";
import colors from "../colors";
export default function SelectProfile({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value);
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={"#FFF"}
        translucent={true}
        barStyle={"light-content"}
      />
      <SafeAreaView>
        <View
          style={{
            backgroundColor: "white",
            height: "100%",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <Image
            source={require("../../assets/icons/strawberry.png")}
            style={{
              position: "absolute",
              width: 50,
              height: 50,
              top: Dimensions.get("window").height / 3,
              right: 25,
            }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/icons/fond1.png")}
            style={{
              position: "absolute",
              width: 40,
              height: 40,
              top: "40%",
              left: 25,
            }}
            resizeMode="contain"
          />
          <Image
            source={require("../../assets/icons/cup.png")}
            style={{
              position: "absolute",
              width: 70,
              height: 70,
              top: "90%",
              left: 25,
            }}
            resizeMode="contain"
          />

          <View style={{ height: 200, marginBottom: "5%" }}>
            <Image
              source={require("../../assets/hero/hero0.png")}
              resizeMode={"contain"}
            />
          </View>
          <Text
            style={{
              fontFamily: "RowdiesBold",
              fontSize: 30,
              textAlign: "center",
            }}
          >
            Choisir votre profil
          </Text>
          <View
            style={{
              borderColor: colors.SECOND,
              borderWidth: 4,
              borderRadius: 50,
              width: "80%",
              height: "40%",
              paddingHorizontal: 20,
              overflow: "hidden",
            }}
          >
            <FlatList
              keyExtractor={(_) => _.id}
              showsVerticalScrollIndicator={false}
              data={profiles}
              renderItem={({ item, index }) => (
                <View
                  style={{
                    backgroundColor:
                      index % 3 === 0
                        ? colors.COLOR1 + "80"
                        : index % 3 === 1
                        ? colors.COLOR2 + "80"
                        : colors.COLOR3 + "70",
                    borderRadius: 20,
                    marginVertical: 12,
                    borderWidth: 2,
                    borderColor:
                      index % 3 === 0
                        ? colors.COLOR1
                        : index % 3 === 1
                        ? colors.COLOR2
                        : colors.COLOR3,
                    overflow: "hidden",
                  }}
                >
                  <Pressable
                    style={{
                      flexDirection: "row",
                      justifyContent: "space-between",
                      padding: 5,
                      alignItems: "center",
                    }}
                    android_ripple={{
                      color:
                        index % 3 === 0
                          ? colors.COLOR1
                          : index % 3 === 1
                          ? colors.COLOR2
                          : colors.COLOR3,
                    }}
                  >
                    <View>
                      <Image
                        source={avatars[item.avatar]}
                        style={{ width: 80, height: 80 }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          fontFamily: "RowdiesBold",
                          color: "white",
                          fontSize: 18,
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          fontFamily: "RowdiesBold",
                          color: "white",
                          fontSize: 18,
                        }}
                      >
                        Niveau {item.level}
                      </Text>
                      <View
                        style={{
                          flexDirection: "row",
                          alignItems: "center",
                          backgroundColor: "white",
                          borderRadius: 10,
                          paddingHorizontal: 8,
                        }}
                      >
                        <Text
                          style={{
                            marginHorizontal: 10,
                            fontFamily: "RowdiesBold",
                          }}
                        >
                          {item.score}
                        </Text>
                        <Image
                          style={{ height: 20, width: 20 }}
                          resizeMode="contain"
                          source={require("../../assets/icons/gold.png")}
                        />
                      </View>
                    </View>
                    <View
                      style={{
                        overflow: "hidden",
                        backgroundColor: "white",
                        borderRadius: 999,
                        borderColor:
                          index % 3 === 0
                            ? colors.COLOR1
                            : index % 3 === 1
                            ? colors.COLOR2
                            : colors.COLOR3,
                        borderWidth: 1,
                      }}
                    >
                      {/*<Pressable
                        android_ripple={{
                          color: "#FFFFF11",
                        }}
                        style={{
                          padding: 10,
                        }}
                      >
                        <Image
                          source={require("../../assets/icons/arrow.png")}
                          style={{ width: 10, height: 10 }}
                          resizeMode="contain"
                        />
                      </Pressable>*/}
                    </View>
                  </Pressable>
                </View>
              )}
            />
          </View>
          <Pressable style={{ marginBottom: 15 }}>
            {({ pressed }) => (
              <Text
                style={{
                  color: pressed ? colors.SECOND + "90" : colors.SECOND,
                  fontFamily: "RowdiesBold",
                  textDecorationLine: "underline",
                  textDecorationColor: colors.SECOND,
                  textDecorationStyle: "solid",
                  fontSize: 18,
                }}
              >
                gérer mes profiles
              </Text>
            )}
          </Pressable>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
