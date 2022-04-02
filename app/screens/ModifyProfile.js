import { useEffect } from "react";
import { BackHandler, Text, View } from "react-native";

export default function ModifyProfile({ navigation }) {
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
    <View>
      <Text>ModifyProfile Profile</Text>
    </View>
  );
}
