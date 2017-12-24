import { combineReducers } from 'redux';
import { reducer as FormReducer } from 'redux-form';

import PostsReducer from './reducer_posts';

const reducers = {
  posts: PostsReducer,
  form: FormReducer
};

const reducer = combineReducers(reducers);

export default reducer;
  