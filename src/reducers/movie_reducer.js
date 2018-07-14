import types from '../actions/types';

const DEFAULT_STATE = {
    quote: ''
};

export default (state = DEFAULT_STATE, action) => {
    switch(action.type){
        case types.GET_MOVIE_QUOTE:
        return { quote: action.quote };
        default:
            return state;
    }
}