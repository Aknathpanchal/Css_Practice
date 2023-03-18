import axios from "axios"

//login
export const GET_TASK_LOADING = "GET_TASK_LOADING"
export const GET_TASK_SUCCESS = "GET_TASK_SUCCESS"
export const GET_TASK_ERROR = "GET_TASK_ERROR"

//login

export const getTaskloading = () => ({
    type: GET_TASK_LOADING
})
export const getTaskSuccess = (payload) => ({
    type: GET_TASK_SUCCESS,
    payload
})
export const getTaskError = () => ({
    type: GET_TASK_ERROR
})


export const getTaskToken = () => (dispatch) => {
    let userid = localStorage.getItem("userid");
    dispatch(getTaskloading())
    axios({
        method: "GET",
        url: `${process.env.REACT_APP_API_URL}/user/${userid}/task`
    })
        .then((res) => {
            dispatch(getTaskSuccess(res.data))
        })
        .catch((err) => dispatch(getTaskError()))
}