import {
  FlatList,
  Pressable,
  Text,
  View,
  Dimensions,
  Image,
} from "react-native";
import { Center, Modal } from "native-base";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";
import avatars from "../data/avatars";

export default function ModifyAvatar({
  language,
  avatar,
  onPressHandlerAvatar,
  isOpen,
  setIsOpen,
}) {
  return (
    <Center>
      <View style={{ alignItems: "center" }}>
        <Pressable
          onPress={() => {
            setIsOpen(!isOpen);
          }}
          hitSlop={{ bottom: 20, top: 20, left: 20, right: 20 }}
          style={{
            borderColor: colors.SECOND,
            backgroundColor: "white",
            borderWidth: 3,
            borderRadius: 50,
            width: 90,
            height : 90,
            zindex: 1,
            transform: [
              { translateY: (-14 * Dimensions.get("window").height) / 100 },
            ],
            //a modifier
          }}
        >
          <Animatable.Image
            animation={"zoomIn"}
            duration={700}
            style={{
              height: 75,
              width: 75,
              margin: 5,
            }}
            resizeMode="center"
            source={avatars[avatar]}
          />
        </Pressable>
        <View
          style={{
            transform: [
              { translateY: (-11 * Dimensions.get("window").height) / 100 },
            ],
            // a modifier
          }}
        >
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "Rowdies",
              fontSize: language === 2 ? 18 : 15,
              textAlign: "center",
              color: colors.SECOND,
            }}
          >
            {language === 0
              ? "Changer d'avatar"
              : language === 1
              ? "Change avatar"
              : "تغيير الصورة"}
          </Text>
        </View>
      </View>
      <Modal
        animationPreset="slide"
        isOpen={isOpen}
        onClose={() => {
          setIsOpen(false);
        }}
      >
        <View
          style={{
            backgroundColor: "white",
            width: "90%",
            height: "62%",
            borderRadius: 20,
            alignItems: "center",
            borderWidth: 2,
            borderColor: colors.SECOND,
            justifyContent: "space-between",
            padding: 10,
          }}
        >
          <Text
            style={{
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 26 : 24,
              textAlign: "center",
              width: "90%",
            }}
          >
            {language === 0
              ? "Sélectionnez un nouveau avatar pour votre enfant"
              : language === 1
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
            renderItem={({ item, index }) => (
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
                    onPressHandlerAvatar(index);
                  }}
                  android_ripple={{ color: colors.SECOND }}
                  style={{
                    backgroundColor:
                      item === avatar ? colors.SECOND : "transparent",
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
      </Modal>
    </Center>
  );
}
