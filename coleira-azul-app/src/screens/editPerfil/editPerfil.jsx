import React, { useContext } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View, Text, Image, ImageBackground, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme/theme';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { UserToken } from '../../context/userToken';
import { LinearGradient } from 'expo-linear-gradient';

import auth from '@react-native-firebase/auth';

export function ScEditPerfil({ navigation }) {

  const userInfo = useContext(UserToken)

  function handleSaveEdit() {
    console.log(auth().currentUser.uid)
  }

  return (
    <KeyboardAvoidingView style={styles.container}>
      <SafeAreaView style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <AntDesign name="left" size={32} color={THEME.COLORS.TEXT} />
        </TouchableOpacity>
        <Text style={styles.textHeader}>Editar Perfil</Text>
        <View style={styles.backButton}>
          <AntDesign name="left" size={32} color={'transparent'} />
        </View>
      </SafeAreaView>

      <TouchableOpacity style={styles.imgView}>
        <ImageBackground source={{ uri: userInfo.photoURL }} resizeMode={'cover'} style={styles.imgStyle}>
          <MaterialCommunityIcons name="image-edit-outline" size={37} color={THEME.COLORS.TEXT} />
        </ImageBackground>
      </TouchableOpacity>

      <View style={styles.dataCamp}>
        <Text style={styles.title}>Nome:</Text>
        <TextInput style={styles.textInput}>{userInfo.displayName}</TextInput>
      </View>

      <View style={styles.dataCamp}>
        <Text style={styles.title}>Descrição:</Text>
        <TextInput style={[styles.textInput, styles.descInput]} multiline numberOfLines={2}>{userInfo.email}</TextInput>
      </View>

      <TouchableOpacity onPress={() => handleSaveEdit()}>
        <LinearGradient colors={['#128A84', '#79AF30']} start={{ x: 0, y: 1 }} style={styles.saveButton}>
          <Text style={styles.textHeader}>Salvar alterações</Text>
        </LinearGradient>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}