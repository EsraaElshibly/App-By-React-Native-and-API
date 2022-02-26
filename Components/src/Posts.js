import { Image, Text } from "react-native";
import {Button,Box,NativeBaseProvider,AspectRatio,Center,Stack,HStack,Heading,} from "native-base";

export const Posts =({ item, navigation })=> {
  
  if (item.id) {
    return (
        
      <NativeBaseProvider>

        <Box alignItems="center">
          <Box
            maxW="80"
            rounded="lg"
            overflow="hidden"
            borderColor="coolGray.200"
            borderWidth="1"
            _dark={{
              borderColor: "coolGray.600",
              backgroundColor: "gray.700",
            }}
            _web={{
              shadow: 2,
              borderWidth: 0,
            }}
            _light={{
              backgroundColor: "gray.50",
            }}
          >
            <Box>
              <AspectRatio w="100%" ratio={16 / 9}>
                <Image
                  source={{
                    uri: 'https://images.unsplash.com/photo-1645103008066-7cabc7512f71?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
                  }}
                  alt="image"
                />
              </AspectRatio>
              <Center
                bg="#5784BA"
                
                _text={{
                  color: "warmGray.50",
                  fontWeight: "700",
                  fontSize: "xs",
                }}
                position="absolute"
                bottom="0"
                px="3"
                py="1.5"
              >
                POST PIC
              </Center>
            </Box>

            <Stack p="4" space={3}>
              <Stack space={2}>
                <Text size="md" ml="-1" >
                  <Heading fontSize="md">Title:</Heading> {item.title}
                </Text>
              </Stack>
              <Text >
                <Heading fontSize="md">Post: </Heading> {item.body}
              </Text>
              <HStack
                alignItems="center"
                space={4}
                justifyContent="space-between"
              >
                <HStack alignItems="center">
                 
                  <Button 
                    onPress={() => {
                        console.log("press");
                        navigation.navigate({
                          name: "details",
                          params: {
                            id: item.id,
                          },
                        });
                      }}
                      bg="#5784BA"
                     
                      _text={{
                        color: "warmGray.50",
                        fontWeight: "700",
                        
                      }}
                     
                  >
                   Show Details
                  </Button>
                </HStack>
              </HStack>
            </Stack>
          </Box>
        </Box>


      </NativeBaseProvider>
    )
  }
}

export default Posts;