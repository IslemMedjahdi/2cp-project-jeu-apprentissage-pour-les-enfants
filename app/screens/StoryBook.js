import React from "react";
import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";
import colors from "../data/colors";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { useSelector } from "react-redux";

export default function StoryBook({navigation}){
    const language = useSelector((state) => state.user.value.language);
return (
  <View style={{flex: 1}}>
    <ImageBackground source={require("../../assets/background/background0.jpg")} resizeMode="cover"
                     style={{ flex: 1,
                              justifyContent: "center" }}>
        <View style={{flex:1}}></View>
        <View style={{  flex:3,
                         backgroundColor:"white",
                         margin:18,
                         borderTopRightRadius:50,
                         borderBottomRightRadius:50,
                         borderColor:colors.MAIN,
                         borderWidth:5,
                         borderTopLeftRadius:10,
                         borderBottomLeftRadius:10,
                         //justifyContent:"center",
                         alignItems:"center",
                         flexDirection:"row",
                         //opacity:0.8,
          }}
          >
            <View style={{ 
                           height:"100%",
                           width:"5%",
                           backgroundColor:colors.MAIN
            }}>

            </View>
           <View style={{ width:"94%",
                          height:"96%",
                          //opacity:0.8,
                          marginLeft:-7,
                          //borderRadius:50,
                          borderWidth:7,
                          borderColor:colors.MAIN,
                          borderTopRightRadius:50,
                          borderBottomRightRadius:50,
                          //borderTopLeftRadius:20,
                          //borderRadius:50,
                          backgroundColor:"#905c79",
          }}>
            <View style={{ flex:1.5,
                           justifyContent:"flex-end",
            }}>
           <Text style={{
                         fontFamily:  "RowdiesBold",
                         textAlign: "center",
                         color:"white",
                         fontSize:29,
          }}>
            MON HISTOIRE
          </Text>
          </View>
          <View style={{flex:3,
                        justifyContent:"center",
                        alignItems:"center",
          }}>
           <Image 
                  resizeMode="stretch"
                  style={{height:300,
                          width: 300,
                  
                  }}
                  source={require("../../assets/hero/mytick4.png")
                  
          }/>
          </View>
           </View>

        </View>
        <View style={{flex:1.5,
                      justifyContent:"center",
                      alignItems:"center",
        }}>
        <Pressable 
                     onPress={() => navigation.replace("Story")}
                     
          >
          {({ pressed }) => (
           <Text 
                style={{color: pressed ? "#ffffff" + "80" : "#ffffff",
                        fontFamily: "RowdiesBold",
                        fontSize:  34,
                        textAlign: "center",
                        marginTop: 10,
                }}
            >
            {language===0
            ?"Lire l'histoire"
            :langauge===1
            ?"Read the story"
            :"إقرأ القصة"
        }
            </Text>

        )}
        </Pressable>
        </View>                        
     </ ImageBackground>                           
                                                   
  </View>
  
);
}


