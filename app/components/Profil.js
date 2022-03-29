import { Center, FlatList, Modal, Pressable } from "native-base";
import React, { useState } from "react";
import { Image, Text, View } from "react-native";
import { useSelector } from "react-redux";
import colors from "../colors";
import avatars from "../avatars";
export default function Profil({ language }) {
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
        onClose={() => {
          setShowModal(false);
          setPage(0);
        }}
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
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 17 : 14,
                }}
              >
                {language === 0
                  ? "Profil"
                  : language === 1
                  ? "Profle"
                  : "الصفحة الشخصية"}
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
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 2 ? 17 : 14,
                }}
              >
                {language === 0
                  ? "classement"
                  : language === 1
                  ? "leaderboard"
                  : "الترتيب"}
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
                    <View
                      style={{
                        flexDirection: language === 2 ? "row-reverse" : "row",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <Text
                        style={{
                          fontFamily:
                            language === 2 ? "ArbFont" : "RowdiesBold",
                          fontSize: language === 2 ? 19 : 16,
                          textAlign: "center",
                        }}
                      >
                        {language === 0
                          ? "Nom"
                          : language === 1
                          ? "Name"
                          : "الاسم"}
                        :
                      </Text>
                      <Text
                        style={{
                          fontFamily: "RowdiesBold",
                          fontSize: 16,
                          textAlign: "center",
                        }}
                      >
                        {profiles[selectedProfile].name}
                      </Text>
                    </View>
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
                      style={{
                        fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                        fontSize: language === 2 ? 19 : 16,
                        textAlign: "center",
                      }}
                    >
                      {language === 0
                        ? "Age"
                        : language === 1
                        ? "Age"
                        : "العمر"}
                      :
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
                      flexDirection: language === 2 ? "row-reverse" : "row",
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
                    <Text
                      style={{
                        fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                        fontSize: language === 2 ? 19 : 16,
                        marginHorizontal: 7,
                      }}
                    >
                      {language === 0
                        ? "score"
                        : language === 1
                        ? "score"
                        : "النقاط"}
                      : {profiles[selectedProfile].score}
                    </Text>
                    <Image
                      style={{ width: 22, height: 22 }}
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
                        fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                        fontSize: language === 2 ? 21 : 18,
                        width: "50%",
                        textAlign: "center",
                        marginVertical: 5,
                      }}
                    >
                      {language === 0
                        ? "Mes Trophées"
                        : language === 1
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
                            marginRight: 10,
                            overflow: "hidden",
                            borderRadius: 10,
                          }}
                        >
                          <Pressable
                            android_ripple={{ color: colors.SECOND }}
                            style={{
                              backgroundColor: colors.SECOND + "AA",
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
                                fontFamily:
                                  language === 2 ? "ArbFont" : "RowdiesBold",
                                fontSize: language === 2 ? 22 : 18,
                                textAlign: "center",
                                color: "white",
                                marginTop: 5,
                                minWidth: 80,
                              }}
                            >
                              {item.text[language]}
                            </Text>
                          </Pressable>
                        </View>
                      )}
                    />
                  </View>
                </View>
              </View>
            ) : (
              <View style={{ width: "100%", alignItems: "center" }}>
                <View style={{ height: "10%" }}>
                  <Image
                    resizeMode="contain"
                    style={{ height: "100%" }}
                    source={require("../../assets/badges/badge4.png")}
                  />
                </View>
                <View style={{ height: "90%", width: "90%" }}>
                  <FlatList
                    keyExtractor={(item) => item.id}
                    data={sortedProfiles()}
                    renderItem={({ item, index }) => (
                      <View
                        style={{
                          marginVertical: 7,
                          borderRadius: 10,
                          overflow: "hidden",
                          shadowColor: "#000",
                          shadowOffset: {
                            width: 0,
                            height: 2,
                          },
                          shadowOpacity: 0.3,
                          shadowRadius: 20,
                          elevation: 4,
                        }}
                      >
                        <Pressable
                          style={{
                            flexDirection: "row",
                            justifyContent: "space-between",
                            padding: 5,
                            backgroundColor:
                              item.id === profiles[selectedProfile].id
                                ? "#FFD447"
                                : "white",
                            alignItems: "center",
                          }}
                          android_ripple={{
                            color:
                              item.id === profiles[selectedProfile].id
                                ? "yellow"
                                : "white",
                          }}
                          onPress={() =>
                            item.id === profiles[selectedProfile].id &&
                            setPage(0)
                          }
                        >
                          <View style={{ width: "20%" }}>
                            <Image
                              style={{ height: 50, width: 50 }}
                              resizeMode="contain"
                              source={avatars[item.avatar]}
                            />
                          </View>
                          <View style={{ width: "30%", alignItems: "center" }}>
                            <Text
                              style={{
                                color: "black",
                                fontFamily: "RowdiesBold",
                                fontSize: 16,
                              }}
                            >
                              {item.id === profiles[selectedProfile].id
                                ? language === 0
                                  ? "Moi"
                                  : language === 1
                                  ? "Me"
                                  : "أنا"
                                : item.name}
                            </Text>
                          </View>
                          <View
                            style={{
                              flexDirection: "row",
                              alignItems: "center",
                              backgroundColor: "white",
                              paddingHorizontal: 3,
                              paddingVertical: 1,
                              borderRadius: 5,
                              borderWidth: 1,
                              borderColor: "#000",
                              Width: "35%",
                              flex: 1,
                              justifyContent: "center",
                            }}
                          >
                            <Text
                              style={{
                                fontFamily: "RowdiesBold",
                                marginRight: 5,
                              }}
                            >
                              {item.score}
                            </Text>
                            <Image
                              style={{ height: 20, width: 20 }}
                              source={require("../../assets/icons/gold.png")}
                            />
                          </View>
                          <View
                            style={{
                              width: "15%",
                              alignItems: "center",
                              fontSize: 16,
                            }}
                          >
                            <Text style={{ fontFamily: "RowdiesBold" }}>
                              #{index + 1}
                            </Text>
                          </View>
                        </Pressable>
                      </View>
                    )}
                  />
                </View>
              </View>
            )}
          </View>
          <Pressable
            onPress={() => {
              setShowModal(false);
              setPage(0);
            }}
            style={{
              height: "10%",
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
            <Image
              style={{ height: "90%" }}
              resizeMode="contain"
              source={require("../../assets/icons/Undo.png")}
            />
          </Pressable>
        </View>
      </Modal>
    </Center>
  );
}
