import axios from 'axios';
import {createMessage, returnErrors} from './messages';
import {tokenConfig} from './auth'

import {
    ADD_INPUT,
    GET_PROCESSED_INPUTS,
    DELETE_INPUT,
    GET_ERRORS,
    CREATE_MESSAGE
} from "./types";

export const getProcessedInputs = () => (dispatch, getState) => {
    axios.get('/api/input/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_PROCESSED_INPUTS,
                payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};

export const deleteInput = (id) => (dispatch, getState) => {
    axios.delete(`/api/input/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deleteInput: 'Input Deleted'}));

            dispatch({
                type: DELETE_INPUT,
                payload: id
            });
        }).catch(err => console.log(err));
};

export const addInput = (input) => (dispatch, getState) => {
    axios.post('/api/input/', input, tokenConfig(getState))
        .then(res => {
            dispatch({
               type: ADD_INPUT,
               payload: res.data
            });
        }).catch(err => dispatch(returnErrors(err.response.data, err.response.status)));
};
