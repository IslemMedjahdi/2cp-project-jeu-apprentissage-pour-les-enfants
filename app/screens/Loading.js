import { useEffect, useState } from "react";
import { Text, View, Pressable } from "react-native";
import { useDispatch, useSelector } from "react-redux";
export default function Loading({ navigation }) {
  const profiles = useSelector((state) => state.profiles.value);
  const dispatch = useDispatch();
  useEffect(() => {
    setTimeout(() => {
      /* 
                @Todo
                get The info from local storage, if existe navigate to select Profiles (offline)
                if not :  show login (online) + new User screen ( offline)
      */
    }, 3000);
  }, []);
  const [bg, setBg] = useState("red");
  const pressHandler = () => {
    navigation.navigate("Home");
  };
  return (
    <View
      style={{
        backgroundColor: "yellow",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text
        style={{
          fontWeight: "bold",
          fontSize: 20,
          textDecorationLine: "underline",
        }}
      >
        Loading page
      </Text>
      <Pressable onPress={pressHandler}>
        <Text
          style={{
            marginTop: 20,
            backgroundColor: "red",
            padding: 10,
            borderRadius: 10,
            color: "white",
            fontWeight: "bold",
          }}
        >
          go to home
        </Text>
      </Pressable>
    </View>
  );
}
