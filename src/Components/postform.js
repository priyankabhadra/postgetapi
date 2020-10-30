import * as React from "react";
import { connect } from 'react-redux';
import { createPost } from '../actions/types';

const PostForm = (props) => {
    // const[title, setTitle] = useState('');
    // const[body, setBody] = useState('');

   function onSubmitValue(e) {
      e.preventDefault();
      const postData = {
          title: e.target.title.value,
          body: e.target.body.value
      };
       console.log(postData);
       props.createPost(postData);
    }

   return(
    <div>
    <h1>Add Post</h1>
    <form onSubmit={onSubmitValue}>
        <div>
            <label>Title:</label>
            <input type="text" name="title" />
        </div> 
        <br />
        <div>
            <label>Body:</label>
            <textarea name="body" />
        </div> 
        <br />
        <button name="submit" value="submit" >Submit</button>
    </form>
    </div>
   )
}

export default connect(null , {createPost})(PostForm);
