import { useSelector } from "react-redux";
import { Audio } from "expo-av";
import { useEffect, useState } from "react";
import { View, Text } from "react-native";

export default function Home({ navigation }) {
  //REDUX
  const profiles = useSelector((state) => state.profiles.value);
  const selectedProfile = useSelector((state) => state.selectedProfile.value);
  const music = useSelector(
    (state) => state.profiles.value[selectedProfile].music
  );
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
  useEffect(() => {
    return sound ? () => sound.unloadAsync() : undefined;
  }, [sound]);
  //-----------------------------------------
  return (
    <View>
      <Text>Hello {profiles[selectedProfile].name}</Text>
    </View>
  );
}
