import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.title}>My Todo List</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    height: 80,
    paddingTop: 38,
    backgroundColor: 'coral',
  },
  title: {
    textAlign: 'center',
    fontFamily: 'Roboto',
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
})

export default Header
