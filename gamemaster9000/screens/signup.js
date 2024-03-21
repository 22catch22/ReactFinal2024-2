import { StatusBar } from 'expo-status-bar';
 import { useState } from 'react';
 import {FC, ReactElement} from 'react';
 import { NavigationContainer } from '@react-navigation/native';
 import { StyleSheet, Text, View, Alert,Image, TextInput, Button, Keyboard, KeyboardAvoidingView,} from 'react-native';
 import Parse from "parse/react-native";
import Loginscreen from './loginscreen';


 export default function Signup({navigation})
 {

const [newname, setnewName] = useState('');
const [newpassword, setnewpassword] = useState('');
 
//this was supposed to sign the user in. Sadly, I wasn't able to get it working in time.
const registerthatmutha = async function(){
const usename = newname; 
const pass = newpassword


return await Parse.User.signUp(usename, pass)
.then((newUser) => {Alert.alert(`Welcome, ${usename.get('usename')}`
);
navigation.navigate('loginscreen');
return true;


})
.catch((error) => {Alert.alert('Error', error.message);
return false;
});
};
 
return (
  <View style = {style.container}>
  
  <View style = {style.form}>
 
  <Text style = {{fontSize:30}}>Now, would you kindly enter your personal information which I totally won't steal</Text>
  
  <Text>Please enter UserName</Text>
   
  <TextInput style = {style.input}
  placeholder='Entah yah name here, bub'
   value = {newname} onChangeText = 
   {(text) => setnewName(text)}/>
   
  <Text>Please enter Password</Text>
    
  <TextInput style = {style.input} placeholder ='Oi! Enter your password, ya dumb git!' 
  
  value = {newpassword} onChangeText = {(text) => 
  setnewpassword(text)}/>
   
  <Button title = "Sign up the epic motherf-" 
  
  onPress={() =>navigation.navigate('login')}></Button>

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
 flex:1,
height:300,
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




 
 