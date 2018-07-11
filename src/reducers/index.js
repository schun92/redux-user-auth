import { combineReducers } from 'redux';
import movieReducer from './movie_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer
});

export default rootReducer;
