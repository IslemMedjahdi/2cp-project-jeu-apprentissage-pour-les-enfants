import {
  Image,
  Pressable,
  StatusBar,
  Text,
  View,
  BackHandler,
  Dimensions,
  Modal,
  FlatList,
  TextInput
} from "react-native";
import { changeProfileHandler } from "../redux/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../data/colors";
import avatars from "../data/avatars";
import React from "react";
import { useEffect,useState } from "react";
import * as Animatable from "react-native-animatable";

export default function ModifySelectedProfile({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value); 
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const user = useSelector((state) => state.user.value);
  const [isOpenAvatar,setIsOpenAvatar]=useState(false);
  const dispatch=useDispatch();
  const [isOpenName,setIsOpenName]=useState(false);
  const [isOpenAge,setIsOpenAge]=useState(false);
  const [avatar,setAvatar]=useState(profiles[selectedProfile].avatar);
  const [profile, setProfile] = useState(profiles[selectedProfile]);
  const [value, setValue] = useState("");
  const [error, setError] = useState(false);
  const [age,setAge]=useState(new Date().getFullYear() - profile.birthday);
  const onPressHandlerAge = () => {
      setProfile((profile) => {
        return { ...profile, birthday : new Date().getFullYear() - age  };
      });
      setIsOpenAge(false);
  };
  const onPressHandlerName = () => {
    if (value.trim().length > 0) {
      setProfile((profile) => {
        return { ...profile, name: value };
      });
      setIsOpenName(false);
    } else {
      setError(true);
    }
  };
  const onPressHandlerAvatar = (index) => {
    setProfile((profile) => {
      return {
        ...profile,
        avatar :index,
      };
    });
  };
  const saveHandler = () => {
    dispatch(changeProfileHandler({profile}));
    navigation.replace("Loading");
  };
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("ModifyProfile");
        return true;
      }
    );
    return () => backHandler.remove();
  });

  return (
    
    <View style={{ height: "100%",
     backgroundColor: "white",
 }}>
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
          justifyContent: "center",
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
        <Image
          source={require("../../assets/hero/mytick4.png")}
          style={{
            position: "absolute",
            width: 150,
            height: 150,
            top: (10 * Dimensions.get("window").height) / 12,
            left: -20,
          }}
          resizeMode="contain"
        />
        <View
          style={{
            height: (30 * Dimensions.get("window").height) / 100,
            width: Dimensions.get("window").width,
            justifyContent: "center",
            marginBottom: 20,
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
              ? "Entrez les nouvelles données du profil"
              : user.language === 1
              ? "Enter new profile data"
              : "أدخل بيانات الملف الشخصي الجديدة"}
          </Text>
        </View>

        <View
          style={{
            borderColor: colors.MAIN,
            borderWidth: 3,
            justifyContent: "center",
            alignItems: "center",
            width: "80%",
            height: (50 * Dimensions.get("window").height) / 100,
            borderRadius: 20,
          }}
        >
          <View style={{ alignItems: "center" }}>
            <Pressable
              onPress={() => {
                setIsOpenAvatar(!isOpenAvatar);
              }}
              style={{
                borderColor: colors.MAIN,
                borderWidth: 3,
                backgroundColor: "white",
                borderRadius: 50,
                width: 70,
                zindex: 1,
                transform: [
                  { translateY: (-12 * Dimensions.get("window").height) / 100 },
                ],
              }}
            >
              <Image
                style={{
                  height: 50,
                  width: 50,
                  margin: 5,
                }}
                resizeMode="center"
                source={avatars[profile.avatar]}
              />
            </Pressable>
            <View
              style={{
                transform: [
                  { translateY: (-12 * Dimensions.get("window").height) / 100 },
                ],
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
                  fontSize: user.language === 2 ? 18 : 15,
                  textAlign: "center",
                  color: colors.MAIN,
                }}
              >
                {user.language === 0
                  ? "Changer d'avatar"
                  : user.language === 1
                  ? "Change avatar"
                  : "تغيير الصورة"}
              </Text>
            </View>
          </View>
          <Animatable.View
            duration={700}
            animation="fadeInLeft"
            delay={400}
            style={{
              borderRadius: 10,
              overflow: "hidden",
            }}
          >
            <Pressable
              onPress={() => {
                setIsOpenName(!isOpenName)
              }}
              android_ripple={{
                color: colors.MAIN,
              }}
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: 25,
                  textAlign: "center",
                  backgroundColor: colors.MAIN + "90",
                  borderColor: colors.MAIN,
                  borderWidth: 2,
                  color: "white",
                  borderRadius: 10,
                  width: "80%",
                }}
              >
                {profile.name}
              </Text>
            </Pressable>
          </Animatable.View>



          <Animatable.View
            duration={700}
            animation="fadeInLeft"
            delay={700}
            style={{
              overflow: "hidden",
              borderRadius: 10,
              marginTop: 20,
            }}
          >
            <Pressable
              onPress={() => {
                setIsOpenAge(!isOpenAge);
              }}
              android_ripple={{
                color: colors.MAIN,
              }}
              style={{
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: 25,
                  textAlign: "center",
                  backgroundColor: colors.MAIN + "90",
                  borderColor: colors.MAIN,
                  borderWidth: 2,
                  color: "white",
                  borderRadius: 10,
                  width: "80%",
                }}
              >
                {age}{" "}
                {user.language === 0
                  ? "ans"
                  : user.language === 1
                  ? "years"
                  : "سنوات"}
              </Text>
            </Pressable>
          </Animatable.View>
        </View>
        <View
          style={{
            height: (20 * Dimensions.get("window").height) / 100,
            justifyContent: "space-evenly",
          }}
        >
          <View style={{ borderRadius: 15, overflow: "hidden" }}>
            <Pressable
              android_ripple={{ color: "#FFFFFFEE" }}
              onPress={() => {
                saveHandler();
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
                backgroundColor: colors.MAIN,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 20 : 18,
                  textAlign: "center",
                  color: "white",
                }}
              >
                {user.language === 0
                  ? "Sauvegarder"
                  : user.language === 1
                  ? "Save"
                  : "حفظ"}
              </Text>
            </Pressable>
          </View>
          <View style={{ borderRadius: 15, overflow: "hidden" }}>
            <Pressable
              android_ripple={{ color: colors.MAIN + "10" }}
              onPress={() => {
                navigation.replace("ModifyProfile");
              }}
              style={{
                paddingHorizontal: 15,
                paddingVertical: 5,
              }}
            >
              <Text
                style={{
                  fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: user.language === 2 ? 20 : 18,
                  textAlign: "center",
                  color: colors.MAIN,
                  textDecorationLine: "underline",
                }}
              >
                {user.language === 0
                  ? "Annuler"
                  : user.language === 1
                  ? "Cancel"
                  : "إلغاء"}
              </Text>
            </Pressable>
          </View>
        </View>

        <Modal
        visible={isOpenAvatar}
        onClose={() => {
          setIsOpenAvatar(false);
        }}
        animationType="slide"
      >
        <View style ={{flex : 1,justifyContent : "center",alignItems : "center"}}>

        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "60%",
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.SECOND,
          }}
        >
            <Text
              style={{
                fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: user.language === 2 ? 26 : 24,
                textAlign: "center",
                width : "90%"
              }}
            >
              {user.language === 0
                ? "Sélectionnez un nouveau avatar pour votre enfant"
                : user.language === 1
                ? "Select a new avatar for your child"
                : "حدد صورة جديدة لطفلك"}
            </Text>
        <FlatList
          contentContainerStyle={{
            justifyContent: "space-between",
            alignContent: "space-between",
            height: "100%",
            padding: 20,
          }}
          data={[0, 1, 2, 3, 4, 5, 6, 7, 8]}
          numColumns={3}
          keyExtractor={(item) => item}
          renderItem={({ item ,index}) => (
            <Animatable.View
              duration={500}
              delay={item * 100}
              animation={"zoomIn"}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.SECOND,
                borderWidth: 2,
                borderRadius: 10,
                margin: 10,
                overflow: "hidden",
              }}
            >
              <Pressable
                onPress={() => {
                  setAvatar(index);
                  onPressHandlerAvatar(index);
                  setIsOpenAvatar(!isOpenAvatar);
                }}
                android_ripple={{ color: colors.SECOND }}
                style={{
                  backgroundColor:
                    item === profile.avatar ? colors.SECOND : "transparent",
                  padding: 4,
                }}
              >
                <Image
                  resizeMode="contain"
                  style={{ width: 50, height: 50 }}
                  source={avatars[item]}
                />
              </Pressable>
            </Animatable.View>
          )}
        />
        </View>


        </View>

       
      </Modal>

      <Modal

        visible={isOpenName}
        onClose={() => {
          setIsOpenName(false);
        }}
        >
    <View style ={{flex : 1,justifyContent : "center",alignItems : "center"}}>
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: Dimensions.get("window").height/2,
            borderRadius: 20,
            alignItems: "center",
            justifyContent : "space-around",
            borderWidth: 2,
            borderColor: colors.SECOND,
          }}
        >
        <Text
          style={{
            fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
            fontSize: user.language === 2 ? 26 : 24,
            textAlign: "center",
          }}
        >
          {user.language === 0
            ? "Le nouveau prénom de votre enfant"
            : user.language === 1
            ? "Your child's new name"
            : "اسم طفلك الجديد"}
        </Text>
    

      <View
        style={{
          width: "80%",
          justifyContent: "center",
        }}
      >
        <TextInput
          style={{
            fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
            fontSize: user.language === 2 ? 18 : 16,
            width: "100%",
            padding: 20,
            borderColor: colors.SECOND,
            borderWidth: 2,
            borderRadius: 10,
            color: colors.SECOND,
            textAlign: user.language === 2 ? "right" : "left",
          }}
          maxLength={12}
          placeholderTextColor={colors.SECOND + "90"}
          placeholder={profile.name}
          onChangeText={(text) => {
            setValue(text);
            setError(false);
          }}
        />
        {error && (
          <Text
            style={{
              fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
              color: "red",
              marginStart: 5,
              marginTop: 5,
            }}
          >
            {user.language === 0
              ? "Le nom ne doit pas être vide"
              : user.language === 1
              ? "Name must not be empty"
              : "يجب ألا يكون الاسم فارغا"}
          </Text>
        )}
      </View>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <View style={{ borderRadius: 10, overflow: "hidden" }}>
          <Pressable
            android_ripple={{ color: "#ffffff30" }}
            style={{
              backgroundColor: colors.SECOND,
              paddingHorizontal: 20,
              paddingVertical: 15,
            }}
            onPress={onPressHandlerName}
          >
            <Text
              style={{
                fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
                fontSize: user.language === 2 ? 18 : 16,
                color: "white",
                textAlign: "center",
              }}
            >
              {user.language === 0
                ? "Continuer"
                : user.language === 1
                ? "Continue"
                : "تابع"}
            </Text>
          </Pressable>
        </View> 
      </View>
    </View>

    </View>
  </Modal>


      <Modal
        visible={isOpenAge}
        onClose={() => {
          setIsOpenAge(false);
        }}
        >
          <View style ={{flex : 1,justifyContent : "center",alignItems : "center"}}>


        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "50%",
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.SECOND,
          }}
        >
            <Text
              style={{
                fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: user.language === 2 ? 26 : 24,
                textAlign: "center",
                width : "90%"
              }}
            >
              {user.language === 0
                ? "Sélectionnez le nouveau age de votre enfant"
                : user.language === 1
                ? "Select your child's new age"
                : "حدد عمر طفلك الجديد"}
            </Text>
            <View
        style={{
          height: "80%",
          width: "80%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <FlatList
          contentContainerStyle={{
            justifyContent: "space-between",
            alignContent: "space-between",
            height: "100%",
            padding: 20,
          }}
          data={user.language === 2 ? [5, 4, 7, 6] : [4, 5, 6, 7]}
          numColumns={2}
          keyExtractor={(item) => item}
          renderItem={({ item }) => (
            <Animatable.View
              animation={"zoomIn"}
              duration={500}
              delay={(item - 4) * 300}
              style={{
                alignItems: "center",
                justifyContent: "center",
                borderColor: colors.SECOND,
                borderWidth: 2,
                borderRadius: 10,
                margin: 10,
                overflow: "hidden",
              }}
            >
              <Pressable
                android_ripple={{
                  color: item === age ? "#ffffff40" : colors.SECOND,
                }}
                style={{
                  padding: item === age ? 22 : 20,
                  backgroundColor: item === age ? colors.SECOND : "transparent",
                }}
                onPress={() => {
                  setAge(item);
                  onPressHandlerAge();
                }}
              >
                <Text
                  style={{
                    fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
                    fontSize: user.language === 2 ? 18 : 16,
                    color: item === age ? "white" : colors.SECOND,
                    textAlign: "center",
                  }}
                >
                  {item}{" "}
                  {user.language === 0 ? "ans" : user.language === 1 ? "years" : "سنوات"}
                </Text>
              </Pressable>
            </Animatable.View>
          )}
        />
      </View>
        </View>
          </View>
      </Modal>

      
      </View>
    </View>
  );
}
