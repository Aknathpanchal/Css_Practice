import axios from "axios"
import { getTaskToken } from "../Get/action"

//login
export const POST_TASK_LOADING = "POST_TASK_LOADING"
export const POST_TASK_SUCCESS = "POST_TASK_SUCCESS"
export const POST_TASK_ERROR = "POST_TASK_ERROR"

//login

const postTaskloading = () => ({
    type: POST_TASK_LOADING
})
const postTaskSuccess = (payload) => ({
    type: POST_TASK_SUCCESS,
    payload
})
const postTaskError = (payload) => ({
    type: POST_TASK_ERROR,
    payload
})


export const postTaskAction = (payload) => (dispatch) => {
    let userid = localStorage.getItem("userid");
    dispatch(postTaskloading())
    axios({
        url: `${process.env.REACT_APP_API_URL}/user/${userid}/task`,
        method: "POST",
        data: payload,
        headers: { "Content-Type": "application/json" }


    }).then((res) => {
        dispatch(postTaskSuccess(res.data))
        dispatch(getTaskToken())
    }).catch((err) => dispatch(postTaskError(err)))
}