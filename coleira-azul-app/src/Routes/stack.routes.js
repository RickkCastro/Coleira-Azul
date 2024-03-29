import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useContext, useState } from "react";
import { UserToken } from "../context/userToken";

const { Screen, Navigator } = createNativeStackNavigator();

import { ScLogin } from "../screens/login/ScLogin";
import { ScPerfil } from "../screens/perfil/ScPerfil";
import { ScEditPerfil } from "../screens/editPerfil/editPerfil";
import { TabRoutes } from "./tab.routes";

//Armazenar todas as telas no navigator
export function StackRoutes() {
  //pega o user token atual
  const userToken = useContext(UserToken);

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
        animation: "flip",
        orientation: "portrait",
      }}
    >
      {/* caso null vai para tela de login*/}
      {userToken == null ? (
        <Screen name="ScLogin" component={ScLogin} />
      ) : (
        <>
          <Screen name="TabPerfil" component={TabRoutes} />
          <Screen name="ScEditPerfil" component={ScEditPerfil}/>
        </>
      )}
    </Navigator>
  );
}
