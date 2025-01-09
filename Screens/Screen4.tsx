import { View, Text } from 'react-native'
import React, { useEffect, useState } from 'react'
import { FlatList } from 'react-native-gesture-handler';
import { styles } from '../Theme/appTheme';
import Tarjeta from '../components/Tarjeta';

export default function Screen4() {

  const [datos, setDatos] = useState()

  useEffect(() => {
    async function leer(){
      const resp = await fetch('https://jritsqmet.github.io/web-api/video_juegos.json');
      const json = await resp.json();
      setDatos(json.videojuegos);
    }
    leer()
  }, [])

  return (
    <View style={styles.contenedorAll}>
      <Text>Api Lista</Text>
      <FlatList data={datos} renderItem={({item})=><Tarjeta datos={item}/>}/>
    </View>
  )
}