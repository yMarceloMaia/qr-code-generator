const typeDefsQrcode = `
    type Mutation {
        createPayload(input: QrcodeInput): Payload
    }

    input QrcodeInput {
        name: String!
        value: String!
        key: String!
        city: String!
        txtId: String
    }
    
    type Payload {
        payload: String
    }
`

export default typeDefsQrcode