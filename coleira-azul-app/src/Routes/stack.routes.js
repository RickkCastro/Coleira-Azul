import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { UserToken } from "../context/userToken";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScLogin } from "../screens/login/ScLogin";
import { ScPerfil } from "../screens/perfil/ScPerfil";

//Armazenar todas as telas no navigator
export function StackRoutes() {
  const userToken = useContext(UserToken);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "flip",
        orientation: "portrait",
      }}
    >
      {userToken == null ? (
        <Screen name="ScLogin" component={ScLogin} />
      ) : (
        <Screen name="ScPerfil" component={ScPerfil} />
      )}
    </Navigator>
  );
}
