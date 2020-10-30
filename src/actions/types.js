import post from "../Components/post";

export const FETCH_POST = "FETCH_POST";
export const NEW_POST = "NEW_POST";
// import { dispatch } from 'react-redux';
// import Posts from '../Components/post';

export const fetchPost = () => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts/?_limit=5')
    .then(res => res.json())
    .then(Posts => dispatch(
        { 
          type: FETCH_POST,
          payload: Posts
        }));
    }


export const createPost = ( postData ) => dispatch => {
    fetch('https://jsonplaceholder.typicode.com/posts',{
        method: "post",
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(postData)
    })
    .then(res => res.json())
    .then(post => dispatch(
        {
            type: NEW_POST,
            payload: post
        }));
 }


