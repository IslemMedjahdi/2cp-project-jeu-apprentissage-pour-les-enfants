import React from "react";
import { Pressable, Text, View } from "react-native";
import colors from "../colors";

export default function AgeSelect({ setProfile, setPage }) {
  return (
    <View style={{ alignItems: "center" }}>
      <View
        style={{
          alignItems: "center",
          justifyContent: "center",
          marginTop: 30,
        }}
      >
        <View
          style={{
            flexDirection: "row",
          }}
        >
          <Pressable
            style={{
              paddingHorizontal: 12,
              paddingVertical: 22,
              borderColor: colors.YELLOW,
              borderWidth: 3,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              setProfile((profile) => {
                return {
                  ...profile,
                  birthday: { month: 1, year: 2018 },
                };
              });
              setPage(1);
            }}
          >
            <Text
              style={{
                color: colors.YELLOW,
                fontFamily: "RowdiesBold",
                fontSize: 22,
              }}
            >
              4 ans
            </Text>
          </Pressable>
          <Pressable
            style={{
              paddingHorizontal: 12,
              paddingVertical: 22,
              borderColor: colors.YELLOW,
              borderWidth: 3,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              setProfile((profile) => {
                return {
                  ...profile,
                  birthday: { month: 1, year: 2017 },
                };
              });
              setPage(1);
            }}
          >
            <Text
              style={{
                color: colors.YELLOW,
                fontFamily: "RowdiesBold",
                fontSize: 22,
              }}
            >
              5 ans
            </Text>
          </Pressable>
        </View>
        <View style={{ flexDirection: "row" }}>
          <Pressable
            style={{
              paddingHorizontal: 12,
              paddingVertical: 22,
              borderColor: colors.YELLOW,
              borderWidth: 3,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              setProfile((profile) => {
                return {
                  ...profile,
                  birthday: { month: 1, year: 2016 },
                };
              });
              setPage(1);
            }}
          >
            <Text
              style={{
                color: colors.YELLOW,
                fontFamily: "RowdiesBold",
                fontSize: 22,
              }}
            >
              6 ans
            </Text>
          </Pressable>
          <Pressable
            style={{
              paddingHorizontal: 12,
              paddingVertical: 22,
              borderColor: colors.YELLOW,
              borderWidth: 3,
              borderRadius: 10,
              margin: 20,
            }}
            onPress={() => {
              setProfile((profile) => {
                return {
                  ...profile,
                  birthday: { month: 1, year: 2015 },
                };
              });
              setPage(1);
            }}
          >
            <Text
              style={{
                color: colors.YELLOW,
                fontFamily: "RowdiesBold",
                fontSize: 22,
              }}
            >
              7 ans
            </Text>
          </Pressable>
        </View>
      </View>
      <Text
        style={{
          textAlign: "center",
          color: "#ACACAC",
          width: "80%",
          fontFamily: "Rowdies",
          marginTop: 20,
          marginBottom: 50,
        }}
      >
        Nous recueillions les ages à une seule fin de personnalisation. Nous
        veillons à protèger votre viee privée
      </Text>
    </View>
  );
}
