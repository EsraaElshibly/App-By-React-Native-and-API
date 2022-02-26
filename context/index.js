import { createContext, useReducer } from "react"
import { reducer } from "../Reducer/reducer";

export const CommentContext = createContext();
export const CommentsProvider =({ children })=> {

    const [state,dispatch] = useReducer(reducer, {
        list:[],
        details:{}
     }
    );
 
    return(
        <CommentContext.Provider value={{state,dispatch}}>
            {children}
        </CommentContext.Provider>
    );
};

export default CommentsProvider;