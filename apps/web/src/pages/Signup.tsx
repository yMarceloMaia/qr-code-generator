import { useState } from "react";
import { useMutation } from "react-relay";
import { useNavigate } from "react-router-dom";
import { authSignupMutation$data } from "../graphql/mutations/__generated__/authSignupMutation.graphql";
import { SignupMutation } from "../graphql/mutations/auth";


export const Signup = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    const navigate = useNavigate();

    const [signup, isInFlight] = useMutation(SignupMutation);

    const handleSignup = () => {
        const input = {
            input: {
                name: new String(name),
                email: new String(email),
                password: new String(password),
                phoneNumber: new String(phoneNumber)
            },
        };

        signup({
            variables: input,
            onCompleted(response, errors) {
                console.log(errors)
                console.log(response)
                if (errors) {
                    throw new Error(errors[0].message)
                }

                const { signup } = response as authSignupMutation$data

                if (signup?.token) {
                    localStorage.setItem("token", signup.token)
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
            <div className="h-screen font-sans login bg-cover">
                <div className="container mx-auto h-full flex flex-1 items-center">
                    <div className="w-full max-w-lg">
                        <div className="leading-loose">
                            <form className="max-w-sm m-4 p-10 bg-white bg-opacity-25 rounded shadow-xl"
                                onSubmit={(e) => {
                                    e.preventDefault();
                                    handleSignup();
                                }}>
                                <p className="text-white font-medium text-center text-lg font-bold">LOGIN</p>
                                <div className="">
                                    <label className="block text-sm text-white text-left" htmlFor="name">Nome:</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                        type="name"
                                        id="name"
                                        placeholder="Digite o seu nome"
                                        aria-label="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        required />
                                </div>

                                <div className="mt-2">
                                    <label className="block  text-sm text-white text-left">Número telefone:</label>
                                    <input className="w-full px-5 py-1 text-gray-700 bg-gray-300 rounded focus:outline-none focus:bg-white"
                                        type="phoneNumber"
                                        id="phoneNumber"
                                        placeholder="Digite o seu número de telefone"
                                        arial-label="Digite o seu número de telefone"
                                        value={phoneNumber}
                                        onChange={(e) => setPhoneNumber(e.target.value)}
                                        required />
                                </div>

                                <div className="mt-2">
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
                                        Criar
                                    </button>
                                    {/* <a className="inline-block right-0 align-baseline font-bold text-sm text-500 text-white hover:text-red-400"
                                        href="#">Esqueceu a senha ?</a> */}
                                </div>
                                <div className="text-center">
                                    <a className="inline-block right-0 align-baseline font-light text-sm text-500 hover:text-red-400 cursor-pointer"
                                        onClick={() => navigate("/login")}>
                                        Voltar
                                    </a>
                                </div>

                            </form>

                        </div>
                    </div>
                </div>
            </div>
        </main>
    );
}