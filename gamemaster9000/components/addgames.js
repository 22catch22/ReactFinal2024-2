import React, {useEffect, useState} from "react"
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, Button, Keyboard, KeyboardAvoidingView } from 'react-native';
import {createNativeStackNavigator} from "@react-navigation/native-stack";
import games from "../screens/games";
 

export default function AddGames({navigation}){ 
  const [Title, setTitle] = useState("");
  
   const [publisher, setspublisher] = useState("");
   const [developer, setdeveloper] = useState("");
   const[TimesBeaten, setTimesBeaten] = useState(0);
   const [consoleName, setconsoleName] = useState("");
  const [thumbnail, setthumbnail] = useState("");  
  const [screenshots, setscreenshots] = useState("");
  
 //this prevents the user from submitting the form until it's filled out.
     const valthatform = () =>{
        let errors = {};
        if (!Title) errors.ConsoleName= " Would you please Enter a Console Name?";
        if (!developer) errors.Developer = "Please Enter the Developers name";
        if (!TimesBeaten) errors.TimesBeaten = "Enter the number of times you've beaten this game. Now";
        if (!thumbnail) errors.Thumbnail = "ENTER. THUMBNAIL. NOW!!!"
        
        return Object.keys(errors).length === 0;
     };
 
 
const reqoptions = {
method:'POST',
headers:{'Content-Type':'application/json'},
body: JSON.stringify({consoleName:consoleName})
};


//This was supposed to post new data. Instead, all it does is crash the screen. 

  const postnewgame = () => {
    //fetch('http://localhost:8000/Consoles.json', {
    //method:'POST',
    //headers:{
    //Accept: 'application/json',
    //'Content-Type':'application/json',
    //},
    //body:JSON.stringify({
    
    //'ConsoleName':consoleName,
    //'Developer':developer,
    //'GamesOwned':GamesOwned,
    //'Thumbnail':thumbnail,
    
    //}),
 
  
  }
  
return (
<View style = {style.container}>

<View style = {style.form}>

<Text style = {{fontSize:30}}>Enter a Game</Text>

<Text>Title</Text>

<TextInput style = {style.input}
 placeholder='Enter the Title, filthy human' 
value = {Title} 
onChangeText = {(text)=> setTitle(text)}/>

<Text>Developer</Text>

<TextInput style = {style.input} 
placeholder ='Who developed this thing?' 
value = {developer} 
onChangeText = {(text)=> setdeveloper(text)}/>

<Text> Publisher</Text>

<TextInput style = {style.input} 
placeholder='Who published this thing?'
value = {publisher} 
onChangeText = {(text)=> setspublisher(text)}/>

<Text>Times Beaten</Text>

<TextInput style = {style.input} 
placeholder="How many times have you beaten this thing?" 
value={TimesBeaten} 
onChangeText={(text)=> setTimesBeaten(text)}/>

<Text>Console Name</Text>

<TextInput style = {style.input} 
placeholder="What console did you play this on?" 
value={consoleName}
 onChangeText={(text)=> setconsoleName(text)}/>

<Text>Thumbnail</Text>

<TextInput style = {style.input} 
placeholder="Please add image URL here" 
value = {thumbnail} 
onChangeText = {(text) => setthumbnail(text)}/>

<Button title = "Add game" 
disabled ={!isFormValid} 
onPress={() => 
  navigation.navigate('games')}></Button>
</View>
</View>
);

}
  

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
  