import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { googleSignIn } from '../../backend/auth/googleAuth';

export function ScLogin({navigation}) {
  return (
    <LinearGradient colors={['#128A84', '#79AF30']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../../assets/logo.png')} resizeMode={'cover'} style={styles.imgLogo}/>
        </View>

        <View style={styles.buttons}>
          <Text style={styles.text}>Entre em uma conta para começar</Text>

          <TouchableOpacity style={[styles.connectBt, { backgroundColor: '#fff' }]} onPress={() => googleSignIn()}>
            <Image source={require('../../assets/icons/GoogleLogo.png')} />
            <Text style={[styles.btText, { color: '#656565' }]}>Entrar com Google</Text>
          </TouchableOpacity>

          <TouchableOpacity style={[styles.connectBt, { backgroundColor: '#1877F2' }]} onPress={() => navigation.navigate("ScPerfil")}>
            <AntDesign name="facebook-square" size={24} color="#fff" />
            <Text style={[styles.btText, { color: '#fff' }]}>Entrar com Facebook</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.copy}>COPYRIGHT @RickkCastro</Text>
      </View>
    </LinearGradient>
  );
}