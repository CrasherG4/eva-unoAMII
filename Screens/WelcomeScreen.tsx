import { FlexAlignType, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { styles } from '../Theme/appTheme'

export default function WelcomeScreen({navigation}:any) {
  return (
    <ImageBackground source={require('../assets/img/BGRegister.png')} style={styles.contenedorAll}>
      <Text>¡Bienvenido!</Text>
      <TouchableOpacity onPress={()=>navigation.navigate('BottomNav')}>
        <Text>Iniciar</Text>
      </TouchableOpacity>
    </ImageBackground>
  )
}

