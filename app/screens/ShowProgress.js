import { useEffect } from "react";
import { BackHandler, Text, View } from "react-native";

export default function ShowProgress({ navigation }) {
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
      <Text>Show Progress</Text>
    </View>
  );
}
