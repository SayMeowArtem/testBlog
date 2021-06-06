import {
  Route,
} from "react-router-dom";
import HeaderComponent from './Components/Header';
import MainPage from './pages/MainPage';
import AddPostPage from './pages/AddPostPage';
import PostPage from './pages/PostPage';
import React, { useEffect } from "react";
import axios from "axios";
import { isPostLoadedActionCreator, LoadPostsActionCreator} from "./actions/index";
import {IPost} from './Components/Post'

import './App.css'

export interface IState {
  posts: IPost[],
  postsLoaded: boolean,
  page: number,
  postPerPage: number
}

const initialState: IState = {
  posts: [],
  postsLoaded: false,
  page: 0,
  postPerPage: 6
}


function reducer(state : IState, action) {
  switch (action.type) {
    case 'LOAD_POST': return { ...state, posts: action.payload};
    case 'POST_LOADED': return { ...state, postsLoaded: true};
    case 'UPDATE_ACTIVE_PAGE': return {...state, page: action.payload};
    case 'ADD_POST': return {...state, posts: [action.payload, ...state.posts]}
    default: return state;
  }
}

const  App: React.FC = () => {

  const [state, dispatch] = React.useReducer(reducer, initialState);
  
  useEffect(() => {
    axios.get('https://newsapi.org/v2/everything?q=Apple&from=2021-06-05&sortBy=popularity&apiKey=ffc8f62fc1574ddcae44a5b7394821bc').then(
        (res) => {
            dispatch(LoadPostsActionCreator(res.data.articles))
            dispatch(isPostLoadedActionCreator())
        }
      )
  }, [])


  return (
    <div className='App'>
      <HeaderComponent />
        <div className='container'>
          <Route path='/' exact>
            <MainPage dispatch={dispatch} state={state}/>
          </Route>
          <Route path='/addpost'>
            <AddPostPage dispatch={dispatch} state={state}/>
          </Route>
          <Route path='/post' exact component={PostPage}/>
        </div>
    </div>
   
  );
}




export default App;
