


export const INITIAL_STATE = {
    name: '',
    date: '',
    time: '',
    guestCount: '',
    occasion: '',
    comments: '',
    proceed: false,
    loading: false
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
                ...INITIAL_STATE
            }
        case "LOADING":
            return {
                ...state,
                loading: action.payload
            }
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