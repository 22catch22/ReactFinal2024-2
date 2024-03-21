import React, { useEffect, useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button,StyleSheet, View, Image, Text,ScrollView, FlatList, Touchable, TouchableOpacity, Pressable } from 'react-native';
import GetConsoles from '../components/GetCons'
import AddConsole from '../components/addconsole';
import games from "./games";

export default function Consoles({navigation}){

  const [items, setItems] = useState([]);
 
return(
 
<View style = {style.container}>

<GetConsoles/>
 
<Button style = {style.buttoncontainer}
title={"Add new Console"} 
theme={"primary"}
onPress = {() =>
navigation.navigate('addconsole')}/> 

<Button style = {style.buttoncontainer}
title={"View Games"} 
theme={"primary"} 
onPress = {() => 
navigation.navigate('games')}/> 

</View>
 
);
};
const style = StyleSheet.create({

container:{
flex:1,
height:300,
backgroundColor:"grey",
alignItems:"center",
  
},
form:{
flex:3,
height:200,
backgroundColor:"white",
padding:30,
alignItems:"center",
width:300,
},
 
input:{ 
height: 30,
width: 300,
borderColor:"black",
borderWidth:2,
marginBottom:10,
alignItems:"center",
},

errorText:{
color:"red",
marginBottom:10,
},
  
  
});
  

