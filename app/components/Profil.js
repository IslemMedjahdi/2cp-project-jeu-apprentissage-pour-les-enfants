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

  const [page, setPage] = useState(0);

  return (
    <Center>
      <Pressable onPress={() => setShowModal(true)}>
        <View
          style={{
            borderColor: "white",
            borderWidth: 2,
            borderRadius: 900,
            padding: 4,
            backgroundColor: colors.MAIN,
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
      <Modal
        animationPreset="slide"
        isOpen={showModal}
        onClose={() => setShowModal(false)}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "85%",
            height: "70%",
            borderRadius: 20,
          }}
        >
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-evenly",
              alignItems: "center",
              height: "15%",
            }}
          >
            <Pressable
              style={{
                padding: 5,
                backgroundColor: "white",
                borderWidth: page === 0 ? 2 : 0,
                borderColor: colors.MAIN,
                borderRadius: 10,
                transform: [{ scale: page === 0 ? 1.1 : 1 }],
              }}
              onPress={() => setPage(0)}
            >
              <Text
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 20,
                  backgroundColor: colors.MAIN,
                  color: "white",
                  borderRadius: 10,
                  fontFamily: "RowdiesBold",
                }}
              >
                Profil
              </Text>
            </Pressable>
            <Pressable
              style={{
                padding: 5,
                backgroundColor: "white",
                borderWidth: page === 1 ? 2 : 0,
                borderColor: colors.MAIN,
                borderRadius: 10,
                transform: [{ scale: page === 1 ? 1.1 : 1 }],
              }}
              onPress={() => setPage(1)}
            >
              <Text
                style={{
                  paddingVertical: 7,
                  paddingHorizontal: 20,
                  backgroundColor: colors.MAIN,
                  color: "white",
                  borderRadius: 10,
                  fontFamily: "RowdiesBold",
                }}
              >
                Classement
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              backgroundColor: colors.MAIN,
              alignItems: "center",
              padding: 10,
              height: "75%",
            }}
          >
            {page === 0 ? (
              <View
                style={{
                  alignItems: "center",
                  justifyContent: "space-evenly",
                  height: "100%",
                }}
              >
                <View
                  style={{
                    alignSelf: "stretch",
                  }}
                >
                  <View
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      backgroundColor: "white",
                      borderRadius: 10,
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
                      style={{ fontFamily: "RowdiesBold", textAlign: "center" }}
                    >
                      Name: {profiles[selectedProfile].name}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      backgroundColor: "white",
                      borderRadius: 10,
                      marginTop: 10,
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
                      style={{ fontFamily: "RowdiesBold", textAlign: "center" }}
                    >
                      Age:{" "}
                      {new Date().getFullYear() -
                        profiles[selectedProfile].birthday}
                    </Text>
                  </View>
                  <View
                    style={{
                      paddingVertical: 10,
                      paddingHorizontal: 20,
                      backgroundColor: "white",
                      borderRadius: 10,
                      marginTop: 10,
                      flexDirection: "row",
                      alignItems: "center",
                      justifyContent: "center",
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
                    <Text style={{ fontFamily: "RowdiesBold", marginRight: 5 }}>
                      Score: {profiles[selectedProfile].score}
                    </Text>
                    <Image
                      style={{ width: 20, height: 20 }}
                      source={require("../../assets/icons/gold.png")}
                    />
                  </View>
                </View>
                <View>
                  <View
                    style={{
                      backgroundColor: "white",
                      width: "80%",
                      alignItems: "center",
                      borderRadius: 20,
                      overflow: "hidden",
                      marginTop: 10,
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
                      snapToInterval={100}
                      style={{
                        padding: 7,
                      }}
                      horizontal
                      keyExtractor={(_, index) => index.toString()}
                      data={profiles[selectedProfile].badges}
                      renderItem={({ item }) => (
                        <View
                          style={{
                            backgroundColor: colors.SECOND + "AA",
                            borderRadius: 10,
                            overflow: "hidden",
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
                              minWidth: 80,
                            }}
                          >
                            {item.text}
                          </Text>
                        </View>
                      )}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View></View>
            )}
          </View>
          <Pressable
            onPress={() => setShowModal(false)}
            style={{
              height: "10%",
              justifyContent: "center",
              flexDirection: "row",
            }}
          >
            <Image source={require("../../assets/icons/Undo.png")} />
          </Pressable>
        </View>
      </Modal>
    </Center>
  );
}
