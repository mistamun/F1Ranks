import axios from 'axios';
import {
    GET_EMPLOYEES,
    DELETE_EMPLOYEE,
    ADD_EMPLOYEE,
    GET_ERRORS,
} from "./types";
import {createMessage} from "./messages";
import {tokenConfig} from './auth'


export const getEmployees = () => (dispatch, getState) => {
    axios.get('/api/employee/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_EMPLOYEES,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const deleteEmployee = (id) => (dispatch, getState) => {
    axios.delete(`/api/employee/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deleteEmployee: 'Employee Deleted'}));

            dispatch({
                type: DELETE_EMPLOYEE,
                payload: id
            });
        }).catch(err => console.log(err));
};

export const addEmployee = (employee) => (dispatch, getState) => {
    axios.post('/api/employee/', employee, tokenConfig(getState))
        .then(res => {
            dispatch({
               type: ADD_EMPLOYEE,
               payload: res.data
            });
        }).catch(err => console.log(err));
};