import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { BrowserRouter as Router, Route, Switch  } from 'react-router-dom';
import promise from 'redux-promise';

import App from './components/app';
import PostsIndex from './components/posts_index'
import PostsShow from './components/posts_show'
import PostsNew from './components/posts_new'
import reducers from './reducers';

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);


ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route exact path='/' component={PostsIndex} />
          <Route exact path='/posts/new' component={PostsNew} />
          <Route path='/posts/:id' component={PostsShow} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container'));


  //        
  //