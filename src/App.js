import React from 'react';
import './App.css';
import Posts from './Components/post';
import PostForm from './Components/postform';
import { Provider } from 'react-redux';
import store  from './Components/store';

//const store = createStore([], {}, applyMiddleware());

function App() {
  return (
     <Provider store={store}>
       <div>
        <PostForm />
        <hr />
        <Posts />
       </div>
    </Provider>
  );
}

export default App;
