import {GET_ARTICLES} from '../actions/index';

const news = (state = [], action) => {
    switch(action.type) {
        case GET_ARTICLES:
            return action.payload;
        default:
            return state;
    }
};

export default news;