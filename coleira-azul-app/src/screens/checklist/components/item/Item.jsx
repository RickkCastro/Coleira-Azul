import React, { useEffect, useState } from 'react';
import { View, TouchableOpacity, Image, Text } from 'react-native';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../../../theme/theme';

export function Item(props) {
  const status = ["Não Assistido", "Em Andamento", "Assistido"]
  const [currentStatus, setCurrentStatus] = useState("Não Assistido")
  const [color, setColor] = useState("#fff")

  useEffect(() => {
    switch (currentStatus) {
      case "Assistido":
        setColor("#79AF30")
        return;
      case "Em Andamento":
        setColor('#FBBC05')
        return;
      default:
        setColor('#fff')
        return;
    }
  }, [currentStatus])

  return (
    <TouchableOpacity style={[styles.container, { borderColor: color }]}>
      <View style={styles.infos}>
        <Image source={{ uri: props.uri }}
          style={styles.img} resizeMode={'cover'} />
        <View style={styles.texts}>
          <Text style={styles.title}>{props.name}</Text>
          <Text style={styles.desc} ellipsizeMode='tail' numberOfLines={4}>{props.desc}</Text>
          <Text style={styles.data}>Ano: {props.reDate}</Text>
        </View>
      </View>
      <SelectDropdown data={status} buttonStyle={{
        backgroundColor: 'transparent',
        width: '100%',
        height: 40,
        borderWidth: 1,
        borderRadius: 20,
        borderColor: color,
        paddingLeft: 10,
        marginLeft: 10,
      }}
        defaultValue={status[0]} defaultButtonText={status[0]} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
        rowTextStyle={styles.rowTextStyle} renderCustomizedButtonChild={(value) => {
          return (
            <View style={styles.buttonChild}>
              <AntDesign name={value == "Assistido" ? "checkcircleo" : value == "Em Andamento" ? "clockcircleo" : "closecircleo"} size={18} color={color} />
              <Text style={[styles.buttonTextStyle, { color: color }]}>{value}</Text>
              <AntDesign name="caretdown" size={16} color={color} />
            </View>
          )
        }} onSelect={(value) => setCurrentStatus(value)}
      />
    </TouchableOpacity>
  );
}