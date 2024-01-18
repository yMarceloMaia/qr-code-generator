import { useNavigate } from "react-router-dom";
import { AuthenticateMutation } from "../graphql/mutations/auth";
import { useMutation } from "react-relay";
import { useEffect, useState } from "react";
import { authAuthenticateMutation$data } from "../graphql/mutations/__generated__/authAuthenticateMutation.graphql";

const useAuthentication = () => {
    const navigate = useNavigate()
    const [auth] = useMutation(AuthenticateMutation);
    const [isAuthenticated, setIsAuthenticated] = useState(false)

    const authenticateUser = async () => {
        try {
            const token = localStorage.getItem("token")

            if (!token) {
                navigate("/login")
            }

            const input = {
                token: token ? token : ""
            };

            auth({
                variables: input,
                onCompleted(response, errors) {
                    if (errors) {
                        throw new Error(errors[0].message)
                    }
                    const { authentication } = response as authAuthenticateMutation$data

                    if (authentication?.authenticate) {
                        navigate("/")
                    } else {
                        navigate("/login")
                    }
                },
            });
            setIsAuthenticated(true)
        } catch (error) {
            console.log(error)
            setIsAuthenticated(false)
        }
    }

    useEffect(() => {
        authenticateUser()
    }, [])

    return [isAuthenticated]
}

export default useAuthentication