import React, { useState } from "react";
import { useMutation } from "react-relay";
import { LoginMutation } from "../graphql/mutations/auth";
import { useNavigate } from "react-router-dom";
import { authLoginMutation$data } from "../graphql/mutations/__generated__/authLoginMutation.graphql";
import useAuthentication from "../hooks/useAuthentication";

const Login = () => {
    useAuthentication()

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
        <main className="">
            <div className="h-screen font-sans login bg-cover">
                <div className="container mx-auto h-full flex flex-1 items-center">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleLogin();
                                }}>
                                <p className="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                                <div className="">
                                    <label className="block text-sm text-white text-left" htmlFor="email">E-mail:</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                        type="email"
                                        id="email"
                                        placeholder="Digite o seu e-mail"
                                        aria-label="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        required />
                                </div>
                                <div className="mt-2">
                                    <label className="block  text-sm text-white text-left">Senha:</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                        type="password"
                                        id="password"
                                        placeholder="Digite a sua senha"
                                        arial-label="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        required />
                                </div>

                                <div className="mt-4 items-center flex justify-between">
                                    <button className="px-4 py-1 text-white font-light tracking-wider bg-gray-900 hover:bg-gray-800 rounded"
                                        type="submit" disabled={isInFlight}>
                                        Entrar
                                    </button>
                                    {/* <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                        href="#">Esqueceu a senha ?</a> */}
                                </div>
                                <div className="text-center">
                                    <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400 cursor-pointer"
                                        onClick={() => navigate("/signup")}>
                                        Criar uma conta
                                    </a>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
};

export default Login;
