import {
  BackHandler,
  Dimensions,
  Image,
  StatusBar,
  Text,
  View,
  ImageBackground,
  Pressable,
} from "react-native";
import * as Speech from "expo-speech";
import themes from "../data/themes";
import { muteMusic, toggleMusic, toggleSound } from "../redux/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";
import { useEffect, useState } from "react";
import SettingsGame from "../components/SettingsGame";
import AnswerCard from "../components/AnswerCard";

export default function QuizzTest({ navigation, route }) {
  const { index } = route.params;
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      "hardwareBackPress",
      () => {
        return true;
      }
    );
    return () => backHandler.remove();
  }, []);
  //REDUX
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const language = useSelector((state) => state.user.value.language);
  const music = profiles[selectedProfile].music;
  const dispatch = useDispatch();
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [soundQuestionOn, setSoundQuestionOn] = useState(true);
  const [answersColors, setAnswersColors] = useState([
    "white",
    "white",
    "white",
    "white",
  ]);
  const [disabled, setDisabled] = useState(false);
  const [score, setScore] = useState(0);
  useEffect(() => {
    dispatch(muteMusic({ selectedProfile }));
    return () => {
      if (music) {
        clickMusicHandler();
      }
    };
  }, []);
  useEffect(() => {
    Speech.stop();
    const options = {
      language: language === 0 ? "fr" : language === 1 ? "en" : "ar-SA",
    };
    if (soundQuestionOn && profiles[selectedProfile].sound) {
      Speech.speak(
        themes[index].questions[indexQuestion].question[language],
        options
      );
      themes[index].questions[indexQuestion].answers[0] &&
        Speech.speak(
          themes[index].questions[indexQuestion].answers[0].answer[language],
          options
        );
      themes[index].questions[indexQuestion].answers[1] &&
        Speech.speak(
          themes[index].questions[indexQuestion].answers[1].answer[language],
          options
        );
      themes[index].questions[indexQuestion].answers[2] &&
        Speech.speak(
          themes[index].questions[indexQuestion].answers[2].answer[language],
          options
        );
      themes[index].questions[indexQuestion].answers[3] &&
        Speech.speak(
          themes[index].questions[indexQuestion].answers[3].answer[language],
          options
        );
    }
    return () => Speech.stop();
  }, [indexQuestion, soundQuestionOn, profiles[selectedProfile].sound]);

  //------------------------------------
  // SOUNDS SETUP
  const clickMusicHandler = () => {
    dispatch(toggleMusic({ selectedProfile }));
  };

  const clickSoundHandler = () => {
    dispatch(toggleSound({ selectedProfile }));
  };

  const onPressHandlerQuestion = () => {
    if (!soundQuestionOn) {
      setSoundQuestionOn(true);
    } else {
      setSoundQuestionOn(false);
    }
  };
  const onPressHandlerAnswer = (correct, answerIndex, color) => {
    let newAnswersColors = [...answersColors];
    newAnswersColors[answerIndex] =
      color === 0
        ? "#72CC50"
        : color === 1
        ? "#FBF40E"
        : color === 2
        ? "#F7A400"
        : "#FF4A4A";
    setAnswersColors(newAnswersColors);
    if (correct) {
      setDisabled(true);
      setImg(require("../../assets/hero/mystick6.png"));
      const newScore =
        score + newAnswersColors.filter((x) => x == "white").length * 100;
      setTimeout(() => {
        setScore(newScore);
        setAnswersColors(["white", "white", "white", "white"]);
        indexQuestion === themes[index].questions.length - 1
          ? console.warn("score : " + newScore)
          : setIndexQuestion(indexQuestion + 1);
        setDisabled(false);
        setImg(require("../../assets/hero/mytick4.png"));
      }, 1000);
      setSoundQuestionOn(true);
    } else {
      switch (newAnswersColors.filter((x) => x == "white").length) {
        case 1:
          setImg(require("../../assets/hero/mystick8.png"));
          break;
        case 2:
          setImg(require("../../assets/hero/mystick5.png"));
          break;

        case 3:
          setImg(require("../../assets/hero/mystick9.png"));
          break;
      }
    }
  };
  //-----------------------------------------
  const [img, setImg] = useState(require("../../assets/hero/mytick4.png"));
  return (
    <View style={{ height: "100%", backgroundColor: "white" }}>
      <StatusBar
        backgroundColor={"white"}
        translucent={true}
        barStyle={"light-content"}
      />
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
      >
        <View
          style={{
            height: (9 * Dimensions.get("window").height) / 100,
            position: "absolute",
            bottom: 80,
          }}
        >
          <Image style={{ height: 150, width: 150 }} source={img} />
        </View>
        <View
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            height: (15 * Dimensions.get("window").height) / 100,
          }}
        >
          <Animatable.View
            animation={"fadeInDown"}
            style={{
              flexDirection: "row",
              alignItems: "center",
              backgroundColor: "white",
              paddingHorizontal: 10,
              borderRadius: 10,
              marginRight: "20%",
            }}
          >
            <Text
              style={{
                fontFamily: "RowdiesBold",
                fontSize: 16,
                marginHorizontal: 7,
                color: "black",
              }}
            >
              {profiles[selectedProfile].score}
            </Text>
            <Image
              resizeMode="contain"
              style={{ width: 22, height: 22 }}
              source={require("../../assets/icons/gold.png")}
            />
          </Animatable.View>
          <SettingsGame
            toggleSound={clickSoundHandler}
            language={language}
            sound={profiles[selectedProfile].sound}
            navigation={navigation}
          />
        </View>
        <View
          style={{
            height: (6 * Dimensions.get("window").height) / 100,
            borderTopLeftRadius: 15,
            borderTopRightRadius: 15,
            borderColor: colors.MAIN,
            borderWidth: 3,
            backgroundColor: "white",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: "RowdiesBold",
              fontSize: 16,
              paddingHorizontal: 15,
              borderTopLeftRadius: 15,
              borderTopRightRadius: 15,
            }}
          >
            {indexQuestion + 1} / {themes[index].questions.length}
          </Text>
        </View>
        <View
          style={{
            height: (35 * Dimensions.get("window").height) / 100,
            width: "90%",
            borderRadius: 15,
            borderColor: colors.MAIN,
            borderWidth: 3,
            backgroundColor: "white",
            marginTop: -3,
            justifyContent: "space-between",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 18 : 16,
              padding: 15,
              borderRadius: 15,
              textAlign: "center",
            }}
          >
            {themes[index].questions[indexQuestion].question[language]}
          </Text>
          <Pressable
            onPress={onPressHandlerQuestion}
            style={{
              left: 20,
              bottom: 20,
            }}
          >
            <Image
              source={require("../../assets/icons/loudspeaker.png")}
              style={{
                position: "relative",
                height: 50,
                width: 50,
              }}
              resizeMode="contain"
            />
          </Pressable>
        </View>
        <View
          style={{
            height: (35 * Dimensions.get("window").height) / 100,
            width: "90%",
          }}
        >
          <View
            style={{
              flexDirection: language === 2 ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {themes[index].questions[indexQuestion].answers[0] && (
              <AnswerCard
                language={language}
                disabled={disabled}
                bgColor={answersColors[0]}
                pressHandlerAnswer={() =>
                  onPressHandlerAnswer(
                    themes[index].questions[indexQuestion].answers[0].correct,
                    0,
                    themes[index].questions[indexQuestion].answers[0].color
                  )
                }
                answer={
                  themes[index].questions[indexQuestion].answers[0].answer[
                    language
                  ]
                }
              />
            )}
            {themes[index].questions[indexQuestion].answers[1] && (
              <AnswerCard
                language={language}
                disabled={disabled}
                bgColor={answersColors[1]}
                pressHandlerAnswer={() =>
                  onPressHandlerAnswer(
                    themes[index].questions[indexQuestion].answers[1].correct,
                    1,
                    themes[index].questions[indexQuestion].answers[1].color
                  )
                }
                answer={
                  themes[index].questions[indexQuestion].answers[1].answer[
                    language
                  ]
                }
              />
            )}
          </View>
          <View
            style={{
              flexDirection: language === 2 ? "row-reverse" : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {themes[index].questions[indexQuestion].answers[2] && (
              <AnswerCard
                language={language}
                disabled={disabled}
                bgColor={answersColors[2]}
                pressHandlerAnswer={() =>
                  onPressHandlerAnswer(
                    themes[index].questions[indexQuestion].answers[2].correct,
                    2,
                    themes[index].questions[indexQuestion].answers[2].color
                  )
                }
                answer={
                  themes[index].questions[indexQuestion].answers[2].answer[
                    language
                  ]
                }
              />
            )}
            {themes[index].questions[indexQuestion].answers[3] && (
              <AnswerCard
                language={language}
                disabled={disabled}
                bgColor={answersColors[3]}
                pressHandlerAnswer={() =>
                  onPressHandlerAnswer(
                    themes[index].questions[indexQuestion].answers[3].correct,
                    3,
                    themes[index].questions[indexQuestion].answers[3].color
                  )
                }
                answer={
                  themes[index].questions[indexQuestion].answers[3].answer[
                    language
                  ]
                }
              />
            )}
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
