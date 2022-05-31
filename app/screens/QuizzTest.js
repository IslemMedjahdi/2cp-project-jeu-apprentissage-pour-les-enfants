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
import { toggleMusic, toggleSound } from "../redux/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../data/colors";
import * as Animatable from "react-native-animatable";
import { useEffect, useState } from "react";
import SettingsGame from "../components/SettingsGame";
import AnswerCard from "../components/AnswerCard";
import { Modal } from "native-base";

export default function QuizzTest({ navigation, route }) {
  const { index } = route.params;
  const [isOpen, setIsOpen] = useState(false);
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

  //
  const sound = useSelector((state) => state.music.value);

  const pause = async () => {
    try {
      await sound.pauseAsync();
    } catch (e) {
      throw e;
    }
  };

  useEffect(() => {
    pause();
  }, []);
  //

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
      Speech.stop();
      setImg(require("../../assets/hero/mystick6.png"));
      const nbWhite = newAnswersColors.filter((x) => x == "white").length;
      let newScore = 0;
      if (themes[index].questions[answerIndex].answers.length === 2) {
        if (nbWhite !== 3) {
          newScore = score;
        } else {
          newScore = score + 30;
        }
      } else {
        newScore = score + nbWhite * 10;
      }
      setScore(newScore);
      if (
        profiles[selectedProfile].levels[index].stars < 2 &&
        themes[index].questions[indexQuestion].explanation.length !== 0
      ) {
        setIsOpen(true);
      } else {
        setTimeout(() => {
          setAnswersColors(["white", "white", "white", "white"]);
          setDisabled(false);
          setImg(require("../../assets/hero/mytick4.png"));
          setSoundQuestionOn(true);
          indexQuestion === themes[index].questions.length - 1
            ? navigation.replace("Results", {
                index: index,
                score: newScore,
              })
            : setIndexQuestion(indexQuestion + 1);
        }, 1500);
      }
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
        source={themes[index].backgroundGame}
        style={{ width: "100%", height: "100%", alignItems: "center" }}
        resizeMode={"cover"}
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
            justifyContent: "space-evenly",
          }}
        >
          <Text
            style={{
              color: "black",
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              fontSize: language === 2 ? 25 : 25,
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
            }}
          >
            <Image
              source={
                soundQuestionOn
                  ? require("../../assets/icons/sonquestion.png")
                  : require("../../assets/icons/sonOFF.png")
              }
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
              flexDirection:
                index === 4 && themes[index].questions[indexQuestion].type == 0
                  ? "column"
                  : language === 2
                  ? "row-reverse"
                  : "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            {themes[index].questions[indexQuestion].answers[0] && (
              <AnswerCard
                type={themes[index].questions[indexQuestion].type}
                image={themes[index].questions[indexQuestion].answers[0].image}
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
                themeIndex={index}
              />
            )}
            {themes[index].questions[indexQuestion].answers[1] && (
              <AnswerCard
                type={themes[index].questions[indexQuestion].type}
                image={themes[index].questions[indexQuestion].answers[1].image}
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
                themeIndex={index}
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
                image={themes[index].questions[indexQuestion].answers[2].image}
                type={themes[index].questions[indexQuestion].type}
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
                themeIndex={index}
              />
            )}
            {themes[index].questions[indexQuestion].answers[3] && (
              <AnswerCard
                image={themes[index].questions[indexQuestion].answers[3].image}
                type={themes[index].questions[indexQuestion].type}
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
                themeIndex={index}
              />
            )}
          </View>
        </View>
        <Modal
          isOpen={isOpen}
          style={{
            height: (60 * Dimensions.get("window").height) / 100,
            width: "90%",
            borderWidth: 5,
            borderRadius: 39,
            backgroundColor: colors.MAIN,
            borderColor: "white",
            alignSelf: "center",
            position: "absolute",
            top: (20 * Dimensions.get("window").height) / 100,
          }}
        >
          <Text
            style={{
              color: "white",
              fontSize: language === 2 ? 28 : 25,
              fontFamily: language === 2 ? "ArbFont" : "RowdiesBold",
              textAlign: "center",
              padding: 20,
              height: (45 * Dimensions.get("window").height) / 100,
            }}
          >
            {themes[index].questions[indexQuestion].explanation[language]}
          </Text>
          <Image
            source={require("../../assets/hero/mystick10.png")}
            style={{
              height: 150,
              width: 150,
              transform: [{ rotateY: "180deg" }],
              bottom: 20,
              position: "absolute",
              left: 10,
            }}
            resizeMode="contain"
          />
          <Pressable
            onPress={() => {
              setIsOpen(false);
              setAnswersColors(["white", "white", "white", "white"]);
              setDisabled(false);
              setImg(require("../../assets/hero/mytick4.png"));
              setSoundQuestionOn(true);
              setIndexQuestion(indexQuestion + 1);
            }}
            style={{ bottom: 40, position: "absolute", right: 40 }}
          >
            <Image
              source={require("../../assets/icons/continuer2.png")}
              style={{
                height: 60,
                width: 60,
              }}
            />
          </Pressable>
        </Modal>
      </ImageBackground>
    </View>
  );
}
