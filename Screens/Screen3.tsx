import { FlatList, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
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
  const [list, setlist] = useState()

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

  //Flatlist con todos los datos
  useEffect(() => {
    function leer() {
      const starCountRef = ref(db, 'productos/');
      onValue(starCountRef, (snapshot) => {
        const data = snapshot.val();
        
        let arregloTemp : any = Object.keys(data).map(id=>({
          id, ...data[id]
        }))
        setlist(arregloTemp)
      });

    }
    leer()
  }, [])

  type Producto ={
    id:String,
    monto:Number,
    categoria:String,
    desc:String
  }

  return (
    <View style={styles.contenedorAll}>
      <Text style={styles.h1}>Busqueda</Text>
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
      <View>
        <Text style={styles.h1}>FLATLIST</Text>
      <FlatList data={list} renderItem={({item}: {item:Producto})=><View><Text>{item.id}</Text><Text>{item.monto.toString()}</Text></View>}/>
      </View>
    </View>
  )
}
