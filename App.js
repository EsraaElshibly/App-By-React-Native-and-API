import {NativeBaseProvider} from 'native-base';
import { StyleSheet} from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'; 
import { NavigationContainer } from '@react-navigation/native';
import Home from './Components/Home';
import CommentsProvider from './context';
import ShowComments from './Components/ShowCommt';
import Details from './Components/Details';

const Tap = createMaterialTopTabNavigator();
export default function App(){
  return (
    
  <CommentsProvider>
    <NativeBaseProvider>
     <NavigationContainer>
       <Tap.Navigator >
        <Tap.Screen name='Home' component={Home}/>
        <Tap.Screen name='ShowComments' component={ShowComments}/>
        <Tap.Screen name='details' component={Details}/>
       </Tap.Navigator>
     </NavigationContainer>
   </NativeBaseProvider>
  </CommentsProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
