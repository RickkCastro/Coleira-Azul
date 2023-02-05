import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { View, Text, TextInput, FlatList } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import SelectDropdown from 'react-native-select-dropdown';
import { AntDesign } from '@expo/vector-icons';
import { useFocusEffect } from '@react-navigation/native';

import firestore from '@react-native-firebase/firestore';

import { THEME } from '../../theme/theme';
import { Item } from './components/item/Item';
import { Loading } from '../../components/Loading';

import { styles } from './styles';

export function ScChecklist() {
	const status = ["Todos", "Não Assistidos", "Em Andamento", "Assistidos"]
	const filter = ["Todos", "Filme", "Série", "Especial"]
	const order = ["Título", "Título Inverso", "Data", "Data Inversa"]

	const [currentFilter, setCurrentFilter] = useState('Todos')
	const [currentOrder, setCurrentOrder] = useState('Data')
	const [currentStatus, setCurrentStatus] = useState('Todos')

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

	//Sistema de filtro e ordenação
	const filteredItens = () => {
		let newList = [...itens]

		//filtros de tipo e status
		if (currentStatus === 'Todos' && currentFilter != 'Todos') {
			//somente filtro de tipo
			newList = newList.filter((item) => item.data.type === currentFilter)
		} else if (currentStatus != 'Todos' && currentFilter === 'Todos') {
			//somente filtro de status
		} else if (currentStatus != 'Todos' && currentFilter != 'Todos') {
			//filtros de status e tipo
			newList = newList.filter((item) => item.data.type === currentFilter)
		}

		//ordenar itens
		switch (currentOrder) {
			case 'Título':
				newList.sort((a, b) => (a.data.name > b.data.name) ?
					1 : (b.data.name > a.data.name) ? -1 : 0)
				break
			case 'Título Inverso':
				newList.sort((a, b) => (a.data.name > b.data.name) ?
					-1 : (b.data.name > a.data.name) ? 1 : 0)
				break
			case 'Data':
				newList.sort((a, b) => (a.data.release_date > b.data.release_date) ?
					1 : (b.data.release_date > a.data.release_date) ? -1 : 0)
				break
			default:
				newList.sort((a, b) => (a.data.release_date > b.data.release_date) ?
					-1 : (b.data.release_date > a.data.release_date) ? 1 : 0)
		}

		return newList
	}

	// Sistema de buscar
	const [search, setSearch] = useState('')

	const filteredSearchItens = () => {
		const lowerSearch = search.toLowerCase()
		return filteredItens.filter(item => item.data.name.toLowerCase().includes(lowerSearch))
	}

	return (
		<SafeAreaView style={styles.container}>
			{/* Header */}
			<View style={styles.header}>
				<Text style={styles.title}>Checklist</Text>
				<TextInput placeholder='Pesquisar' placeholderTextColor={THEME.COLORS.TEXT} style={styles.search}
					value={search} onChangeText={(evt) => setSearch(evt)}></TextInput>
				{/* Filtros */}
				<View style={styles.filters}>
					<SelectDropdown data={filter} buttonStyle={styles.buttonStyle} buttonTextStyle={styles.buttonTextStyle}
						renderDropdownIcon={() => { return (<AntDesign name="caretdown" size={16} color={THEME.COLORS.TEXT} />) }}
						defaultValue={currentFilter} defaultButtonText={currentFilter} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
						rowTextStyle={styles.rowTextStyle} onSelect={(value) => { setCurrentFilter(value), console.log(value) }} />

					<SelectDropdown data={status} buttonStyle={styles.buttonStyle2} buttonTextStyle={styles.buttonTextStyle}
						renderDropdownIcon={() => { return (<AntDesign name="caretdown" size={16} color={THEME.COLORS.TEXT} />) }}
						defaultValue={currentStatus} defaultButtonText={currentStatus} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
						rowTextStyle={styles.rowTextStyle} onSelect={(value) => setCurrentStatus(value)} />
				</View>
				{/* Ordenar */}
				<View style={styles.ordenar}>
					<Text style={styles.text}>Ordenar por:</Text>
					<SelectDropdown data={order} buttonStyle={styles.buttonStyle2} buttonTextStyle={styles.buttonTextStyle}
						renderDropdownIcon={() => { return (<AntDesign name="caretdown" size={16} color={THEME.COLORS.TEXT} />) }}
						defaultValue={currentOrder} defaultButtonText={currentOrder} dropdownStyle={styles.dropdownStyle} statusBarTranslucent
						rowTextStyle={styles.rowTextStyle} onSelect={(value) => setCurrentOrder(value)} />
				</View>
			</View>

			{/* List */}
			<View style={{ flex: 1 }}>
				{itens.length > 0 ?
					<FlatList
						data={filteredSearchItens}
						renderItem={({ item }) =>
							<Item name={item.data.name} desc={item.data.desc}
								reDate={item.data.release_date} uri={item.data.cover_img} />
						}
						keyExtractor={(item) => item.id}
						style={styles.list}
					/>
					: <Loading />}
			</View>
		</SafeAreaView>
	);
}