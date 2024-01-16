import { useState } from "react";
import { useMutation } from "react-relay";
import { qrcodeCreatePayloadMutation$data } from "../graphql/mutations/__generated__/qrcodeCreatePayloadMutation.graphql";
import { CreatePayloadMutation } from "../graphql/mutations/qrcode";
import QrGenerator from "../components/QrGenerator";
import useAuthentication from "../hooks/useAuthentication";


export const Home = () => {
    const [authLoading] = useAuthentication()

    const [name, setName] = useState("")
    const [value, setValue] = useState("")
    const [key, setKey] = useState("")
    const [city, setCity] = useState("")
    const [txtId, setTxtId] = useState("")

    const [payload, isInFlight] = useMutation(CreatePayloadMutation);

    const createPayloadQrcode = () => {
        const input = {
            input: {
                name: new String(name),
                value: new String(value),
                key: new String(key),
                city: new String(city),
                txtId: new String(txtId)
            },
        };

        payload({
            variables: input,
            onCompleted(response, errors) {
                if (errors) {
                    throw new Error(errors[0].message)
                }

                const { createPayload } = response as qrcodeCreatePayloadMutation$data

                if (createPayload?.payload) {
                    console.log(createPayload.payload)
                }
            },
        });
    };

    if (isInFlight || !authLoading) {
        return <h1>Loading...</h1>;
    }

    return (
        <>
            <h1>HOME</h1>
            <form
                onSubmit={(e) => {
                    e.preventDefault();
                    createPayloadQrcode();
                }}
            >
                <label>
                    Name:
                    <input
                        type="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Key:
                    <input
                        type="key"
                        value={key}
                        onChange={(e) => setKey(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Value:
                    <input
                        type="value"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    City:
                    <input
                        type="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                </label>
                <br />
                <label>
                    Descrição:
                    <input
                        type="txtId"
                        value={txtId}
                        onChange={(e) => setTxtId(e.target.value)}
                    />
                </label>
                <br />
                <button type="submit" disabled={isInFlight}>
                    {isInFlight ? "Logging In..." : "Gerar QRcode"}
                </button>
            </form>
            <QrGenerator />
        </>
    )
}