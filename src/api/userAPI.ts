import axios from "axios";
import {
    API_USER,
    API_LOGIN,
    API_FOLLOW,
    API_FOLLOW_READ,
    API_ARTICLE, API_REPLY,
    API_COMMENT,
    API_ARTICLE_LIKE_SUB, API_ARTICLE_LIKE_ADD} from "../config/env";

async function joinAPI(nickname: string, email: string, password: string){
    await axios.post(API_USER, {
        nickname, email, password
    })
        .then((res) => {
            console.log(res);
        })
        .catch((err) => {
            console.error(err);
        })
}

async function loginAPI(email: string, password: string){
    await axios.post(API_LOGIN, {
        email, password
    }).then((res) => {
        console.log(res);
    })
        .catch((err) => {
            console.error(err);
        })
}

export { joinAPI, loginAPI };