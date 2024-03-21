 

import React, { useEffect, useState } from "react";
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, Button,StyleSheet, View, Image, Text,ScrollView, FlatList, Touchable, TouchableOpacity, Pressable } from 'react-native';
import { Card, Divider } from "react-native-paper";
import { SafeAreaView } from "react-native-safe-area-context";
import Consoles from '../Data/Consoles.json';

export default function GetConsoles(){
 
return (
  
<View>

{Consoles.map(console =>{

return (

<Card style = {style.cardstyle}key={console.consoleName}>

<Image source = {console.thumbnail} height={50} width={50}/>

<Text style = {style.text}>{console.consoleName}</Text> 

<Text style = {style.text}>{console.Developer}</Text>

<Text style = {style.text}>{console.GamesOwned} games owned</Text> 

</Card>
)
})
}
</View>
);
}

const style = StyleSheet.create({

container:{
flex:1,
height:800,
backgroundColor:"lightblue",
alignItems:"center",
},
  
text:{
fontSize:20,
},
 
titletext:
{fontSize:40,
},


cardstyle:{
marginTop:30,
flex:2,
height:600,
width: 400,
alignItems:"center",
textAlign: "center",
borderColor:"black",
borderWidth:4,
padding: 15,
},
  
buttoncontainer:{
flex:3,
alignItems:"center",
margin:"auto",


},
  
  errorView:{
    color:"red",
  marginBottom:10,
  },    
})







