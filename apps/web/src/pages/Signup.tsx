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
            <h1>SIGNUP</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    handleSignup();
                }}
            >
                <label>
                    Name:
                    <input
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
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
                <label>
                    Phone Number:
                    <input
                        type="text"
                        value={phoneNumber}
                        onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                </label>
                <button type="submit" disabled={isInFlight}>
                    {isInFlight ? "Logging In..." : "Signup"}
                </button>
            </form>
        </main>
    );
}