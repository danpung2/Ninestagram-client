import {joinAPI} from "../api/userAPI";
import "../styles/style.css";
import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

interface joinData{
    email: string,
    nickname: string,
    password: string
}


function Register(){
    const [email, setEmail] = useState("");
    const [emailMessage, setEmailMessage] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");
    const [passwordMessage, setPasswordMessage] = useState("");
    const [passwordConfirmMessage, setPasswordConfirmMessage] = useState("");
    const [nickname, setNickname] = useState("");
    const [nicknameMessage, setNicknameMessage] = useState("");

    let body = {
        nickname,
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
        const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,}$/;
        const passwordCurrent = event.target.value;
        setPassword(passwordCurrent);

        if(!passwordRegex.test(passwordCurrent)) {
            setPasswordMessage("숫자와 영문자를 포함하여 8자리 이상 입력해야 합니다.");
        } else {
            setPasswordMessage("사용 가능한 비밀번호입니다.");
        }
    }

    const onChangePasswordConfirm = (event: any) => {
        const passwordConfirmCurrent = event.target.value;
        setPasswordConfirm(passwordConfirmCurrent)

        if (password === passwordConfirmCurrent) {
            setPasswordConfirmMessage("비밀번호가 일치합니다.");
        } else {
            setPasswordConfirmMessage("비밀번호가 일치하지 않습니다.");
        }
    }

    const onChangeNickname = (event: any) => {
        const nicknameRegex = /^(?=.*[a-z0-9])[a-z0-9]{2,10}$/;
        const nicknameCurrent = event.target.value;
        setNickname(nicknameCurrent);

        if(!nicknameRegex.test(nicknameCurrent)) {
            setNicknameMessage("숫자와 영문자를 이용하여 2자 이상 10자 이하로 작성해주세요.");
        }
        else {
            setNicknameMessage("사용가능한 닉네임입니다.");
        }
    }

    async function joinApi(body: joinData) {
        const response = await joinAPI(body.nickname, body.email, body.password);
        return response;
    }

    const navigate = useNavigate();

    const onSubmitJoinHandler = (event: any) => {
        event.preventDefault();

        joinApi(body)
            .then((res) => {console.log(res); navigate("/login")})
            .catch(err => {
                console.error(err);
                alert("가입에 실패하였습니다. 다시 시도해주세요.");
            })

    }


    return (
        <>
            <nav>
                <h4>Ninestagram register</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/login">Login</a></li>
                    <li><a href="/register">Register</a></li>
                </ul>
            </nav>

            <div className="container mt-4">
                <div className="card">
                    <div className="card-header">
                        Register Form
                    </div>
                    <div className="card-body">
                        <form>
                            <div className="form-group">
                                <label htmlFor="name">Nickname</label>
                                <input type="text" className="form-control" id="nickname" name="nickname" onChange={onChangeNickname}/>
                                {nickname.length > 0 && (<span className="nicknameCheckSpan">{nicknameMessage}</span>)}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email Address</label>
                                <input type="email" className="form-control" id="email" name="email" onChange={onChangeEmail}/>
                                {email.length > 0 && <span className="emailConfirmSpan">{emailMessage}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="password">Password</label>
                                <input type="password" className="form-control" id="password" name="password" onChange={onChangePassword}/>
                                {password.length > 0 && (<span className="passwordCheckSpan">{passwordMessage}</span>)}
                            </div>

                            <div className="form-group">
                                <label htmlFor="passwordConfirm">Confirm Password</label>
                                <input type="password" className="form-control" id="passwordConfirm"
                                       name="passwordConfirm" onChange={onChangePasswordConfirm}/>
                                {passwordConfirm.length > 0 && (<span className="passwordConfirmCheckSpan">{passwordConfirmMessage}</span>)}
                            </div>
                            <button type="submit" className="btn btn-primary" onClick={onSubmitJoinHandler}>Register User</button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Register;