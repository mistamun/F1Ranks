import { combineReducers } from 'redux';
import errors from './errors';
import messages from './messages';
import auth from './auth';
import employees from './employees';

export default combineReducers({
    employees: employees,
    errors: errors,
    messages: messages,
    auth: auth
});