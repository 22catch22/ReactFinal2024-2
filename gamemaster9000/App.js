import { CurrentRenderContext, NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Consoles from "./screens/consoles.js";
import Loginscreen from "./screens/loginscreen.js";
import addconsole from "./components/addconsole.js"
import games from "./screens/games.js";
import Signup from "./screens/signup.js";
import addgames from './components/addgames.js'
import axios from 'axios';

 export default function App() {
  const stacked = createNativeStackNavigator();
 
  return (
    
    <NavigationContainer>
     
     <stacked.Navigator initialRouteName="login"> 
     <stacked.Screen name= "login" component = {Loginscreen}/>
     <stacked.Screen name= "Signup" component={Signup}/>
     <stacked.Screen name = "Consoles" component = {Consoles}/>
     <stacked.Screen name = "addconsole" component={addconsole}/>
     <stacked.Screen name = "games" component={games}/>
     <stacked.Screen name = "addgames" component={addgames}/>
     </stacked.Navigator>
     </NavigationContainer>

     );
    
    }
  
  
  
 