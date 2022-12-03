import axios from "axios";
import "../styles/style.css";
// import "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css";
import { useNavigate } from "react-router-dom";
import {useState} from "react";
import {loginAPI} from "../api/userAPI";

interface loginData{
    email: string,
    password: string
}

function Login(){

    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [password, setPassword] = useState("");

    let body = {
        email,
        password
    }

    const onChangeEmail = (event: any) => {
        const emailRegex = /([\w-.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([\w-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/;
        const emailCurrent = event.target.value;
        setEmail(emailCurrent);

        if(!emailRegex.test(emailCurrent)) {
            setEmailMessage("이메일 형식이 올바르지 않습니다.");
        }
        else {
            setEmailMessage("올바른 이메일 형식입니다.");
        }
    }

    const onChangePassword = (event: any) => {
        const passwordCurrent = event.target.value;
        setPassword(passwordCurrent);

    }

    async function loginApi(body: loginData) {
        const response = await loginAPI(body.email, body.password);
        return response;
    }

    const navigate = useNavigate();

    const onSubmitLoginHandler = (event: any) => {
        event.preventDefault();

        loginApi(body)
            .then((res) => {console.log(res); navigate("/Home")})
            .catch(err => {
                console.error(err);
                alert("로그인에 실패하였습니다. 다시 시도해주세요.");
            })

    }

    return (
        <>
            <nav>
                <h4>Ninestagram login</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>

            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        Login Form
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={onChangeEmail}/>
                                {email.length > 0 && <span className="emailConfirmSpan">{emailMessage}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={onChangePassword}/>
                            </div>

                            <button type="submit" className="btn btn-primary" onClick={onSubmitLoginHandler}>Login</button>
                            <a href="/Home" className="btn btn-primary">Root mode</a>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Login;