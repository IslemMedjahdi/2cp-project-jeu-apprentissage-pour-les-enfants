import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Center, Modal } from "native-base";
import colors from "../data/colors";
import { Colors } from "react-native/Libraries/NewAppScreen";

export default function DeleteButton({ language, deleteProfileHandler, name }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <Center>
      <Pressable
        onPress={() => setIsOpen(!isOpen)}
        android_ripple={{
          color: "#FF000040",
          borderless: true,
        }}
      >
        <Image
          style={{ width: 50, height: 50 }}
          source={require("../../assets/icons/Remove.png")}
        />
      </Pressable>
      <Modal
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "81%",
            height: "40%",
            borderRadius: 40,
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.SECOND,
            justifyContent: "space-around",
            paddingTop: 50,
          }}
        >
           <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 3 ? 20 : 25,
              textAlign: "center",
            }}
          >
            {language === 0
              ? "Voulez-vous vraiment supprimer le profil                 de "
              : language === 1
              ? "Are you sure you want to delete the profile                      of "
              : " هل أنت متأكد أنك تريد حذف صفحة"}
              {name}
          </Text>
           <View style={{ paddingTop:60 }}>
           <Pressable
              android_ripple={{ color: "#FFFFFFEE" }}
              onPress={deleteProfileHandler}
              style={{
                paddingHorizontal: 30,
                paddingVertical: 10,
                backgroundColor: colors.SECOND,
                borderRadius:15,
              }}
            >
             <Text
                   style={{
                    fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                    fontSize: language === 0 ? 20 : 15,
                    color: "white",
                    textAlign: "center",
                  }}
                >
                  {language === 0
                    ? "Supprimer"
                    : language === 1
                    ? "Delete"
                    : "حذف"}
             </Text>
             </Pressable>
             
           </View>
           
           <View style={{flexDirection:"row-reverse",
                           alignItems:"flex-end",
                          //justifyContent:"center",
            }} >
              <Image
                source={require("../../assets/hero/mystick11.png")}
                style={{
                  position: "relative",
                 width: 160,
                  height: 160,
                }}
                resizeMode="contain"
              />
           <Pressable 
               onPress={() => setIsOpen(false) }
              style={{
                paddingBottom:50,

              }}
            >
           <Text style={{
                  fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                  fontSize: language === 0 ? 20 : 16,
                  textAlign: "center",
                  color: colors.SECOND,
                  textDecorationLine: "underline",
                }}
              >
                {language === 0
                  ? "Annuler"
                  : language === 1
                  ? "Cancel"
                  : "إلغاء"}
             </Text> 
           </Pressable>
           <Image
                source={require("../../assets/hero/mystick11.png")}
                style={{
                  position: "relative",
                  width: 160,
                  height: 160,
                  opacity:0,
                }}
                resizeMode="contain"
              />
           </View>
          </View>
      </Modal>
    </Center>
  );
}

