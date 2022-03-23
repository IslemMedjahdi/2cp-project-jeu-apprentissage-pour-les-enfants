import { Center, FlatList, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import colors from "../colors";
import avatars from "../avatars";
export default function Profil() {
  const [showModal, setShowModal] = useState(false);
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const sortedProfiles = () => {
    const profilesSorted = [...profiles];
    profilesSorted.sort((a, b) => b.score - a.score);
    return profilesSorted;
  };
  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        <View
          style={{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 900,
            padding: 4,
            backgroundColor: colors.BEIGE,
          }}
        >
          <Image
            style={{
              padding: 2,
              height: 60,
              width: 60,
            }}
            resizeMode="contain"
            source={avatars[profiles[selectedProfile].avatar]}
          />
        </View>
      </Pressable>
      <Modal isOpen={showModal} onClose={() => setShowModal(false)}>
        <View
          style={{
            backgroundColor: colors.MAIN,
            width: "85%",
            height: "85%",
            borderRadius: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <View
              style={{
                alignItems: "center",
                flexDirection: "row",
                borderColor: "white",
                justifyContent: "space-between",
                borderWidth: 2,
                borderRadius: 20,
                padding: 8,
                backgroundColor: colors.BEIGE,
                shadowColor: "#000",
                shadowOffset: {
                  width: 3,
                  height: 10,
                },
                shadowOpacity: 0.9,
                shadowRadius: 3,
                elevation: 5,
                transform: [{ translateY: -10 }],
              }}
            >
              <Text
                style={{
                  fontFamily: "RowdiesBold",
                  color: "white",
                  fontSize: 20,
                  textAlign: "center",
                  marginRight: 10,
                }}
              >
                {profiles[selectedProfile].language === 0
                  ? "Profile"
                  : profiles[selectedProfile].language === 1
                  ? "Profil"
                  : "الصفحة الشخصية"}
              </Text>
              <Image
                style={{ width: 40, height: 40 }}
                resizeMode="contain"
                source={avatars[profiles[selectedProfile].avatar]}
              />
            </View>
          </View>
          <Pressable
            style={{
              marginTop: -50,
              marginRight: 10,
              borderRadius: 999,
            }}
            onPress={() => setShowModal(false)}
          >
            <Image
              style={{
                alignSelf: "flex-end",
                backgroundColor: "white",
                width: 30,
                borderRadius: 999,
                height: 30,
              }}
              source={require("../../assets/icons/Close.png")}
            />
          </Pressable>
          <View style={{ alignItems: "center", marginTop: 30 }}>
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "RowdiesBold",
                  fontSize: 20,
                }}
              >
                {profiles[selectedProfile].name}
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                height: 2,
                backgroundColor: "black",
                alignSelf: "center",
                marginBottom: 20,
                marginTop: 7,
              }}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  textAlign: "center",
                  fontFamily: "RowdiesBold",
                  fontSize: 20,
                }}
              >
                {2022 - profiles[selectedProfile].birthday.year}{" "}
                {profiles[selectedProfile].language === 0
                  ? "ans"
                  : profiles[selectedProfile].language === 1
                  ? "years"
                  : "سنوات"}
              </Text>
            </View>
            <View
              style={{
                width: "50%",
                height: 2,
                backgroundColor: "black",
                alignSelf: "center",
                marginBottom: 20,
                marginTop: 7,
              }}
            />
            <View
              style={{
                backgroundColor: "white",
                width: "80%",
                alignItems: "center",
                borderRadius: 20,
                overflow: "hidden",
                marginTop: 5,
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
              <Text
                style={{
                  fontFamily: "RowdiesBold",
                  fontSize: 18,
                  width: "50%",
                  textAlign: "center",
                  marginVertical: 5,
                }}
              >
                {profiles[selectedProfile].language === 0
                  ? "Mes Trophées"
                  : profiles[selectedProfile].language === 1
                  ? "My trophies"
                  : "إنجازاتي"}
              </Text>
              <FlatList
                showsHorizontalScrollIndicator={false}
                snapToAlignment="center"
                snapToInterval={50}
                style={{ padding: 7 }}
                horizontal
                keyExtractor={(_, index) => index.toString()}
                data={profiles[selectedProfile].badges}
                renderItem={({ item }) => (
                  <View
                    style={{
                      backgroundColor: colors.CYAN,
                      borderRadius: 10,

                      marginRight: 10,
                      padding: 20,
                      alignItems: "center",
                    }}
                  >
                    <Image
                      source={item.image}
                      resizeMode={"contain"}
                      style={{ width: 50, height: 50 }}
                    />
                    <Text
                      style={{
                        fontFamily: "RowdiesBold",
                        textAlign: "center",
                        color: "white",
                        marginTop: 5,
                        fontSize: 18,
                      }}
                    >
                      {item.text}
                    </Text>
                  </View>
                )}
              />
            </View>
            <View
              style={{
                backgroundColor: "white",
                borderRadius: 20,
                width: "95%",
                marginTop: 20,
                padding: 10,
                shadowColor: "#000",
                shadowOffset: {
                  width: 0,
                  height: 5,
                },
                shadowOpacity: 0.2,
                shadowRadius: 4.65,
                elevation: 8,
              }}
            >
              <Text
                style={{
                  fontFamily: "RowdiesBold",
                  fontSize: 18,
                  textAlign: "center",
                }}
              >
                {profiles[selectedProfile].language === 0
                  ? "Classement"
                  : profiles[selectedProfile].language === 1
                  ? "LeaderBoard"
                  : "الترتيب"}
              </Text>

              <FlatList
                showsVerticalScrollIndicator={false}
                height={200}
                keyExtractor={(_, index) => index.toString()}
                data={sortedProfiles()}
                renderItem={({ item, index }) => (
                  <View
                    style={{
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "space-between",
                      marginTop: 7,
                      backgroundColor:
                        item.name === profiles[selectedProfile].name
                          ? colors.MAIN
                          : colors.CYAN,
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      source={avatars[item.avatar]}
                      resizeMode={"contain"}
                      style={{
                        width: 50,
                        height: 50,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Rowdies",
                        fontSize: 18,
                        width: 70,
                        textAlign: "center",
                      }}
                    >
                      {item.name === profiles[selectedProfile].name
                        ? profiles[selectedProfile].language === 0
                          ? "Moi"
                          : profiles[selectedProfile].language === 1
                          ? "Me"
                          : "أنا"
                        : item.name}
                    </Text>
                    <View
                      style={{
                        flexDirection: "row",
                        backgroundColor: "white",
                        padding: 2,
                        borderRadius: 6,
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          marginRight: 7,
                          fontFamily: "Rowdies",
                          minWidth: 70,
                          textAlign: "center",
                        }}
                      >
                        {item.score}
                      </Text>
                      <Image
                        style={{ width: 20, height: 20 }}
                        resizeMode="contain"
                        source={require("../../assets/icons/gold.png")}
                      />
                    </View>
                    <Text
                      style={{
                        color: "white",
                        fontFamily: "RowdiesBold",
                        fontSize: 17,
                        marginRight: 14,
                      }}
                    >
                      {index + 1}
                    </Text>
                  </View>
                )}
              />
            </View>
          </View>
        </View>
      </Modal>
    </Center>
  );
}
