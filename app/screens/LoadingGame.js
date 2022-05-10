import { useEffect, useState } from "react";
import { View ,Text} from "react-native";
import BouncingPreloader from "react-native-bouncing-preloaders";
import LottieView from "lottie-react-native";
import { useDispatch, useSelector } from "react-redux";
import { changeProfileHandler } from "../redux/profilesSlice";
import colors from "../data/colors";


export default function LoadingGame({navigation,route}) {
    const {profile,destination} = route.params;
    const dispatch = useDispatch();
    const selectedProfile = useSelector((state) => state.selectedProfile.value);


    useEffect(() => {
        dispatch(changeProfileHandler({ profile, selectedProfile }));
        setTimeout(() => {
            if (destination===1) navigation.replace("SelectTheme");
            else navigation.replace("Home");

        }, 5000);
      }, []);
  return (
    <View
      style={{
        height: "100%",
        alignItems: "center",
        justifyContent: "flex-end",
        backgroundColor: "white",
      }}
    >
      <View style={{}}>
        <BouncingPreloader
          icons={[
            require("../../assets/images/0.png"),
            require("../../assets/images/3.png"),
            require("../../assets/images/1.png"),
            require("../../assets/images/4.png"),
            require("../../assets/images/2.png"),
            require("../../assets/images/5.png"),
          ]}
          leftRotation="180deg"
          leftDistance={-100}
          rightRotation="-180deg"
          rightDistance={-100}
          speed={1200}
          size={200}


        />
      </View>
      <View
        style={{
          width: "100%",
          height: "50%",
        }}
      >
        <LottieView
          source={require("../../99589-loader-for-web.json")}
          autoPlay
          loop
        />
      </View>
    </View>
  )
}