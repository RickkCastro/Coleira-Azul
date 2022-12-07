import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

export function ScPerfil({navigation}) {
    return (
        <ScrollView style={styles.container}>
            <LinearGradient colors={['#128A84', '#79AF30']} start={{ x: 0, y: 1 }} style={styles.gradient}>
                <SafeAreaView>
                    <View style={styles.header}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.button}>
                            <AntDesign name="left" size={32} color={THEME.COLORS.TEXT} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.logout}>Logout</Text>
                        </TouchableOpacity>
                    </View>
                    <Image source={require('../../assets/rickk.png')} resizeMode={'cover'} style={styles.imgPerfil} />
                </SafeAreaView>
            </LinearGradient>

            <View style={styles.titleView}>
                <Text style={styles.name}>RickkCastro</Text>
                <Text style={styles.desc}>Sou programador!</Text>
            </View>
        </ScrollView>
    );
}