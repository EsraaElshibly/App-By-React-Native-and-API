export const reducer =(state={},action)=> {

    switch(action.type){
        case 'POSTS_LIST':{
            return {...state,list:action.payload}
        }

        case'POSTS_DETAILS':{
            return{...state, details:action.payload}
        }

        case'CLEAR_DETAILS':{
            return{...state, details:{}}
        }

        default :{
            return state;
        }
    }}