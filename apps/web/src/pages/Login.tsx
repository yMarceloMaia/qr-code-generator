import React, { useState } from "react";
import { useMutation } from "react-relay";
import { LoginMutation } from "../graphql/mutations/auth";
import { useNavigate } from "react-router-dom";
import { authLoginMutation$data } from "../graphql/mutations/__generated__/authLoginMutation.graphql";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const [login, isInFlight] = useMutation(LoginMutation);

    const handleLogin = () => {
        const input = {
            input: {
                email: new String(email),
                password: new String(password),
            },
        };

        login({
            variables: input,
            onCompleted(response, errors) {
                if (errors) {
                    throw new Error(errors[0].message)
                }

                const { login } = response as authLoginMutation$data
                console.log(login)

                if (login?.token) {
                    localStorage.setItem("token", login.token)
                    navigate('/')
                }
            },
        });
    };

    if (isInFlight) {
        return <h1>Loading...</h1>;
    }

    return (
        <main>
            <h1>LOGIN</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleLogin();
                }}
            >
                <label>
                    Email:
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Password:
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" disabled={isInFlight}>
                    {isInFlight ? "Logging In..." : "Login"}
                </button>
            </form>
        </main>
    );
};

export default Login;
