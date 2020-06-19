import React, {Component} from 'react';
import {Provider} from 'react-redux';
import './App.css';

import Posts from './components/Posts'
import PostForm from './components/PostForm';
import store from './store'

class App extends Component{
  render(){
  return (
    <Provider store = {store}>
    <div className="App">
      
      <PostForm />
      <Posts />
    </div>
    </Provider>
  );
}
}
export default App;
