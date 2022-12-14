import { LinearGradient } from 'expo-linear-gradient';
import React, { useState } from 'react';
import { TouchableOpacity, View, Text, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { googleSignIn } from '../../backend/auth/googleAuth';
import { Loading } from '../../components/Loading';

export function ScLogin({ navigation, route }) {
  const [loading, setLoading] = useState(false)

  async function handleGoogleSingIn() {
    // Entra com uma conta google e ativa o loading
    setLoading(true)
    await googleSignIn()
    setLoading(false)
  }

  return (
    <LinearGradient colors={['#128A84', '#79AF30']} style={styles.container}>
      <View style={styles.container}>
        <View style={styles.logo}>
          <Image source={require('../../assets/logo.png')} resizeMode={'cover'} style={styles.imgLogo} />
        </View>

        <View style={styles.buttons}>
          <Text style={styles.text}>Entre em uma conta para começar</Text>

          {loading ? <Loading /> :
            <View>
              <TouchableOpacity style={[styles.connectBt, { backgroundColor: '#fff' }]} onPress={() => handleGoogleSingIn()}>
                <Image source={require('../../assets/icons/GoogleLogo.png')} />
                <Text style={[styles.btText, { color: '#656565' }]}>Entrar com Google</Text>
              </TouchableOpacity>
            </View>
          }

        </View>

        <Text style={styles.copy}>COPYRIGHT @RickkCastro</Text>
      </View>
    </LinearGradient>
  );
}