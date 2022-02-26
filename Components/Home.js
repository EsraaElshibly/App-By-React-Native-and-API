import { StyleSheet,Image } from "react-native";
import { Text,Button,Box,NativeBaseProvider } from "native-base";

export const Home =(props) =>{
    console.log(props)
   return(
    <NativeBaseProvider>
         <Box style={styles.text}>
         <Text style={{fontSize:22}}>Hello From Home Page</Text>

             <Image source={require('../assets/a0042858efa4790bfdb8bd1ede9cf9ee.jpg')}
              style={{width:420,height:550,marginTop:20}}
             />
           <Button onPress={() => props.navigation.navigate({name:'ShowComments'})}
            style={{marginTop:50,backgroundColor:"purple"}}>Let`s start </Button>
         </Box>
      
    </NativeBaseProvider>
   )
}
const styles = StyleSheet.create({
    text: {
     marginTop:30,
     height:700,
     alignItems:'center',
     fontSize:30
  
    }
   
  });

  
export default Home;
