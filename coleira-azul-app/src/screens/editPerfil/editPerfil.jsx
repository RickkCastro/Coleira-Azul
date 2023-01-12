import React, { useContext, useState } from 'react';
import { KeyboardAvoidingView, TouchableOpacity, View, Text, Image, ImageBackground, TextInput } from 'react-native';
import { AntDesign } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme/theme';
import { SafeAreaFrameContext, SafeAreaView } from 'react-native-safe-area-context';
import { UserToken } from '../../context/userToken';
import { LinearGradient } from 'expo-linear-gradient';

import firestore from '@react-native-firebase/firestore';
import * as ImagePicker from 'expo-image-picker';

export function ScEditPerfil({ navigation }) {

  const userInfo = useContext(UserToken)

  const [name, setName] = useState(userInfo.name)
  const [desc, setDesc] = useState(userInfo.desc)
  const [img, setImg] = useState(userInfo.img);

  const pickImage = async () => {
    // No permissions request is necessary for launching the image library
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 4],
      quality: 1,
    });

    if (!result.canceled) {
      setImg(result.assets[0].uri);
    }
  };


  function handleSaveEdit() {
    firestore()
      .collection('users')
      .doc(userInfo.uid)
      .update({
        name: name,
        desc: desc,
        img: img,
      })
      .then(() => {
        console.log('User updated!');
      });

    navigation.goBack()
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

      <TouchableOpacity style={styles.imgView} onPress={() => pickImage()}>
        <ImageBackground source={{ uri: img }} resizeMode={'cover'} imageStyle={styles.imgStyle} style={styles.imgStyle2}>
          <MaterialCommunityIcons name="image-edit-outline" size={37} color={THEME.COLORS.TEXT} />
        </ImageBackground>
      </TouchableOpacity>

      <View style={styles.dataCamp}>
        <Text style={styles.title}>Nome:</Text>
        <TextInput style={styles.textInput} onChangeText={name => setName(name)}>{name}</TextInput>
      </View>

      <View style={styles.dataCamp}>
        <Text style={styles.title}>Descrição:</Text>
        <TextInput style={[styles.textInput, styles.descInput]} multiline numberOfLines={2}
          onChangeText={desc => setDesc(desc)}>{desc}</TextInput>
      </View>

      <TouchableOpacity onPress={() => handleSaveEdit()}>
        <LinearGradient colors={['#128A84', '#79AF30']} start={{ x: 0, y: 1 }} style={styles.saveButton}>
          <Text style={styles.textHeader}>Salvar alterações</Text>
        </LinearGradient>
      </TouchableOpacity>

    </KeyboardAvoidingView>
  );
}