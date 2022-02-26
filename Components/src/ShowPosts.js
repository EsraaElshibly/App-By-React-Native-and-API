import { PostContext } from '../../context'
import { useContext, useEffect } from "react";
import { Box,FlatList, VStack,Heading } from "native-base";
import { getPosts } from "../../Actions/actions";
import Posts from "./Posts";
import { styles } from './style';


export const ShowPosts =(props) =>{
  const { state, dispatch } = useContext(PostContext);
  console.log(state);
  useEffect(() => {
    const resolveAction = async () => {
      dispatch(await getPosts());
    };
    resolveAction();
  }, []);

  return (
    <VStack>
      <Heading style={styles.headerPost}>
      Posts List
      </Heading>
      <FlatList
        data={state.list}
        renderItem={({ item }) => <Posts item={item} {...props} />}
        ItemSeparatorComponent={() => (
          <Box
            style={styles.box}
          ></Box>
        )}
      />
    </VStack>
  );
}

export default ShowPosts;