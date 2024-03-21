import React, {useContext, useState, useCallback, useEffect} from "react";
 import { StatusBar } from 'expo-status-bar';
 import {  StyleSheet, Text, View, Image, TextInput, Button, Keyboard, KeyboardAvoidingView, Touchable, TouchableOpacity, Pressable } from 'react-native';
import Consoles from "../screens/consoles";

export default function AddConsole({navigation}){ 
//lets set up those consts
const [ConsoleName, setConsoleName] = useState('');

const [Developer, setDeveloper] = useState("");

const [GamesOwned, setGamesOwned] = useState("");

const [Thumbnail, setThumbnail] = useState("");

const [errors, setErrors] = useState({});

const [isFormValid, setIsFormValid] = useState(false);
 
 
//this will prevent the user from submitting until all of the required fields are filled.
const valthatform = () =>{

let errors = {};
if (!ConsoleName) errors.ConsoleName= " Would you please Enter a Console Name?";
if (!Developer) errors.Developer = "Please Enter the Developers name";
if (!GamesOwned) errors.GamesOwned = "Enter the number of games you own. Now.";

setErrors(errors);

setIsFormValid(Object.keys(errors).length ===0);

}
  

//const postnewconsole = async() => {
   //This was supposed to post new data. Instead, all it does is crash the screen. 
    
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
 
//const Subbymit = () => {

//if (isFormValid){
//postnewconsole();
//navigation.navigate('Consoles');
//}
//}
useEffect(() => {
console.log
 
valthatform();
},[ConsoleName,Developer,GamesOwned]);
  


return (
<View style = {style.container}>

<View style = {style.form}>

<Text style = {{fontSize:30}}>Enter a console</Text>

<Text>Console Name</Text>

<TextInput 
value = {ConsoleName} 
onChangeText = {newconsole =>setConsoleName(newconsole)}
/>
{errors.ConsoleName ? (<Text style = {style.errorText}></Text>) : null}  

<Text>Console developer</Text>

<TextInput
value = {Developer} 
onChangeText = {newdeveloper => setDeveloper(newdeveloper)}
/>
{errors.Developer ? (<Text style = {style.errorText}></Text>) : null}  

<Text>Games Owned</Text>

<TextInput
title = "How Many Games do you own for this thing?" 
value = {GamesOwned} 
onChangeText={(newgamesowned) => setGamesOwned(newgamesowned)}/>
{errors.GamesOwned ? (<Text style = {style.errorText}></Text>) : null}  
   
<Text>Optional Thumbnail </Text>

<TextInput 
value ={Thumbnail} 
onChangeText={newthumb =>setThumbnail(newthumb)}/>
{errors.Thumbnail ? (<Text style = {style.errorText}></Text>) : null}  
  
<Button title = "Add Console" 
disabled ={!isFormValid} 
onPress={() => 
  navigation.navigate('games')}></Button>
</View>
</View>
)
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
  borderColor:"black",
  borderWidth:2,
  marginBottom:10,
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
  