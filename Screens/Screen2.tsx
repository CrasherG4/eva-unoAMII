import { Alert, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { styles } from '../Theme/appTheme';

//Firebase
import { ref, set } from "firebase/database";
import { db } from '../config/Config';


export default function Screen2() {
  //datos
  const [id, setid] = useState('')
  const [monto, setmonto] = useState(0)
  const [categoria, setcategoria] = useState('')
  const [desc, setdesc] = useState('')


  //Guardar en la base de datos
  function guardar(){
    if(id === ''){
      Alert.alert('Error', 'El id no puede estar vacío')
      return;
    }
    if(monto === 0){
      Alert.alert('Error', 'El monto no puede ser 0')
      return;
    }
    if(id === ''){
      Alert.alert('Error', 'La categoría no puede estar vacía')
      return;
    }
    if(id === ''){
      Alert.alert('Error', 'La descripción no puede estar vacía')
      return;
    }
    
    //Si todo va bien guardamos...
    set(ref(db,'productos/'+id),{
      monto:monto,
      categoria:categoria,
      desc:desc
    })
    Alert.alert('Guardado con éxito', 'Id: '+id+'\nMonto: '+monto+'\nCategoría: '+categoria+'\nDescripción: '+desc)
    limpiar()
  }

  function limpiar(){
    setid('')
    setmonto(0)
    setcategoria('')
    setdesc('')
  }

  useEffect(() => {
    if (Number.isNaN(monto)) {
      setmonto(0)
    }
  }, [])
  

  return (
    <View style={styles.contenedorAll}>
      <Text>Formulario</Text>
      <TextInput
        placeholder='Ingresar un ID'
        style={styles.input}
        onChangeText={(texto) => setid(texto)}
        placeholderTextColor={'#f27e95'}
        value={id}
      />
      <TextInput
        placeholder='Ingresar un monto'
        style={styles.input}
        onChangeText={(texto) => setmonto(+texto)}
        placeholderTextColor={'#f27e95'}
        value={monto.toString()}
      />
      <TextInput
        placeholder='Ingresar una categoría'
        style={styles.input}
        onChangeText={(texto) => setcategoria(texto)}
        placeholderTextColor={'#f27e95'}
        value={categoria}
      />
      <TextInput
        placeholder='Ingresar una descripción'
        style={styles.input}
        onChangeText={(texto) => setdesc(texto)}
        placeholderTextColor={'#f27e95'}
        value={desc}
      />
      <TouchableOpacity onPress={guardar}>
        <Text>Guardar</Text>
      </TouchableOpacity>
    </View>
  )
}
