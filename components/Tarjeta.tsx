import { Button, Image, Modal, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { styles } from '../Theme/appTheme'
import { DataSnapshot } from 'firebase/database'

type TarjetaProps = { 
  datos: { 
    titulo: string, 
    plataforma: string[], 
    genero: string[], 
    desarrollador: string, 
    precio: number, 
    lanzamiento: string, 
    descripcion: string, 
    imagen: string 
  }
}

export default function Tarjeta({datos}:TarjetaProps) {
  const [visible, setVisible] = useState(false)

  return (
    <View style={styles.contenedorAll}> 
      <View> 
        <Image style={styles.img} source={{ uri: datos.imagen }} /> 
        <Text>{datos.titulo}</Text> 
        <Text>{datos.descripcion}</Text> 
      </View>
      <Modal visible={visible}>
        <View style={styles.modal}>
          <Text style={{...styles.txtNombre, color:'#000000'}}>{datos.titulo}</Text>
          <Image style={styles.img2} source={{uri: datos.imagen}}/>
          <Text>{datos.precio}</Text>
          <Text>{datos.descripcion}</Text>
          <Button title='CERRAR' onPress={()=>setVisible(false)}/>
        </View>
      </Modal>
    </View>
  )
}
