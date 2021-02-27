import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';

export default combineReducers({
    errors: errors,
    messages: messages,
    auth: auth
});