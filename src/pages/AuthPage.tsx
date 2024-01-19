import { useContext } from "react";
import AuthForm from "../components/AuthForm"
import { AuthContext } from "../context/AuthContext"

export const AuthPage = () => {

    const { login, signup } = useContext(AuthContext);

    return (

        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", textAlign: "center" }}>
            <div>
                <h2>Login</h2>
                <AuthForm submitTitle="Login" submit={login} />
            </div>
            <div>
                <h2>Sign up</h2>
                <AuthForm submitTitle="Signup" submit={signup} />
            </div>
        </div>






    )
}