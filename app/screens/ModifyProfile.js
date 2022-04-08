import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import avatars from "../data/avatars";
import colors from "../data/colors";
import { setSelectedProfile } from "../redux/selectedProfileSlice";
import * as Animatable from "react-native-animatable";
import { useEffect } from "react";

export default function ModifyProfile({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value); //get the profiles from redux
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  const pressHandler = (id) => {
    const index = profiles.findIndex((profile) => {
      return profile.id === id;
    });
    dispatch(setSelectedProfile({ index }));
    navigation.navigate("ModifySelectedProfile");
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("SelectProfile");
        return true;
      }
    );
    return () => backHandler.remove();
  });

  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <StatusBar
        backgroundColor={"white"}
        translucent={true}
        barStyle={"light-content"}
      />
      <View
        style={{
          backgroundColor: "white",
          flex: 1,
          alignItems: "center",
          justifyContent : "space-evenly"
        }}
      >
        <Image
          source={require("../../assets/icons/fond1.png")}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: (Dimensions.get("window").height) / 25,
            left: 25,
          }}
          resizeMode="contain"
        />
        <Image
          source={require("../../assets/hero/mytick4.png")}
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            top: (9.5 * Dimensions.get("window").height) / 12,
            left : -10
          }}
          resizeMode="contain"
        />
        <View
          style={{
            height: (30 * Dimensions.get("window").height) / 100,
            width: Dimensions.get("window").width ,
            justifyContent: "center",
          }}
        >
          <Text
            style={{
              fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: user.language === 2 ? 36 : 30,
              textAlign: "center",
            }}
          >
            {user.language === 0
              ? "Choisir le profil que vous voulez modifier"
              : user.language === 1
              ? "Choose the profile you want to edit"
              : "اختر الملف الشخصي الذي تريد تحريره"}
          </Text>
        </View>
        <View
          style={{
            borderColor: colors.MAIN,
            borderWidth: 4,
            borderRadius: 50,
            width: (4 * Dimensions.get("window").width) / 5,
            height: (50 * Dimensions.get("window").height) / 100,
            paddingHorizontal: 20,
            overflow: "hidden",
          }}
        >
          {profiles.length === 0 ? (
            <View
              style={{
                width: "100%",
                height: "100%",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 22 : 20,
                  textAlign: "center",
                  color: "gray",
                }}
              >
                {user.language === 0
                  ? "La liste des profils est vide, vous devez ajouter un nouveau profil"
                  : user.language === 1
                  ? "The profiles list is empty. You need to add a new Profile"
                  : "قائمة الصفحات فارغة.\n قم بإضافة صفحة شخصية جديدة"}
              </Text>
            </View>
          ) : (
            <FlatList
              keyExtractor={(_) => _.id}
              showsVerticalScrollIndicator={false}
              data={profiles}
              renderItem={({ item, index }) => (
                <Animatable.View
                  duration={700}
                  animation={index % 2 === 0 ? "fadeInRight" : "fadeInLeft"}
                  delay={index * 300}
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
                      flexDirection:
                        user.language === 2 ? "row-reverse" : "row",
                      justifyContent: "space-between",
                      padding: 5,
                      alignItems: "center",
                    }}
                    onPress={() => pressHandler(item.id)}
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
                        style={{
                          width: 80,
                          height: 80,
                          transform: [
                            {
                              rotateY: user.language === 2 ? "180deg" : "0deg",
                            },
                          ],
                        }}
                        resizeMode="contain"
                      />
                    </View>
                    <View style={{ alignItems: "center" }}>
                      <Text
                        style={{
                          fontFamily:
                            user.language === 2 ? "ArbFont" : "RowdiesBold",
                          fontSize: user.language === 2 ? 20 : 18,
                          color: "white",
                        }}
                      >
                        {item.name}
                      </Text>
                      <Text
                        style={{
                          color: "white",
                          fontFamily:
                            user.language === 2 ? "ArbFont" : "RowdiesBold",
                          fontSize: user.language === 2 ? 20 : 18,
                        }}
                      >
                        {user.language === 0
                          ? "Niveau"
                          : user.language === 1
                          ? "Level"
                          : "المستوى"}{" "}
                        {item.level}
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
                    ></View>
                  </Pressable>
                </Animatable.View>
              )}
            />
          )}
        </View>
        <Pressable
            onPress={() => {
              navigation.replace("SelectProfile") ;
            }}
            style={{
              height: 25*Dimensions.get("window").height/100,
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
    </View>
  );
}
