import { FlatList, Image, Pressable, Text, View } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import colors from "../colors";
import { setSelectedProfile } from "../redux/selectedProfileSlice";
import avatars from "../avatars";
export default function SelectProfile({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value);
  const dispatch = useDispatch();
  const pressHandler = (index) => {
    dispatch(setSelectedProfile({ index }));
    navigation.replace("Home");
  };
  return (
    <View
      style={{
        alignItems: "center",
        backgroundColor: "white",
        minHeight: "100%",
      }}
    >
      <Image
        resizeMode="stretch"
        style={{ width: 200, height: 200, marginTop: 20 }}
        source={require("../../assets/images/kid.png")}
      />
      <Text
        style={{
          fontFamily: "RowdiesBold",
          fontSize: 30,
          width: "50%",
          textAlign: "center",
        }}
      >
        Choisir votre profil
      </Text>
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          borderColor: colors.YELLOW,
          borderWidth: 2,
          padding: 14,
          width: "90%",
          borderRadius: 20,
          marginTop: 20,
        }}
      >
        <FlatList
          snapToAlignment="center"
          snapToInterval={200}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(_, index) => index.toString()}
          data={profiles}
          horizontal
          renderItem={({ item, index }) => (
            <View style={{ alignItems: "center" }}>
              <View
                style={{
                  backgroundColor: colors.YELLOW,
                  borderRadius: 999,
                  transform: [{ translateX: -7 }, { translateY: 15 }],
                  zIndex: 10,
                  padding: 2,
                }}
              >
                <Image
                  source={avatars[item.avatar]}
                  resizeMode="stretch"
                  style={{
                    width: 70,
                    height: 70,
                    transform: [{ scale: 1.2 }, { translateY: -10 }],
                  }}
                />
              </View>
              <View
                style={{
                  backgroundColor: colors.BEIGE,
                  borderColor: colors.YELLOW,
                  borderWidth: 2,
                  borderRadius: 20,
                  marginRight: 20,
                  width: 200,
                  alignItems: "center",
                }}
              >
                <View style={{ alignItems: "center" }}>
                  <Text
                    style={{
                      fontFamily: "RowdiesBold",
                      marginTop: 17,
                      fontSize: 18,
                    }}
                  >
                    {item.name}
                  </Text>
                  <View
                    style={{
                      height: 2,
                      borderRadius: 10,
                      marginTop: 6,
                      width: 100,
                      backgroundColor: colors.YELLOW,
                    }}
                  />
                  <Text
                    style={{
                      fontFamily: "RowdiesBold",
                      marginTop: 17,
                      fontSize: 18,
                    }}
                  >
                    {2022 - item.birthday.year} ans
                  </Text>
                  <View
                    style={{
                      height: 2,
                      borderRadius: 10,
                      marginTop: 6,
                      width: 100,
                      backgroundColor: colors.YELLOW,
                    }}
                  />
                  <View
                    style={{
                      flexDirection: "row",
                      marginTop: 17,
                      backgroundColor: "white",
                      paddingHorizontal: 10,
                      paddingVertical: 4,
                      borderRadius: 10,
                      shadowOffset: {
                        width: 2,
                        height: 2,
                      },
                      shadowOpacity: 0.8,
                      shadowRadius: 4,
                      elevation: 3,
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        fontFamily: "Rowdies",
                        fontSize: 15,
                        marginRight: 7,
                      }}
                    >
                      {item.score}
                    </Text>
                    <Image
                      style={{ width: 20, height: 20 }}
                      resizeMode="stretch"
                      source={require("../../assets/icons/gold.png")}
                    />
                  </View>
                </View>
                <Pressable onPress={() => pressHandler(index)}>
                  {({ pressed }) => (
                    <Text
                      style={{
                        fontFamily: "RowdiesBold",
                        fontSize: 18,
                        color: "white",
                        backgroundColor: pressed
                          ? "transparent"
                          : colors.YELLOW,
                        paddingHorizontal: 20,
                        paddingVertical: 5,
                        borderTopRightRadius: 10,
                        borderTopLeftRadius: 10,
                        marginTop: 17,
                      }}
                    >
                      Choisir
                    </Text>
                  )}
                </Pressable>
              </View>
            </View>
          )}
        />
      </View>
      <Pressable onPress={() => navigation.push("AddProfile")}>
        <Text
          style={{
            paddingHorizontal: 20,
            paddingVertical: 10,
            borderColor: colors.YELLOW,
            borderWidth: 2,
            borderRadius: 20,
            fontFamily: "RowdiesBold",
            fontSize: 20,
            marginTop: 35,
          }}
        >
          Ajouter un profil
        </Text>
      </Pressable>
    </View>
  );
}
