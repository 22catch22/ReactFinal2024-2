

import React, { useEffect, useState } from "react";
import { ActivityIndicator, Button,StyleSheet, View, Image, Text,ScrollView, FlatList, Touchable, TouchableOpacity, Pressable } from 'react-native';
import { Card, Divider } from "react-native-paper";
import Games from '../Data/Games.json'
 


export default function Getgames(){
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
  key = {item}
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
 //this grabs the data from the JSOn file and renders it in a list
return(

<View>

{Games.map(Game => {

return (


<Card style = {style.cardstyle} key = {Game.Title}>

<Image source={Game.GameThumbnail} height={40} width ={40}/>

<Text style = {style.text}>{Game.Title}</Text>

<Text style = {style.text}>{Game.Developer}</Text>

<Text style = {style.text}>{Game.Publisher}</Text>

<Text style = {style.text}>{Game.ConsoleName}</Text>

<Text style = {style.text}>{Game.TimesBeaten}</Text>

<Text>Rate Me, my Friend!</Text>

<CustomBar/>

</Card>
)
})}
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

customRatingBar:
{
 justifyContent:'center',
 flexDirection: 'column',
marginTop:30
},

starImStyle:
{
width:40,
height:40,
resizeMode:'cover'

}


})







