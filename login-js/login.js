import postdata from "../utils/httpReq.js";
import {setCookie} from "../utils/cookie.js";
import validform from "../utils/vlidation.js";
import authHandler from "../utils/authori.js";

const inputs = document.querySelectorAll("input")
const buttons = document.querySelector("button")


const starthand = async (event) => {
    event.preventDefault();

    const username = inputs[0].value;
    const password = inputs[1].value;


    const validinputs= validform(username,password)
    if (!validinputs) return

    const datas = {
        username: "mor_2314",
        password: "83r5^_"
    }


    const dataapi = await postdata("auth/login",datas)
    console.log(dataapi)


    setCookie(dataapi.token)
    location.assign("index.html")
}


buttons.addEventListener("click", starthand)
document.addEventListener("DOMContentLoaded",authHandler)