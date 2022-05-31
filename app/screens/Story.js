import React, { useState } from "react";
import { useSelector } from "react-redux";
import { ImageBackground, Pressable, Text, View, Image } from "react-native";


export default function Story({ navigation }) {
  const [page, setPage] = useState(0);
  const language = useSelector((state) => state.user.value.language);
  return (
    <View style={{ flex: 1 }}>
      <ImageBackground
        source={require("../../assets/background/background0.jpg")}
        resizeMode="cover"
        style={{
          flex: 1,
        }}
      >
        <View
          style={{
            flex: 1.05,
            justifyContent: "flex-end",
          }}
        >
          <Text
            style={{
              fontFamily: "RowdiesBold",
              textAlign: "center",
              fontSize: 30,
              color: "#ffffff",
            }}
          >
            MON HISTOIRE
          </Text>
        </View>
        <View
          style={{
            flex: 2.5,
            marginTop: 40,
            marginLeft: 18,
            marginRight: 18,
            borderRadius: 50,
            backgroundColor: "rgba(255,255,255,0.8)",
          }}
        >
          <View style={{ flex: 2.5, marginTop: 40, opacity: 1 }}>
            <Text
              style={{
                fontFamily: "RowdiesBold",
                textAlign: "center",
                fontSize: 27,
                color: "#000000",
              }}
            >
              {(page === 4 && language==0)
                ? "Aujourd'hui je me sens en bonne santé et je suis là pour t'éviter de tomber dans le même piège ... "
                :(page === 4 && language==1)
                ?"Today I feel healthy and I'm here to prevent you from falling into the same trap..."
                :(page === 4 && language==2)
                ?"اليوم أنا بصحة جيدة وأنا هنا لمنعك من الوقوع في نفس الفخ..."
                :(page === 3 && language==0)
                ? "Mais le jour où j'ai commencé à me sentir mal dans ma peau, j'ai décidé de faire attention à mon alimentation ..."
                :(page === 3 && language==1)
                ?"But the day I started to feel bad about myself, I decided to pay attention to my diet..."
                :(page === 3 && language==2)
                ?"لكن في اليوم الذي بدأت فيه أشعر بالضيق تجاه نفسي ، قررت الانتباه إلى ما أتناوله ..."
                :(page === 2 && language==0)
                ? "Avec le temps j'ai commencé à grossir, de jour en jour je suis devenu obèse ..."
                :(page === 2 && language==1)
                ?"Over time I started to put on weight, day by day I became obese..."
                :(page === 2 && language==2)
                ?"مع مرور الوقت بدأ وزني في الزيادة  ،يومًا بعد يوم  أصبحت أعاني من السمنة ..."
                :(page === 1 && language==0)
                ? "Mon estomac me faisait souvent mal et je tombais malade d'intoxication ..."
                :(page === 1 && language==1)
                ?"My stomach often hurt and I fell ill with intoxication ..."
                :(page === 1 && language==2)
                ?"كثيرا ما كانت تؤلمني معدتي وأصاب بالتسمم الغذائي..."
                :(page === 0 && language==0)
                ? "Auparavant je ne faisais pas attention à mon alimentation, je mangeais tout et n'importe quoi ..."
                :(page === 0 && language==1)
                ?"Previously I did not pay attention to my diet, I ate everything and anything..."
                :"في السابق لم أكن أعير إهتماما لما أتناوله فقد كنت أتناول كل ما أجد أمامي ..." }
                
               
            </Text>
          </View>
          <View
            style={{
              flex: 2,
              justifyContent: "center",
              alignItems: "center",
              opacity: 1,
            }}
          >
            {page === 0 ? (
              <Image
                resizeMode="contain"
                style={{ height: 177, width: 211, marginBottom: 40 }}
                source={require("../../assets/hero/mystick2.png")}
              />
            ) : page === 1 ? (
              <Image
                resizeMode="contain"
                style={{ height: 177, width: 211, marginBottom: 40 }}
                source={require("../../assets/hero/mystick15.webp")}
              />
            ) : page === 2 ? (
              <Image
                resizeMode="contain"
                style={{ height: 177, width: 211, marginBottom: 40 }}
                source={require("../../assets/hero/mystick14.webp")}
              />
            ) : page === 3 ? (
              <Image
                resizeMode="contain"
                style={{ height: 177, width: 211, marginBottom: 40 }}
                source={require("../../assets/hero/mystick13.webp")}
              />
            ) : (
              <Image
                resizeMode="contain"
                style={{ height: 177, width: 211, marginBottom: 40 }}
                source={require("../../assets/hero/mystick16.webp")}
              />
            )}
          </View>
        </View>

        <View
          style={{
            flex: 1.3,
            alignItems: page === 4 ? "center" : "flex-end",
            justifyContent: page === 4 ? "center" : "flex-end",
            marginRight: 30,
          }}
        >
          <Pressable
            onPress={() => {
              page === 4
                ? navigation.replace("SelectTheme")
                : setPage(page + 1);
            }}
            android_ripple={{ color: "#ffffff30" }}
          >
            {page === 4 ? (
              <Text
                style={{
                  color: "white",
                  fontFamily: "RowdiesBold",
                  fontSize: 30,
                  textAlign: "center",
                }}
              >
                Cliquez
              </Text>
            ) : (
              <Image
                source={require("../../assets/icons/continuer2.png")}
              ></Image>
            )}
          </Pressable>
        </View>
      </ImageBackground>
    </View>
  );
}
