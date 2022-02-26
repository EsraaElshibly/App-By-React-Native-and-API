import {NativeBaseProvider} from 'native-base';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/src/Home';
import CommentsProvider from './context';
import ShowPosts from './Components/src/ShowPosts';
import Details from './Components/src/Details';

const Tap = createMaterialTopTabNavigator();
export default function App(){
  return (
    
  <CommentsProvider>
    <NativeBaseProvider>
     <NavigationContainer>
       <Tap.Navigator>
        <Tap.Screen name='Home' component={Home}/>
        <Tap.Screen name='ShowPosts' component={ShowPosts}/>
        <Tap.Screen name='details' component={Details}/>
       </Tap.Navigator>
     </NavigationContainer>
   </NativeBaseProvider>
  </CommentsProvider>
  );
}
