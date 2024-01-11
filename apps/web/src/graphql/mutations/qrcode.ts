import { graphql } from "react-relay"

export const CreatePayloadMutation = graphql`
    mutation qrcodeCreatePayloadMutation($input: QrcodeInput){
        createPayload(input: $input) {
            payload
        }
    }
`