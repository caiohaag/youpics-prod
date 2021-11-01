import { useRef, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import { Users } from "../../data/data";
import './login.scss'

function Login() {
    const loginUser = useRef();
    const loginPass = useRef();
    const {user, error, dispatch} = useContext(AuthContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!Users.some(user => {return user.username === loginUser.current.value})) {
            dispatch({ type: "LOGIN_FAILURE", payload: 'Usuário inválido'})
        } else if (!Users.some(user => {return user.password === loginPass.current.value})) {
            dispatch({ type: "LOGIN_FAILURE", payload: 'Senha Incorreta'})
        } else {
            dispatch({ type: "LOGIN_SUCCESS", payload: loginUser.current.value})
        }        
    }

    return ( 
        <section className="login-page">
            <h1>YouPics</h1>
            <form action="#" id="form-login" onSubmit={handleSubmit}>
                <input type="text" id="login-user" name="login-user" ref={loginUser} required placeholder="Usuário"/>
                <input type="password" name="login-pass" id="login-pass" ref={loginPass} required placeholder="Senha" />
                {error ? <span className="login-error">{error}</span> : ''}
                <button type="submit">Login</button>
            </form>
            <div className="dica-senha">
                <span className="users-disponiveis">Usuários disponíveis: frodo, gimli, eowyn, legolas</span>
                <span className="pass-padrao">Senha padrão: 12345</span>
            </div>
        </section>
     );
}

export default Login;