import { NativeBaseProvider } from "native-base";
import { Image, StatusBar, Text, View } from "react-native";
import Header from "../components/Header";
import SelectMode from "../components/SelectMode";
import { useSelector } from "react-redux";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import colors from "../colors";

export default function Home({ navigation }) {
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
  const [sound, setSound] = useState(null);
  const setup = async () => {
    try {
      await Audio.setAudioModeAsync({ playsInSilentModeIOS: true });
      const { sound } = await Audio.Sound.createAsync(
        require("../../assets/music.mp3"),
        { isLooping: true }
      );
      setSound(sound);
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
  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
  return (
    <NativeBaseProvider>
      <StatusBar translucent={true} backgroundColor={colors.YELLOW} />
      <View>
        <Header />
        <SelectMode />
        <View
          style={{
            alignItems: "center",
            flexDirection: "row",
            justifyContent: "space-around",
          }}
        >
          <View style={{ marginLeft: 30, position: "relative" }}>
            <Image source={require("../../assets/speech.png")} />
            <Text
              style={{
                position: "absolute",
                fontSize: 20,
                fontWeight: "bold",
                color: "white",
                textAlign: "center",
                top: 50,
                width: 100,
                left: 30,
              }}
            >
              choisis un mode
            </Text>
          </View>
          <View>
            <Image source={require("../../assets/surprised.png")} />
          </View>
        </View>
      </View>
    </NativeBaseProvider>
  );
}
