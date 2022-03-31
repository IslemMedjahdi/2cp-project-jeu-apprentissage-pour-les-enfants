import { useState } from "react";
import { View } from "react-native";
import colors from "../colors";
import Language from "../components/Language";
import NewOldUser from "../components/NewOldUser";
import Salut from "../components/Salut";

export default function Begin({ navigation }) {
  const [page, setPage] = useState(0);
  const [language, setLanguage] = useState(3);
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.MAIN,
      }}
    >
      {page === 0 && (
        <Language
          setPage={setPage}
          language={language}
          setLanguage={setLanguage}
        />
      )}
      {page === 1 && <Salut setPage={setPage} language={language} />}
      {page === 2 && <NewOldUser language={language} navigation={navigation} />}
    </View>
  );
}
