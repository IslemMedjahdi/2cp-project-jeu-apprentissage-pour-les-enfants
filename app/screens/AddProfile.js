import { Dimensions, Image, View } from "react-native";
import NameInput from "../components/NameInput";
import { useState } from "react";
import SelectAge from "../components/SelectAge";
import SelectAvatar from "../components/SelectAvatar";
import colors from "../data/colors";
import { useSelector } from "react-redux";

export default function AddProfile({ navigation }) {
  const language = useSelector((state) => state.user.value.language);
  const [page, setPage] = useState(0);
  const [profile, setProfile] = useState({
    id: 0,
    avatar: 0,
    score: 100,
    music: true,
    sound: true,
    badges: [
      {
        image: 0,
        text: ["nouveau hero", "New Hero", "بطل جديد"],
      },
    ],
    levels: [
      { unLocked: true, stars: 0 },
      { unLocked: false, stars: 0 },
      { unLocked: false, stars: 0 },
      { unLocked: false, stars: 0 },
      { unLocked: false, stars: 0 },
    ],
    level: 1,
  });
  return (
    <View
      style={{ alignItems: "center", backgroundColor: "white", height: "100%" }}
    >
      <View
        style={{
          height: (20 * Dimensions.get("window").height) / 100,
          justifyContent: "center",
        }}
      >
        <Image
          resizeMode="contain"
          style={{ height: "80%" }}
          source={require("../../assets/hero/mystick3.png")}
        />
      </View>
      <Image
        source={require("../../assets/icons/strawberry.png")}
        style={{
          position: "absolute",
          width: 50,
          height: 50,
          top: Dimensions.get("window").height / 3,
          right: 25,
        }}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/icons/fond1.png")}
        style={{
          position: "absolute",
          width: 40,
          height: 40,
          top: (3 * Dimensions.get("window").height) / 12,
          left: 25,
        }}
        resizeMode="contain"
      />
      <Image
        source={require("../../assets/icons/cup.png")}
        style={{
          position: "absolute",
          width: 70,
          height: 70,
          top: (11 * Dimensions.get("window").height) / 12,
          left: 25,
        }}
        resizeMode="contain"
      />
      {page === 0 && (
        <NameInput
          language={language}
          setPage={setPage}
          setProfile={setProfile}
          navigation={navigation}
        />
      )}
      {page === 1 && (
        <SelectAge
          setPage={setPage}
          language={language}
          setProfile={setProfile}
        />
      )}
      {page === 2 && (
        <SelectAvatar
          language={language}
          setPage={setPage}
          setProfile={setProfile}
          profile={profile}
          navigation={navigation}
        />
      )}
      <View
        style={{
          height: (15 * Dimensions.get("window").height) / 100,
          flexDirection: language === 2 ? "row-reverse" : "row",
          justifyContent: "space-between",
          width: "30%",
          alignItems: "center",
        }}
      >
        {[0, 1, 2].map((item) => (
          <View
            key={item}
            style={{
              height: 16,
              width: 16,
              borderRadius: 8,
              borderColor: colors.SECOND,
              borderWidth: 1,
              backgroundColor: item === page ? colors.SECOND : "transparent",
            }}
          />
        ))}
      </View>
    </View>
  );
}
