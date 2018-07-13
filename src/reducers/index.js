import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import movieReducer from './movie_reducer';
import userReducer from './user_reducer';

const rootReducer = combineReducers({
    movie: movieReducer,
    user: userReducer,
    form: formReducer
});

export default rootReducer;
