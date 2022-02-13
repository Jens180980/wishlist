import React, { useState } from "react";
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import Icon from 'react-native-vector-icons/FontAwesome'

const AddItems = ({addItem}) => {

    const [wishInput, setWishInput] = useState('')
    const inputField = value => setWishInput(value)

  return (
    <View style={styles.addcontainer}>
        <TextInput placeholder="Add wish" style={styles.inputfield} onChangeText={inputField} value={wishInput}/>
        <TouchableOpacity>
            <Icon name='plus' size={20} color='green' onPress={() => {
                addItem(wishInput)
                setWishInput('')
                }}/> 
        </TouchableOpacity>
    </View>
  )
}

export default AddItems

const styles = StyleSheet.create({
    addcontainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingRight: 15,
        paddingLeft: 15  
    },

})