import {
  BackHandler,
  Dimensions,
  FlatList,
  Image,
  StatusBar,
  Text,
  View,
  ImageBackground,
  Pressable
} from "react-native";
import { Audio } from "expo-av";
import { toggleMusic, toggleSound } from "../redux/profilesSlice";
import { useDispatch, useSelector } from "react-redux";
import colors from "../data/colors";
import questions from "../data/questions";
import * as Animatable from "react-native-animatable";
import { useEffect, useState } from "react";
import SettingsGame from "../components/SettingsGame";

export default function SelectProfile({ navigation }) {

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
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
  const dispatch = useDispatch();
  const [question, setQuestion] = useState(0);
  //------------------------------------
  // SOUNDS SETUP
  const [sound, setSound] = useState(null);
  const [soundQuestionOn, setSoundQuestionOn] = useState(false);

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

  const onPressHandlerQuestion = () => {
    if (!soundQuestionOn) {
      console.log("is playing");
      setSoundQuestionOn(true);
      //play son te3 la question
    } else {
      console.log("is not playing");
      setSoundQuestionOn(false);
      //pause son te3 la question
    }
  };

  const onPressHandlerAnswer = (isRight) => {
    if (isRight) {
      question === (questions.length - 1) ? setQuestion(0) : setQuestion(question + 1);
      // traitement te3 ki ykhayer reponse s7i7a
    } else {
      // traitement te3 ki ykhayer reponse ghelta
    }
  };
  //-----------------------------------------

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
          <Image
            style={{ height: 150, width: 150 }}
            source={require("../../assets/hero/mytick4.png")}
          />
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
            toggleMusic={clickMusicHandler}
            toggleSound={clickSoundHandler}
            language={language}
            music={profiles[selectedProfile].music}
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
            {" "}
            {question + 1} / 7
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
              fontFamily: "RowdiesBold",
              fontSize: 16,
              padding: 15,
              borderRadius: 15,
              textAlign: "center",
            }}
          >
            {" "}
            {questions[question].question}
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
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() =>
                onPressHandlerAnswer(questions[question].answers[0].isRight)
              }
              style={{
                height: (17 * Dimensions.get("window").height) / 100,
                width: "45%",
                borderRadius: 15,
                borderColor: colors.MAIN,
                borderWidth: 3,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontFamily: "RowdiesBold",
                  fontSize: 16,
                  padding: 15,
                  borderRadius: 15,
                  textAlign: "center",
                }}
              >
                {" "}
                {questions[question].answers[0].body}
              </Text>
            </Pressable>
            <Pressable
              onPress={() =>
                onPressHandlerAnswer(questions[question].answers[1].isRight)
              }
              style={{
                height: (17 * Dimensions.get("window").height) / 100,
                width: "45%",
                borderRadius: 15,
                borderColor: colors.MAIN,
                borderWidth: 3,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontFamily: "RowdiesBold",
                  fontSize: 16,
                  padding: 15,
                  borderRadius: 15,
                  textAlign: "center",
                }}
              >
                {" "}
                {questions[question].answers[1].body}
              </Text>
            </Pressable>
          </View>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Pressable
              onPress={() =>
                onPressHandlerAnswer(questions[question].answers[2].isRight)
              }
              style={{
                height: (17 * Dimensions.get("window").height) / 100,
                width: "45%",
                borderRadius: 15,
                borderColor: colors.MAIN,
                borderWidth: 3,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontFamily: "RowdiesBold",
                  fontSize: 16,
                  padding: 15,
                  borderRadius: 15,
                  textAlign: "center",
                }}
              >
                {" "}
                {questions[question].answers[2].body}
              </Text>
            </Pressable>

            <Pressable
              onPress={() =>
                onPressHandlerAnswer(questions[question].answers[3].isRight)
              }
              style={{
                height: (17 * Dimensions.get("window").height) / 100,
                width: "45%",
                borderRadius: 15,
                borderColor: colors.MAIN,
                borderWidth: 3,
                backgroundColor: "white",
                margin: 5,
                justifyContent: "center",
              }}
            >
              <Text
                style={{
                  color: "black",
                  fontFamily: "RowdiesBold",
                  fontSize: 16,
                  padding: 15,
                  borderRadius: 15,
                  textAlign: "center",
                }}
              >
                {" "}
                {questions[question].answers[3].body}
              </Text>
            </Pressable>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
}
