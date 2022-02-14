import React, { useState } from "react";
import { View, StyleSheet, FlatList, Alert } from 'react-native'
import uuid from 'react-native-uuid'
import AddItems from "./AddItems";
import ItemsList from "./ItemsList";

const Main = () => {

const [items, setItems] = useState([
   {id: uuid.v4(), text: 'Lego' },
   {id: uuid.v4(), text: 'Playmobile' },
   {id: uuid.v4(), text: 'Gamer PC' },
   {id: uuid.v4(), text: 'Socks' }
])

const deleteItem = id => {
    setItems(prevItems => {
        return prevItems.filter(item => item.id !== id)
    })
}

const addItem = text => {
    if (!text) {
        Alert.alert('Please enter a wish', 'ok' )
    } else {
        setItems(prevItems => {
            return [{id: uuid.v4(), text}, ...prevItems]
        })
    }  
}

  return (
    <View style={styles.main}>
        <AddItems addItem={addItem}/>
        <FlatList data={items} renderItem={({item}) => <ItemsList item={item} deleteItem={deleteItem} />} />
    </View> 
  )
}

export default Main

const styles = StyleSheet.create({

})