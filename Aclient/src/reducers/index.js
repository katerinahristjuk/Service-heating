import {combineReducers} from 'redux';
// import CakeReducer from './CakeReducer';
// import CommentsReducer from './CommentsReducer';
import UserReducer from './UserReducer';
import InterventionsReducer from './InterventionsReducer';

export default combineReducers({
    // CakeReducer,CommentsReducer
    UserReducer, InterventionsReducer
})