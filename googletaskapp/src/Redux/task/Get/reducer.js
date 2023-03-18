import { GET_TASK_ERROR, GET_TASK_LOADING, GET_TASK_SUCCESS } from "./action"

const initState = {
    loading: false,
    task: [],
    error: false,
}

export const taskReducer = (state = initState, action) => {

    switch (action.type) {

        case GET_TASK_LOADING:
            return {
                ...state,
                loading: true
            }

        case GET_TASK_SUCCESS:
            return {
                ...state,
                loading: false,
                task: action.payload
            }
        case GET_TASK_ERROR:
            return {
                ...state,
                loading: false,
                task: [],
                error: true
            }
        default:
            return state
    }
}