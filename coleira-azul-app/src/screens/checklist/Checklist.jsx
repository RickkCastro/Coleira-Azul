import React, { useEffect, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';

import firestore from '@react-native-firebase/firestore';

import { THEME } from '../../theme/theme';
import { Item } from './components/item/Item';
import { Loading } from '../../components/Loading';

import { styles } from './styles';

export function ScChecklist() {
	const status = ["Todos", "Não Assistidos", "Em Andamento", "Assistidos"]
	const filtro = ["Todos", "Filmes", "Séries", "Especiais"]
	const ordenar = ["Título", "Título Inverso", "Data", "Data Inversa"]

	const [itens, setItens] = useState([])

	useEffect(() => {
		loadItens()
	}, [])

	async function loadItens() {
		await firestore().collection('itens').get().then(querySnapshot => {
			const data = []

			querySnapshot.forEach(documentSnapshot => {
				const item = {
					id: documentSnapshot.id,
					data: documentSnapshot.data(),
				}
				data.push(item)
			});

			setItens(data);
		})
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>Checklist</Text>
				<TextInput placeholder='Pesquisar' placeholderTextColor={THEME.COLORS.TEXT} style={styles.search}></TextInput>
				{/* Filtros */}
				<View style={styles.filters}>
					<SelectDropdown data={filtro} buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}
						renderDropdownIcon={() => { return (<AntDesign name="caretdown" size={16} color={THEME.COLORS.TEXT} />) }}
						defaultValue={filtro[0]} defaultButtonText={filtro[0]} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
						rowTextStyle={styles.rowTextStyle} />

					<SelectDropdown data={status} buttonStyle={styles.buttonStyle2} buttonTextStyle={styles.buttonTextStyle}
						renderDropdownIcon={() => { return (<AntDesign name="caretdown" size={16} color={THEME.COLORS.TEXT} />) }}
						defaultValue={status[0]} defaultButtonText={status[0]} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
						rowTextStyle={styles.rowTextStyle} />
				</View>
				{/* Ordenar */}
				<View style={styles.ordenar}>
					<Text style={styles.text}>Ordenar por:</Text>
					<SelectDropdown data={ordenar} buttonStyle={styles.buttonStyle2} buttonTextStyle={styles.buttonTextStyle}
						renderDropdownIcon={() => { return (<AntDesign name="caretdown" size={16} color={THEME.COLORS.TEXT} />) }}
						defaultValue={ordenar[0]} defaultButtonText={ordenar[0]} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
						rowTextStyle={styles.rowTextStyle} />
				</View>
			</View>

			{/* List */}
			<View style={{flex: 1}}>
				{itens.length > 0 ?
					<FlatList
						data={itens}
						renderItem={({ item }) =>
							<Item name={item.data.name} desc={item.data.desc} reDate={item.data.release_date} uri={item.data.cover_img} />
						}
						keyExtractor={(item) => item.id}
						style={styles.list}
					/>
					: <Loading />}
			</View>
		</SafeAreaView>
	);
}