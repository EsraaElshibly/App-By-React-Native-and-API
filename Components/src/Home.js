import { Image } from "react-native";
import { Text,Button,Box,NativeBaseProvider } from "native-base";
import { styles } from './style';

export const Home =(props) =>{
    console.log(props)
   return(
    <NativeBaseProvider>
         <Box style={styles.text}>
         <Text style={{fontSize:22}}>POST Application Says Hello..!!</Text>

             <Image source={require('../../assets/bright.png')}
              style={styles.image}
             />
           <Button onPress={() => props.navigation.navigate({name:'ShowPosts'})}
            style={styles.btn}> Start </Button>
         </Box>
      
    </NativeBaseProvider>
   )
}
  
export default Home;
