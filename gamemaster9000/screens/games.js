import React, { useEffect, useState } from "react"
import { StatusBar } from 'expo-status-bar';
import { ActivityIndicator, StyleSheet, View, Button, Image, Text,ScrollView, FlatList, TouchableOpacity } from 'react-native';
import { NavigationContainer } from "@react-navigation/native";
 import Getgames from "../components/Getgames"; 
import addgames from "../components/addgames"; 

export default function Games (navigation){
  const [defaultRating, setdefaultRating] = useState(2)
  const [maxRating, setmaxRating] = useState([1,2,3,4,5])
    
  const filledStar = './assets/star_filled.png'
  const emptyStar = './assets/star_corner.png'
  
  const CustomBar = () =>{
  
return (
  
  <View style = {StyleSheet.customRatingBar}> 
  
  {
  
  maxRating.map((item,key) => {
  
    return(
  
  <TouchableOpacity
  activeOpacity = {0.7}
  key = {this.item}
  onPress={() => setdefaultRating(item)}
  >
  
  <Image 
  style = {style.starImStyle}
  source = 
  {item <= defaultRating
  ?{uri: filledStar}
  :{uri: emptyStar}
  }
  />
  </TouchableOpacity>
  
  )
  })
  
  }
  
  </View>
)}
return(
 
<View style = {style.container}>
<ScrollView>
<Getgames/>
<CustomBar/>
</ScrollView>
<Button style = {style.buttoncontainer}
title={"Add new game"} 
theme={"primary"}
onPress = {() =>
navigation.navigate('addgames')}/> 
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
    
  
  