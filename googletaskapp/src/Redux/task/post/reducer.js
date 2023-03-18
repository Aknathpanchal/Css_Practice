import { POST_TASK_ERROR, POST_TASK_LOADING, POST_TASK_SUCCESS } from "./action"

const initState = {
    loading: false,
    res: null,
    error: null,
}

export const postTaskReducer = (state = initState, action) => {

    switch (action.type) {

        case POST_TASK_LOADING:
            return {
                ...state,
                loading: true
            }

        case POST_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                res: action.payload
            }
        case POST_TASK_ERROR:
            return {
                ...state,
                loading: false,
                res: null,
                error: action.payload
            }
        default:
            return state
    }
}