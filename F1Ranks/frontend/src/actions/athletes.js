import axios from 'axios';
import {
    GET_ATHLETES,
    DELETE_ATHLETE,
    ADD_ATHLETE,
    GET_ERRORS,
} from "./types";
import {createMessage} from "./messages";
import {tokenConfig} from './auth'


export const getAthletes = () => (dispatch, getState) => {
    axios.get('/api/athlete/', tokenConfig(getState))
        .then(res => {
            dispatch({
                type: GET_ATHLETES,
                payload: res.data
            });
        }).catch(err => console.log(err));
};

export const deleteAthlete = (id) => (dispatch, getState) => {
    axios.delete(`/api/athlete/${id}/`, tokenConfig(getState))
        .then(res => {
            dispatch(createMessage({deleteAthlete: 'Athlete Deleted'}));

            dispatch({
                type: DELETE_ATHLETE,
                payload: id
            });
        }).catch(err => console.log(err));
};

export const addAthlete = (athlete) => (dispatch, getState) => {
    axios.post('/api/athlete/', athlete, tokenConfig(getState))
        .then(res => {
            dispatch({
               type: ADD_ATHLETE,
               payload: res.data
            });
        }).catch(err => console.log(err));
};