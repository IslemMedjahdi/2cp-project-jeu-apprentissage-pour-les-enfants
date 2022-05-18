import { ResizeMode } from "expo-av";
import React, { useState } from "react";

import { ImageBackground, StyleSheet, Text, View,Image } from "react-native";
import Pressable from "react-native/Libraries/Components/Pressable/Pressable";
import { backgroundColor } from "react-native/Libraries/Components/View/ReactNativeStyleAttributes";
import { Colors } from "react-native/Libraries/NewAppScreen";
import colors from "../data/colors";

export default function Story({navigation}){
  const [page,setPage] = useState(0);
return (
  <View style={{flex: 1}}>
    
    <ImageBackground source={require("../../assets/background/background0.jpg")} resizeMode="cover"
                     style={{ flex: 1,
                             // justifyContent: "center"
                               }}>
        <View style={{ flex:1.05,
                      justifyContent:"flex-end",
                     // backgroundColor:"black",
                       
        }}>
          <Text  style={{fontFamily:  "RowdiesBold",
                        textAlign: "center",
                         fontSize:30,
                         color:"#ffffff",
                         
                        }}>MON HISTOIRE</Text>
        </View>
        <View style={{flex:2.5,
                     // margin:18,
                     marginTop:40,
                      marginLeft:18,
                      marginRight:18,
                      borderRadius:50,
                      backgroundColor:'rgba(255,255,255,0.8)',
           }}>
           <View style={{flex:2.5,
                          marginTop:40,
                          opacity:1,
          }}>
           <Text style={{fontFamily:  "RowdiesBold",
                        textAlign: "center",
                         fontSize:27,
                         color:"#000000",
                         }}>
                   {page===4 
                   ? "Aujourd'hui je me sens en bonne santé et je suis là pour t'éviter de tomber dans le même piège ... "
                   : page===3
                   ? "Mais le jour où j'ai commencé à me sentir mal dans ma peau, j'ai décidé de faire attention à mon alimentation ..."
                   : page ===2
                   ? "Avec le temps j'ai commencé à grossir, de jour en jour je suis devenu obèse ..."
                   : page===1
                   ?"Mon estomac me faisait souvent mal et je me retrouvais malade d'intoxication ..."
                   :"Auparavant je ne faisais pas attention à mon alimentation, je mangeais tout et n'importe quoi ..."
                  }
                  </Text>
          </View>
          <View style={{flex:2,
                         justifyContent:"center",
                         alignItems:"center",
                         opacity:1,
          }}>
            {page===0
             ? <Image 
                  
                  resizeMode="contain"
                  style={{height:177,
                          width: 211,
                          marginBottom:40,
                  }}
                  source={require("../../assets/hero/mystick2.png")}        
          />
          : page ===1
          ?<Image 
                  
            resizeMode="contain"
            style={{height:177,
                    width: 211,
                    marginBottom:40,
            }}
            source={require("../../assets/hero/mystick15.webp")}      
         />
          : page===2
          ? <Image 
                  
            resizeMode="contain"
            style={{height:177,
                    width: 211,
                    marginBottom:40,
            }}
             source={require("../../assets/hero/mystick14.webp")}      
           />
          :page===3
          ?<Image       
                  resizeMode="contain"
                  style={{height:177,
                          width: 211,
                          marginBottom:40,
                  }}
                  source={require("../../assets/hero/mystick13.webp")}      
          />
         :<Image  resizeMode="contain"
                  style={{height:177,
                          width: 211,
                          marginBottom:40,
                  }}
                  source={require("../../assets/hero/mystick16.webp")}      
          />
           }
          </View>
        </View>
        
        <View style={{flex:1.3,
                       alignItems: page===4?"center":"flex-end",
                      //justifyContent:"flex-end",
                       justifyContent: page===4 ? "center" : "flex-end",
                      //alignItems:"flex-end",
                      marginRight:30,
        }}>
         <Pressable
                    onPress={() => {page===4? navigation.replace("SelectTheme"):setPage(page+1)}}
                    android_ripple={{ color: "#ffffff30" ,  
                  }}
          >
            
            { page===4
            ?<Text
            style={{
             color:"white",
              fontFamily: "RowdiesBold",
              fontSize:  30,
              textAlign: "center",
            }}
          >
            Cliquez
          </Text>
            : <Image source={require("../../assets/icons/continuer2.png")}></Image>
             }
      </Pressable>
        </View>

                                
     </ ImageBackground>                           
                                                   
  </View>
  
);
}



