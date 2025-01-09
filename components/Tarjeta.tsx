import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Theme/appTheme'

export default function Tarjeta(props:any) {
  const [visible, setVisible] = useState(false)
  return (
    <View style={styles.contenedorAll}>
      <View>
        <Image style={styles.img} source={{uri : props.datos.videojuegos.imagen}}/>
        <Text>{props.datos.videojuegos.titulo}</Text>
        <Text>{props.datos.videojuegos.descripcion}</Text>
      </View>
    </View>
  )
}
