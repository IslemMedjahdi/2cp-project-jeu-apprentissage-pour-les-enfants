import { useSelector, useDispatch } from "react-redux";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import Profil from "../components/Profil";
import { View, ImageBackground, StatusBar, Dimensions } from "react-native";
import HomeCard from "../components/HomeCard";
import colors from "../colors";
import {
  changeLanguage,
  toggleMusic,
  toggleSound,
} from "../redux/profilesSlice";
import Settings from "../components/Settings";

export default function Home({ navigation }) {
  //REDUX
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
  const dispatch = useDispatch();
  //------------------------------------
  // SOUNDS SETUP
  const [sound, setSound] = useState(null);
  const setup = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/sounds/music.mp3"),
        { isLooping: true }
      );
      setSound(sound);
      if (music) await sound.playAsync();
    } catch (e) {
      throw e;
    }
  };
  const play = async () => {
    try {
      await sound.playAsync();
    } catch (e) {
      throw e;
    }
  };
  const pause = async () => {
    try {
      await sound.pauseAsync();
    } catch (e) {
      throw e;
    }
  };
  useEffect(() => {
    setup();
  }, []);
  useEffect(() => {
    if (sound)
      if (music) {
        play();
      } else {
        pause();
      }
  }, [music]);
  const clickMusicHandler = (a) => {
    dispatch(toggleMusic({ selectedProfile }));
    if (music) {
      play();
    } else {
      pause();
    }
  };
  const clickSoundHandler = (a) => {
    dispatch(toggleSound({ selectedProfile }));
  };
  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
  //-----------------------------------------
  const clickLanguageHandler = () => {
    dispatch(changeLanguage({ selectedProfile }));
  };
  return (
    <View>
      <StatusBar translucent={true} barStyle={"light-content"} />
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        style={{ width: "100%", height: "100%" }}
      >
        <View style={{ padding: 20 }}>
          <View
            style={{
              height: (20 * Dimensions.get("window").height) / 100,
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: "row",
            }}
          >
            <Profil language={profiles[selectedProfile].language} />
            <Settings
              toggleMusic={clickMusicHandler}
              toggleSound={clickSoundHandler}
              toggleLanguage={clickLanguageHandler}
              language={profiles[selectedProfile].language}
              music={profiles[selectedProfile].music}
              sound={profiles[selectedProfile].sound}
              navigation={navigation}
            />
          </View>
          <View
            style={{
              height: (80 * Dimensions.get("window").height) / 3,
            }}
          >
            <HomeCard
              title={
                profiles[selectedProfile].language === 0
                  ? "Accéder à la carte"
                  : profiles[selectedProfile].language === 1
                  ? "Access to the map"
                  : "اختيار الخريطة"
              }
              desc={
                profiles[selectedProfile].language === 0
                  ? "commence ta propre histoire"
                  : profiles[selectedProfile].language === 1
                  ? "Start your own story"
                  : "ابدأ قصتك الخاصة"
              }
              image={require("../../assets/hero/mystick2.png")}
              color={colors.MAIN}
              language={profiles[selectedProfile].language}
            />
            <HomeCard
              title={
                profiles[selectedProfile].language === 0
                  ? "Accéder aux challenges"
                  : profiles[selectedProfile].language === 1
                  ? "Access to challenges"
                  : "اختيار التحديات"
              }
              desc={
                profiles[selectedProfile].language === 0
                  ? "débloque plus de challenges"
                  : profiles[selectedProfile].language === 1
                  ? "unlock more challenges"
                  : "افتح تحديات أكثر"
              }
              image={require("../../assets/hero/mystick3.png")}
              color={colors.SECOND}
              language={profiles[selectedProfile].language}
            />
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
