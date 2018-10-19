import {CURRENT_THEME} from '../actions/index';

const theme = (state = null, action) => {
    console.log(action.payload);
    console.log(action.type);

    switch(action.type) {
        case CURRENT_THEME:
            return action.payload;
        default:
            return state;
    }
};

export default theme;