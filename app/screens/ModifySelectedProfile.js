
import {
    Image,
    Pressable,
    StatusBar,
    Text,
    View,
    BackHandler,
    Dimensions
  } from "react-native";
  import { useSelector } from "react-redux";
  import colors from "../data/colors";
  import avatars from "../data/avatars";
  import React from "react";
  import { useEffect } from "react";
  import * as Animatable from "react-native-animatable";






export default function ModifySelectedProfile({ navigation }) {
    const profiles = useSelector((state) => state.profiles.value); //get the profiles from redux
    const selectedProfile = useSelector((state) => state.selectedProfile.value);
    const user = useSelector((state) => state.user.value); 

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
          justifyContent : "center"
        }}
      >
        <Image
          source={require("../../assets/icons/fond1.png")}
          style={{
            position: "absolute",
            width: 40,
            height: 40,
            top: (Dimensions.get("window").height) /30,
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
            left : -20
          }}
          resizeMode="contain"
        />
        <View
          style={{
            height: (30 * Dimensions.get("window").height) / 100,
            width: Dimensions.get("window").width ,
            justifyContent: "center",
            marginBottom : 20
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

        <View style={{
            borderColor : colors.MAIN,
            borderWidth : 3,
            justifyContent : "center",
            alignItems : "center",
            width : "80%",
            height : 50*Dimensions.get("window").height/100,
            borderRadius : 20
        }}>
                <Pressable onPress={()=> {
                    //showmodal te3 changer avatar
                }}
                style={{
                    borderColor : colors.MAIN,
                    borderWidth : 3,
                    backgroundColor : "white",
                    borderRadius : 50,
                    width : 70,
                    zindex : 1,
                    transform: [{ translateY: -12*(Dimensions.get("window").height)/100 }]
                }}>
                    <Image style={{
                        height : 50,
                        width : 50,
                        margin : 5,
                    }} resizeMode="center" source={avatars[profiles[selectedProfile].avatar]}/>
                </Pressable>
            <View style={{
                transform: [{ translateY: -12*(Dimensions.get("window").height)/100 }]
            }}>
                <Text
                style={{
                fontFamily: user.language === 2 ? "ArbFont" : "Rowdies",
                fontSize: user.language === 2 ? 18 : 13,
                textAlign: "center",
                color : colors.MAIN,
                }}
            >
                {user.language === 0
                ? "Changer d'avatar"
                : user.language === 1
                ? "Change avatar"
                : "تغيير الصورة"}
            </Text>

            </View>


            <Animatable.View
                  duration={700}
                  animation ="fadeInLeft"
                  delay={400}
                  style={{
                    borderRadius : 10,
                      overflow : "hidden"
                  }}
                >
                <Pressable
                    onPress={() => {
                    //showmodal te3 enter new name
                    }}
                    android_ripple={{
                        color:colors.MAIN,
                    }}
                    style={{
                    justifyContent: "center",
                    flexDirection: "row",
                    alignItems: "center",
                    alignSelf: "center",
                    }}
                >
                        <Text  style={{
                        fontFamily: "RowdiesBold",
                        fontSize:  25,
                        textAlign: "center",
                        backgroundColor : colors.MAIN + "90",
                        borderColor : colors.MAIN ,
                        borderWidth : 2,
                        color : "white",
                        borderRadius : 10,
                        width : "80%"
                        }}>
                            {profiles[selectedProfile].name}
                        </Text>

                </Pressable>
            </Animatable.View>

            <Animatable.View
                  duration={700}
                  animation ="fadeInLeft"
                  delay={700}
                  style={{
                      overflow : "hidden",
                      borderRadius : 10,
                      marginTop : 20,

                  }}
                >
                <Pressable
                onPress={() => {
                //showmodal te3 select new age
                }}
                android_ripple={{
                    color:colors.MAIN,
                }}
                style={{
                
                justifyContent: "center",
                flexDirection: "row",
                alignItems: "center",
                alignSelf: "center",

                }}
            >
                    <Text  style={{
                    fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                    fontSize:  25,
                    textAlign: "center",
                    backgroundColor : colors.MAIN + "90",
                    borderColor : colors.MAIN ,
                    borderWidth : 2,
                    color : "white",
                    borderRadius : 10,
                    width : "80%"
                    }}>
                        {new Date().getFullYear() -
                            profiles[selectedProfile].birthday} {user.language === 0
                                ? "ans"
                                : user.language === 1
                                ? "years"
                                : "سنوات"}
                    </Text>

            </Pressable>


                </Animatable.View>


        </View>

        



        <Pressable
            onPress={() => {
              navigation.replace("Loading") ;
            }}
            style={{
              height: 10*(Dimensions.get("window").height)/100,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
              marginTop : 20
            }}
          >
                <Text  style={{
                fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: user.language === 2 ? 20 : 18,
                textAlign: "center",
                backgroundColor : colors.MAIN,
                color : "white",
                paddingHorizontal:15,
                paddingVertical :5,
                borderRadius : 15
                }}>
                    {user.language===0 ? 
                    "Sauvegarder" 
                    : user.language===1 ?
                    "Save" 
                    : "حفظ"}
                </Text>

          </Pressable>
       
        <Pressable
            onPress={() => {
              navigation.replace("ModifyProfile") ;
            }}
            style={{
              height: 10*(Dimensions.get("window").height)/100,
              justifyContent: "center",
              flexDirection: "row",
              alignItems: "center",
              alignSelf: "center",
            }}
          >
              <Text  style={{
              fontFamily: user.language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: user.language === 2 ? 20 : 18,
              textAlign: "center",
              color : colors.MAIN,
              textDecorationLine : "underline"
            }}>
                  {user.language===0 ? 
                  "Annuler" 
                : user.language===1 ?
                "Cancel" 
                : "إلغاء"}
              </Text>

          </Pressable>
      </View>
    </View>
  );
}


