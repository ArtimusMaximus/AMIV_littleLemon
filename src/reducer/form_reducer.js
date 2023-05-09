


export const INITIAL_STATE = {
    name: '',
    date: '',
    time: '',
    guestCount: 2,
    occasion: '',
    comments: '',
    proceed: false
}

export const formReducer = (state, action) => {
    switch (action.type) {
        case "INPUT":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        case "SUCCESS":
            return {
                proceed: action.payload
            }
        case "LOADING":
            return {}
        case "SUBMITTABLE":
            return {
                ...state,
                proceed: action.payload
            }
        case "DATE":
            return {
                ...state,
                [action.payload.name]: action.payload.value
            }
        default:
            return state;
    }
}