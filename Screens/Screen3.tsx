import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Theme/appTheme'

//Firebase
import { db } from '../config/Config'
import { getDatabase, ref, onValue } from "firebase/database";


type Producto = {
  id: string,
  monto: number,
  categoria: string,
  desc: string
}

export default function Screen3() {

  const [datos, setdatos] = useState<Producto | null>(null)
  const [id, setid] = useState('')

  const [categoria, setcategoria] = useState('')
  const [monto, setmonto] = useState('')
  const [desc, setdesc] = useState('')

  function leer() {
    const starCountRef = ref(db, 'productos/' + id);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      console.log(data)
      setcategoria(data.categoria)
      setmonto(data.monto)
      setdesc(data.desc)
    });
  }

  return (
    <View style={styles.contenedorAll}>
      <Text>Busqueda</Text>
      <View>
        <TextInput
          placeholder='Ingresar un ID'
          style={styles.input}
          onChangeText={(texto) => setid(texto)}
          placeholderTextColor={'#f27e95'}
        />
        <TouchableOpacity onPress={() => leer()}>
          <Text>Buscar</Text>
        </TouchableOpacity>
      </View>
      <View>
        <View>
          <Text>La categoría es: {categoria}</Text>
          <Text>El monto es: {monto}</Text>
        </View>
        <Text>Descripción</Text>
        <Text>{desc}</Text>
      </View>
    </View>
  )
}
