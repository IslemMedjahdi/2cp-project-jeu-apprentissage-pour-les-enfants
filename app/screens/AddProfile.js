import { useEffect, useState } from "react";
import { Image, Text, View } from "react-native";
import colors from "../colors";
import AgeSelect from "../components/AgeSelect";
import MonthSelect from "../components/MonthSelect";

export default function AddProfile() {
  const [page, setPage] = useState(0);
  const [profile, setProfile] = useState({
    name: "",
    birthday: { month: 1, year: 2018 },
    score: 0,
    avatar: 0,
    music: true,
    sound: true,
    language: 0,
    badges: [],
    levels: [],
  });
  useEffect(() => {
    console.log(profile);
  }, [profile]);
  return (
    <View style={{ backgroundColor: "white", height: "100%" }}>
      <View style={{ alignItems: "center" }}>
        <Image
          resizeMode="stretch"
          style={{ width: 200, height: 200, marginTop: 20 }}
          source={require("../../assets/images/kid.png")}
        />
        <Text
          style={{
            fontFamily: "RowdiesBold",
            fontSize: 30,
            width: "75%",
            textAlign: "center",
          }}
        >
          {page === 0
            ? "Sélectionner l'age de votre enfant"
            : page === 1
            ? "Sèlectionner le mois de naissance de votre enfant"
            : ""}
        </Text>
      </View>
      {page === 0 ? (
        <AgeSelect setProfile={setProfile} setPage={setPage} />
      ) : page === 1 ? (
        <MonthSelect setProfile={setProfile} setPage={setPage} />
      ) : (
        <View />
      )}
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          width: "50%",
          alignSelf: "center",
        }}
      >
        {[1, 2, 3, 4].map((_, index) => (
          <View
            key={index}
            style={{
              width: 20,
              height: 20,
              borderRadius: 99,
              backgroundColor: page === index ? colors.YELLOW : "white",
              borderColor: colors.YELLOW,
              borderWidth: 2,
            }}
          />
        ))}
      </View>
    </View>
  );
}
