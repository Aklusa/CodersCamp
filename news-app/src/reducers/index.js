import { combineReducers } from 'redux';
import newsReducer from './reducer_news';
import currentTheme from './reducer_theme';

const newsApp = combineReducers({
    news: newsReducer,
    theme: currentTheme,
  });
  
  export default newsApp;