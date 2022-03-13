import React from "react";
import { Pressable, Text, View } from "react-native";

export default function MonthSelect({ setProfile, setPage }) {
  return (
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
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 1 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            JANV
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 2 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            FEVR
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 3 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            MARS
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 4 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            AVRIL
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 5 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            MAI
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 6 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            JUIN
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
        }}
      >
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 7 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            JUIL
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 8 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            AOUT
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 9 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            SEPT
          </Text>
        </Pressable>
      </View>
      <View
        style={{
          flexDirection: "row",
          marginBottom: 25,
        }}
      >
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 10 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            OCT
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 11 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            NOV
          </Text>
        </Pressable>
        <Pressable
          style={{
            paddingHorizontal: 6,
            paddingVertical: 14,
            borderColor: colors.YELLOW,
            borderWidth: 3,
            borderRadius: 10,
            margin: 16,
            width: "18%",
            alignItems: "center",
          }}
          onPress={() => {
            setProfile((profile) => {
              return {
                ...profile,
                birthday: { ...profile.birthday, month: 12 },
              };
            });
            setPage(2);
          }}
        >
          <Text
            style={{
              color: colors.YELLOW,
              fontFamily: "RowdiesBold",
              fontSize: 15,
            }}
          >
            DEC
          </Text>
        </Pressable>
      </View>
    </View>
  );
}
