import axios from "axios";

const baseURL = 'https://jsonplaceholder.typicode.com/posts';

export const  getPosts = async ()=>{
    let posts = []
    try {
        const response = await axios.get(baseURL)
        posts = response.data;
    } catch (error) {
        console.log(error)
    }
    return {
        type:'POSTS_LIST',
        payload:posts 
    }

}

export const getPostDetails = async (id)=>{
    let post = {}
    try {
        const response = await axios.get(`${baseURL}/${id}`)
        post = response.data;
    } catch (error) {
        console.log(error)
    }
    return {
        type:'POSTS_DETAILS',
        payload:post 
    }
}

export const clearDetails = ()=>{
    return {
        type:'CLEAR_DETAILS'
    }
}
