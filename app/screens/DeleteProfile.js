import { useEffect } from "react";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  StatusBar,
  BackHandler,
  View,
  Text,
} from "react-native";
import { useDispatch, useSelector } from "react-redux";
import avatars from "../data/avatars";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";
import DeleteButton from "../components/DeleteButton";
import { loadProfiles } from "../redux/profilesSlice";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function DeleteProfile({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("SelectProfile");
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  const profiles = useSelector((state) => state.profiles.value); //get the profiles from redux
  const user = useSelector((state) => state.user.value);
  const dispatch = useDispatch();
  // profile pressed handler
  const deleteHandler = (id) => {
    const newProfiles = profiles.filter((profile) => {
      return profile.id !== id;
    });
    dispatch(loadProfiles({ profiles: newProfiles }));
    navigation.replace("Loading");
  };
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
        }}
      >
        <Image
          source={require("../../assets/icons/fond1.png")}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: Dimensions.get("window").height / 30,
            left: 10,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            height: (32 * Dimensions.get("window").height) / 100,
            width: Dimensions.get("window").width,
            justifyContent: "center",
            paddingTop:50,
          }}
        >
          <Text
            style={{
              fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: user.language === 2 ? 36 : 30,
              textAlign: "center",
              color:"black",
              paddingHorizontal:25,
            }}
          >
            {user.language === 0
              ? "Choisissez le profil que vous voulez supprimer "
              : user.language === 1
              ? "Choose the profile you want to delete"
              : "اختر الملف الشخصي الذي تريد حذفه"}
          </Text>
        </View>
       
        <View
          style={{
            borderColor: colors.SECOND,
            borderWidth: 4,
            borderRadius: 50,
            width: (4 * Dimensions.get("window").width) / 5,
            height: (45 * Dimensions.get("window").height) / 100,
            paddingHorizontal: 20,
            overflow: "hidden",
          }}
        >
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
                    flexDirection: user.language === 2 ? "row-reverse" : "row",
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
                      style={{
                        width: 80,
                        height: 80,
                        transform: [
                          { rotateY: user.language === 2 ? "180deg" : "0deg" },
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
                  <View>
                    <DeleteButton
                      language={user.language}
                      deleteProfileHandler={() => deleteHandler(item.id)}
                      name={item.name}
                    />
                  </View>
                </Pressable>
              </Animatable.View>
            )}
          />
        </View>
        <View style={{ paddingTop:15 }}>
            <Text style={{
                        color: "grey",
                        opacity:0.6,
                        fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                        fontSize: user.language === 3 ? 20 : 15,
                        textAlign:"center",
                        paddingHorizontal:30,
                      }}> 
            {user.language === 0
              ? "En supprimant un profil, toutes les données seront automatiquement effacées "
              : user.language === 1
              ? "By deleting a profile, all data will be automatically deleted"
              : "بحذف الملف الشخصي ، سيتم حذف جميع البيانات تلقائيًا"}
            </Text>
          </View>
        <View
          style={{
            height: Dimensions.get("window").height / 10,
            justifyContent: "center",
            paddingTop:20
          }}
        >
          
          <View
            style={{
              borderRadius: 10,
              overflow: "hidden",
              borderColor: colors.SECOND,
              borderWidth: 1,
            }}
          >
            <Pressable
              style={{
                backgroundColor: "transparent",

                paddingHorizontal: 20,
                paddingVertical: 15,
              }}
              android_ripple={{ color: colors.SECOND }}
              onPress={() => navigation.replace("SelectProfile")}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
                  fontSize: user.language === 2 ? 18 : 16,
                  color: colors.SECOND,
                  textAlign: "center",
                }}
              >
                {user.language === 0
                  ? "Retour"
                  : user.language === 1
                  ? "Back"
                  : "رجوع"}
              </Text>
            </Pressable>
          </View>
        </View>
      </View>
    </View>
  );
}
