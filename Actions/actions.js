import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/comments';

export const  getComments = async ()=>{
    let comments = []
    try {
        const response = await axios.get(baseURL)
        comments = response.data;
    } catch (error) {
        console.log(error)
    }
    return {
        type:'COMMENTS_LIST',
        payload:comments 
    }

}

export const getCommtDetails = async (id)=>{
    let comment = {}
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        comment = response.data;
    } catch (error) {
        console.log(error)
    }
    return {
        type:'COMMENTS_DETAILS',
        payload:comment 
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}
