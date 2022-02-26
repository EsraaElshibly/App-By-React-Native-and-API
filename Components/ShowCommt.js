import { CommentContext } from '../context'
import { useContext, useEffect } from "react";
import { Box,FlatList, VStack,Heading } from "native-base";
import { getComments } from "../Actions/actions";
import Comments from "./Comments";


export const ShowComments =(props) =>{
  const { state, dispatch } = useContext(CommentContext);
  console.log(state);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getComments());
    };
    resolveAction();
  }, []);

  return (
    <VStack>
      <Heading fontSize="xl" p="4" pb="3">
      Comments
      </Heading>
      <FlatList
        data={state.list}
        renderItem={({ item }) => <Comments item={item} {...props} />}
        ItemSeparatorComponent={() => (
          <Box
            style={{
              margin: 2,
             
            }}
          ></Box>
        )}
      />
    </VStack>
  );
}

export default ShowComments;