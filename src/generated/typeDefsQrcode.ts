const typeDefsQrcode = `
    type Mutation {
        createPayload(name: String!, value: String!, key: String!, city: String!, txtId: String): Payload
    }

    type Payload {
        payload: String
    }
`

export default typeDefsQrcode