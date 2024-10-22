import { combineReducers } from 'redux';
import listReducer from '../reducers/listReducer'; // Adjust the path if necessary
import authReducer from '../reducers/authReducer';

const rootReducer = combineReducers({
    lists: listReducer,
    auth: authReducer, // The key here is what will be used to access this reducer's state
});

export default rootReducer; // Make sure this is the default export
