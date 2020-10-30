import * as React from "react";
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { fetchPost } from '../actions/types';
//import {}

const Posts = (props) => {

    useEffect (() => {
     props.fetchPost()
    },[] )

    const postItems =   props.posts.map((val) =>       
        <div key={val?.id}>
          <h3>{val?.title}</h3>
           <p>{val?.body}</p>
        </div>
      
        )
   return(

    <div>
    <h1>Post</h1>
    {postItems}
    </div>
   )
}

const mapStateToProps = (state) =>( {
  posts: state.posts.Items
});

export default connect(mapStateToProps, { fetchPost })(Posts);
