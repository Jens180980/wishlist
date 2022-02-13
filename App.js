import React from "react";
import { View, Text, StyleSheet } from 'react-native'
import Header from './Components/Header'
import Main from './Components/Main'

const App = () => {

  return (
    <View style={styles.container}>
      <Header title='Wishlist'/>
      <Main />
    </View>
    
  )
}

export default App

const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
})