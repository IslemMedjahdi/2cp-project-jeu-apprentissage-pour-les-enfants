import { useState } from "react";
import { Pressable, Text, TextInput, View } from "react-native";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { app, db } from "../Core/firebaseConfig";
import { useDispatch, useSelector } from "react-redux";
import { setConnected } from "../redux/userSlice";
import { doc, setDoc } from "firebase/firestore";

export default function LinkUser({ navigation }) {
  const dispatch = useDispatch();
  const profiles = useSelector((state) => state.profiles.value);
  const [data, setData] = useState({
    email: "",
    password: "",
    passwordCheck: "",
  });
  const submitHandler = () => {
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, data.email, data.password)
      .then((response) => {
        dispatch(
          setConnected({ email: response.user.email, uid: response.user.uid })
        );
        setDoc(doc(db, "users", response.user.uid), { profiles }).then(() =>
          navigation.replace("SelectProfile")
        );
      })
      .catch((e) =>
        console.log("code : " + e.code + " message : " + e.message)
      );
  };
  return (
    <View style={{ padding: 10 }}>
      <Text>Login</Text>
      <TextInput
        placeholder="email"
        style={{ borderWidth: 1, margin: 10 }}
        onChangeText={(text) =>
          setData((data) => {
            return { ...data, email: text };
          })
        }
      />
      <TextInput
        placeholder="password"
        secureTextEntry
        style={{ borderWidth: 1, margin: 10 }}
        onChangeText={(text) =>
          setData((data) => {
            return { ...data, password: text };
          })
        }
      />
      <TextInput
        placeholder="repassword"
        secureTextEntry
        style={{ borderWidth: 1, margin: 10 }}
        onChangeText={(text) =>
          setData((data) => {
            return { ...data, passwordCheck: text };
          })
        }
      />
      <Pressable
        style={{ borderWidth: 1, margin: 10, padding: 10 }}
        onPress={() => submitHandler()}
      >
        <Text>Submit</Text>
      </Pressable>
    </View>
  );
}
