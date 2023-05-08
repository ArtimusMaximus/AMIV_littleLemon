import { useReducer } from "react";
import { ACTION_TYPES } from "./action_types";


export const INITIAL_STATE = {
    date: '',
    guestCount: '',
    occasion: '',
    comments: ''
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "SUCCESS":
            return console.log('clearForm')
        case "LOADING":
            return {}
        case "ERROR":
            return {
                ...state,
                proceed: 'cannot'
            }
        default:
            return state;
    }
}