import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const ItemsList = ({item, deleteItem}) => {

  return (
      <TouchableOpacity style={styles.itemcontainer}>
        <View style={styles.itemslist}>
            <Text style={styles.itemtext}>{item.text}</Text>
            <Icon name='remove' size={20} color='red' onPress={() => deleteItem(item.id)}/>
        </View>
      </TouchableOpacity>
  )
}

export default ItemsList

const styles = StyleSheet.create({
    itemcontainer: {
        padding: 15,
        backgroundColor: '#f2f2f2',
        borderBottomWidth: 1,
        borderColor: '#ddd'
    },
    itemslist: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    itemtext: {
        fontSize: 18,
        fontWeight: 'bold'
    }
})