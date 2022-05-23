import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import Profil from "../components/Profil";
import { View, ImageBackground, StatusBar, Dimensions } from "react-native";
import HomeCard from "../components/HomeCard";
import colors from "../data/colors";
import { toggleMusic, toggleSound } from "../redux/profilesSlice";
import Settings from "../components/Settings";
import React from "react";
export default React.memo(function Home({ navigation }) {
  //REDUX

  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const language = useSelector((state) => state.user.value.language);
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
  const dispatch = useDispatch();
  //------------------------------------
  // SOUNDS SETUP
  const sound = useSelector((state) => state.music.value);
  useEffect(() => {
    if (music) {
      play();
    }
  }, []);

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
  const clickMusicHandler = () => {
    if (!music) {
      play();
    } else {
      pause();
    }
    dispatch(toggleMusic({ selectedProfile }));
  };
  const clickSoundHandler = () => {
    dispatch(toggleSound({ selectedProfile }));
  };
  //-----------------------------------------
  return (
    <View>
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        style={{
          width: Dimensions.get("screen").width,
          height: Dimensions.get("screen").height,
        }}
      >
        <View style={{ alignItems: "center" }}>
          <View
            style={{
              height: (20 * Dimensions.get("window").height) / 100,
              width: "100%",
              justifyContent: "space-evenly",
              alignItems: "center",
              flexDirection: language === 2 ? "row-reverse" : "row",
            }}
          >
            <Profil language={language} />
            <Settings
              toggleMusic={clickMusicHandler}
              toggleSound={clickSoundHandler}
              language={language}
              music={profiles[selectedProfile].music}
              sound={profiles[selectedProfile].sound}
              navigation={navigation}
            />
          </View>

          <HomeCard
            animation={"fadeInDown"}
            title={
              language === 0
                ? "Accéder à la carte"
                : language === 1
                ? "Access to the map"
                : "اختيار الخريطة"
            }
            desc={
              language === 0
                ? "commence ta propre histoire"
                : language === 1
                ? "Start your own story"
                : "ابدأ قصتك الخاصة"
            }
            image={require("../../assets/hero/mystick2.png")}
            color={colors.MAIN}
            language={language}
           pressHandler={() => profiles[selectedProfile].levels[0].stars===0? navigation.navigate("StoryBook"):navigation.navigate("SelectTheme")}
          />

          <HomeCard
            animation={"fadeInUp"}
            title={
              language === 0
                ? "Accéder aux challenges"
                : language === 1
                ? "Access to challenges"
                : "اختيار التحديات"
            }
            desc={
              language === 0
                ? "débloque plus de challenges"
                : language === 1
                ? "unlock more challenges"
                : "افتح تحديات أكثر"
            }
            image={require("../../assets/hero/mystick3.png")}
            color={colors.SECOND}
            language={language}
          />
        </View>
      </ImageBackground>
    </View>
  );
});
