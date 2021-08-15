import {combineReducers} from 'redux';
import UserReducer from './UserReducer';
import InterventionsReducer from './InterventionsReducer';

export default combineReducers({
    UserReducer, InterventionsReducer
});