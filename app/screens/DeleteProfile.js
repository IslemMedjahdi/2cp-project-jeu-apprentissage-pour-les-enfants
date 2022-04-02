import { Text, View, BackHandler } from "react-native";
import { useEffect } from "react";

export default function DeleteProfile({ navigation }) {
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        navigation.replace("SelectProfile");
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  return (
    <View style={{ backgroundColor: "white" }}>
      <Text>Delete Profile</Text>
    </View>
  );
}
