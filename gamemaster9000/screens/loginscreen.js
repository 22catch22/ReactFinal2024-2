import { StatusBar } from 'expo-status-bar';
 import  { NavigationContainer } from '@react-navigation/native';
import { useState, useContext } from 'react';
import Signup from './signup';
 import Consoles from './consoles';
import axios from 'axios'; 

import { StyleSheet, Text, View, Image, TextInput, Button, Keyboard, KeyboardAvoidingView, Alert } from 'react-native';

export default function Loginscreen({navigation}){

  
  const [userName, setUsername] = useState('');
  
  const [password, setPassword] = useState('');
  
  const [errors, setErrors] = useState({});


const valliform = () =>{
// in the likely event someone screws up and doesn't fill out the input forms
let errors = {};
if (!userName) errors.userName = "Hey! Write down 'ya username, ya stupid schmuck!";
if (!password) errors.password = "OI! PUT DOWN YOR FOOKIN PASSWORD!";

setErrors(errors);

return Object.keys(errors).length === 0;

};

//right now, all this does is send a message to the console and take you to the Consoles page. 
//If I'd had time I would have made it do something fancier
const handysub = () =>{

if (valliform()){
console.log ("Submitted...yaay.", userName, password)

setUsername("")

setPassword("");

setErrors({});

navigation.navigate(Consoles);
}

};

 
return (

<View style = {style.container}>

<View style = {style.form}>

<Image src={'assets/gamemaster9000.png'}></Image>

<Text style = {{fontSize:30}}>Welcome to the GameMaster 9000!</Text>

<Text>Please enter UserName</Text>

<TextInput style = {style.input}
placeholder='Entah yah name here, bub' 
value = {userName} 
onChangeText = {setUsername}/>
{errors.userName ? 

(<Text style = {style.errorText}>
{errors.userName}</Text>) : null}

<Text>Please enter Password</Text> 

<TextInput style = {style.input} 
placeholder ='Oi! Enter your password, ya dumb git!' 
placeholderTextColor={'light grey'}
value = {password} 
onChangeText = {setPassword}/>
{errors.password ? 

(<Text style = {style.errorText}>
{errors.password}</Text>) : null}

<Button title = "Log Me In, Daddy"  onPress = {handysub}/>

<Text>Don't have an account? Sign up for one right now! Space King demands it!</Text>

<Button title = "Sign me up, before you go-go" onPress={() =>navigation.navigate(Signup)}></Button>

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
