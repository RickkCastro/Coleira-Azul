import { LinearGradient } from 'expo-linear-gradient';
import React, { useContext, useState } from 'react';
import { ScrollView, View, Text, TouchableOpacity, Image } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

import { styles } from './styles';
import { THEME } from '../../theme/theme';
import { SafeAreaView } from 'react-native-safe-area-context';

import auth from '@react-native-firebase/auth';
import { Loading } from '../../components/Loading';
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';
import { UserToken } from '../../context/userToken';

export function ScPerfil({ navigation, route }) {
    const [loading, setLoading] = useState(false)
    const userinfo = useContext(UserToken)

    async function signOut() {
        setLoading(true)
        try {
            auth()
                .signOut()
                .then(() => console.log('User signed out!'));
            await GoogleSignin.signOut();
        } catch (error) {
            console.error(error);
        }
        setLoading(false)
    }

    return (
        <ScrollView style={styles.container}>
            {loading ? <Loading /> :
                <View>
                    {/* Header */}
                    <LinearGradient colors={['#128A84', '#79AF30']} start={{ x: 0, y: 1 }} style={styles.gradient}>
                        <SafeAreaView>
                            <View style={styles.header}>
                                <TouchableOpacity onPress={() => navigation.navigate("ScEditPerfil")} style={styles.button}>
                                    <AntDesign name="edit" size={28} color={THEME.COLORS.TEXT} />
                                </TouchableOpacity>
                                <TouchableOpacity style={styles.button} onPress={() => signOut()}>
                                    <Text style={styles.logout}>Logout</Text>
                                </TouchableOpacity>
                            </View>
                            <Image source={{ uri: userinfo.photoURL }} resizeMode={'cover'} style={styles.imgPerfil} />
                        </SafeAreaView>
                    </LinearGradient>

                    {/* Perfil infos */}
                    <View style={styles.titleView}>
                        <Text style={styles.name} ellipsizeMode='tail' numberOfLines={2}>{userinfo.displayName}</Text>
                        <Text style={styles.desc} ellipsizeMode='tail' numberOfLines={2}>{userinfo.email}</Text>
                    </View>
                </View>
            }
        </ScrollView>
    );
}