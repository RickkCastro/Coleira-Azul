import React, { useState, useEffect, useContext } from "react";

import {
  useFonts,
  Roboto_300Light,
  Roboto_400Regular,
  Roboto_700Bold,
  Roboto_900Black,
} from "@expo-google-fonts/roboto";

import { Loading } from "./src/components/Loading";
import { LinearGradient } from "expo-linear-gradient";

import { Routes } from "./src/Routes";
import { StatusBar } from "expo-status-bar";

import { GoogleSignin } from "@react-native-google-signin/google-signin";
GoogleSignin.configure({
  webClientId:
    "930791432572-utm30d79aj68ki4bsu9a8mdsv11d3j3u.apps.googleusercontent.com",
});

import auth from "@react-native-firebase/auth";
import { UserToken } from "./src/context/userToken";
import { View } from "react-native";
import { THEME } from "./src/theme/theme";

import firestore from "@react-native-firebase/firestore";

export default function App() {
  //Carrega a font
  let [fontsLoaded] = useFonts({
    Roboto_300Light,
    Roboto_400Regular,
    Roboto_700Bold,
    Roboto_900Black,
  });

  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();

  // lida com mudanças de login
  function onAuthStateChanged(user) {
    if (!loading) setLoading(true);

    if (user) {
       firestore()
        .collection("users")
        .doc(user.uid)
        // checa se existe o user
        .onSnapshot(onResult, onError);

      function onResult(documentSnapshot) {
        console.log("User exists: ", documentSnapshot.exists);

        //caso exista passa os dados dele
        if (documentSnapshot.exists) {
          const userData = documentSnapshot.data();
          console.log("User data: ", userData);
          setUser(userData);
        }

        //se nao, cria o user
        else {
          firestore()
            .collection("users")
            .doc(user.uid)
            .set({
              uid: user.uid,
              name: user.displayName,
              desc: "Sem descrição",
              entry_date: user.metadata.creationTime,
              img: user.photoURL,
            })
            .then(() => {
              console.log("User added!");
            })
            .catch((error) => {
              console.log(error);
            });
        }
      }

      function onError(error) {
      }
    } else {
      setUser(null);
    }
  }

  //verifica o estado inicial de login
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  return (
    <View style={{ flex: 1, backgroundColor: THEME.COLORS.BACKGROUND }}>
      <StatusBar style="auto" />
      {fontsLoaded && loading ? (
        //passa o contexto de userToken para todos os componentes dentro do provider
        <UserToken.Provider value={user}>
          <Routes />
        </UserToken.Provider>
      ) : (
        <Loading />
      )}
    </View>
  );
}
