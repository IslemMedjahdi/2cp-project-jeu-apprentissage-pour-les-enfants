import { useRef, useState } from "react";
import { Image, Pressable, Text } from "react-native";
import { AlertDialog, Center, Button } from "native-base";
import colors from "../data/colors";
export default function DeleteButton({ language, deleteProfileHandler, name }) {
  const [isOpen, setIsOpen] = useState(false);
  const cancelRef = useRef(null);
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
      <AlertDialog
        leastDestructiveRef={cancelRef}
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
      >
        <AlertDialog.Content>
          <AlertDialog.Header
            flexDirection={language === 2 ? "row-reverse" : "row"}
          >
            <AlertDialog.CloseButton />
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
                fontSize: language === 2 ? 20 : 18,
              }}
            >
              {language === 0
                ? "Supprimer "
                : language === 1
                ? "Delete "
                : "حذف "}
              {'"' + name + '"'}
            </Text>
          </AlertDialog.Header>
          <AlertDialog.Body p={2}>
            <Text
              style={{
                fontFamily: language === 2 ? "ArbFont" : "RowdiesLight",
                color: "gray",
                fontSize: language === 2 ? 18 : 16,
              }}
            >
              {language === 0
                ? 'Cela supprimera toutes les données relatives à "' +
                  name +
                  '" \nCette action est irréversible. Les données supprimés ne peuvent pas être récupérées'
                : language === 1
                ? '.This will remove all data relating to "' +
                  name +
                  '" \nThis action cannot be reversed. Deleted data can not be recovered'
                : 'سيؤدي هذا إلى إزالة جميع البيانات المتعلقة ب  "' +
                  name +
                  '".\n لا يمكن عكس هذا الإجراء. لا يمكن استعادة البيانات المحذوفة.'}
            </Text>
          </AlertDialog.Body>
          <AlertDialog.Footer>
            <Button.Group>
              <Button onPress={() => setIsOpen(false)} bgColor={colors.SECOND}>
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                    color: "white",
                    fontSize: language === 2 ? 18 : 16,
                  }}
                >
                  {language === 0
                    ? "Annuler"
                    : language === 1
                    ? "Cancel"
                    : "إلغاء"}
                </Text>
              </Button>
              <Button onPress={deleteProfileHandler} bgColor={colors.COLOR3}>
                <Text
                  style={{
                    fontFamily: language === 2 ? "ArbFont" : "Rowdies",
                    color: "white",
                    fontSize: language === 2 ? 18 : 16,
                  }}
                >
                  {language === 0
                    ? "Supprimer"
                    : language === 1
                    ? "Delete"
                    : "حذف"}
                </Text>
              </Button>
            </Button.Group>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog>
    </Center>
  );
}

/*

*/
