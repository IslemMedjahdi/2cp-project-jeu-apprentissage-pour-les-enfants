import { useState } from "react";
import { Image, Pressable, Text, View } from "react-native";
import { Center, Modal } from "native-base";
import colors from "../data/colors";
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
        <Image source={require("../../assets/icons/Remove.png")} />
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
            width: "85%",
            height: "40%",
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.MAIN,
          }}
        >
          {/* put your code here */}
        </View>
      </Modal>
    </Center>
  );
}

/*

onPress 3la annuller, onPress={() => setIsOpen(false) }
onPress 3la supprimer : onPress={deleteProfileHandler}
fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
kifah tdiri traduction: 

                  { language === 0
                    ? "Supprimer"
                    : language === 1
                    ? "Delete": "حذف"}    

*/
