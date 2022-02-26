import { createContext, useReducer } from "react"
import { reducer } from "../Reducer/reducer";

export const PostContext = createContext();
export const PostsProvider =({ children })=> {

    const [state,dispatch] = useReducer(reducer, {
        list:[],
        details:{}
     }
    );
 
    return(
        <PostContext.Provider value={{state,dispatch}}>
            {children}
        </PostContext.Provider>
    );
};

export default PostsProvider;