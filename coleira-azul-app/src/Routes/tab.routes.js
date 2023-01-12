import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { FontAwesome5 } from '@expo/vector-icons';

import { ScChecklist } from "../screens/checklist/Checklist";
import { ScPerfil } from "../screens/perfil/ScPerfil";
import { THEME } from "../theme/theme";
import { View } from "react-native";

const Tab = createBottomTabNavigator();

export function TabRoutes() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarAllowFontScaling: true,
        tabBarLabelPosition: "beside-icon",
        tabBarLabelStyle: {fontWeight: "bold", fontSize: 16,},
        tabBarStyle: {borderTopWidth: 0, elevation: 0, backgroundColor: THEME.COLORS.BACKGROUND },
        tabBarIconStyle: {marginRight: 6,}
      }}
    >
      <Tab.Screen
        name="ScPerfil"
        component={ScPerfil}
        options={{
          tabBarIcon: (screen) => {
            return (
              <FontAwesome5
                name="user"
                size={22}
                color={screen.focused ? THEME.COLORS.PRIMARY : THEME.COLORS.TEXT}
              />
            );
          },
          tabBarActiveTintColor: THEME.COLORS.PRIMARY,
          tabBarInactiveTintColor: THEME.COLORS.TEXT,
          tabBarLabel: "Perfil",
        }}
      />

      <Tab.Screen
        name="ScChecklist"
        component={ScChecklist}
        options={{
          tabBarIcon: (screen) => {
            return (
              <FontAwesome5
                name="list"
                size={22}
                color={screen.focused ? THEME.COLORS.PRIMARY : THEME.COLORS.TEXT}
              />
            );
          },
          tabBarActiveTintColor: THEME.COLORS.PRIMARY,
          tabBarInactiveTintColor: THEME.COLORS.TEXT,
          tabBarLabel: "Checklist",
        }}
      />
    </Tab.Navigator>
  );
}
