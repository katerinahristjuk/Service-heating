import { FETCH_COMMENTS_FAIL, FETCH_COMMENTS_SUCCESS } from './../constants/CommentsConstants';

export const fetchCommentsSuccess = (comments) => { //comments = Array(500) prefrlenata niza
    return {
        type: FETCH_COMMENTS_SUCCESS,
        payload: comments //ja predavame kako payload
    }
}

export const fetchCommentsFail = (error) => { // go zemame kako argument
    return {
        type: FETCH_COMMENTS_FAIL,
        payload: error // i akcijata go nosi kako payload
    }
}

export const fetchCommentsRequest = () => {
    return dispatch => {
        fetch('https://jsonplaceholder.typicode.com/comments') //pravime povik do url-to so podatoci
            .then(res => res.json())
            .then(json => dispatch(fetchCommentsSuccess(json))) //ako e uspesen json ni ja sodrzi Array(500)
            .catch(err => dispatch(fetchCommentsFail(err))) //ako e nesupesen error predavame
    }

}