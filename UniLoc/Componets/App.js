import { StyleSheet, Text, View} from 'react-native';
import { useState } from 'react';
import { EntradaDados } from './Entrada';
import {RenderDados }from './Render';
import axios from 'axios';

export default function Main() {

  const [resultado, addResultado]= useState([]);

  const dados = async (universidade, pais) => {
  
    const url = "http://universities.hipolabs.com/search?" + (universidade ?`&name=${universidade}` : '' ) + (pais ? `&country=${pais}` :'' ) 

    const resposta = await axios.get(url)

    if (resposta.data.length < 1){
        alert("Universidade não reconhecida ou inexistente!");
    }else{
      addResultado(resposta.data)
    }
  }

  return (
    <View style={styles.container}>
      <EntradaDados callBackPesquisar={dados}/>
      <RenderDados resultado={resultado}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: '10%',
    backgroundColor: '#ffff',

  },
  texto: {
    backgroundColor: 'yellow',
    fontSize: 32
  },
  lista:{
    padding:10,
     backgroundColor:"red",
    textAlign:"center", 
    margin:10,
    borderRadius:6
  }
});