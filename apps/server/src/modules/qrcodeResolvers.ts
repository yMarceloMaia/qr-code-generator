import { Context } from "koa";

interface QrcodeInput {
    name: String
    value: String
    key: String
    city: String
    txtId?: String
}

interface PayloadObj {
    [key: string]: string;
}

function formatTransactionAmount(text: String): String {
    const textSize = text.length
    return textSize <= 9 ? `0${textSize}${text}` : `${textSize}${text}`
}

function formatTxtId(text: String): String {
    const textSize = text.length
    return textSize <= 9 ? `0${textSize}${text}` : `${textSize}${text}`
}

function formatName(text: String): String {
    const textSize = text.length
    return textSize <= 9 ? `0${textSize}${text}` : `${textSize}${text}`
}

function formatCity(text: String): String {
    const textSize = text.length
    return textSize <= 9 ? `0${textSize}${text}` : `${textSize}${text}`
}

// references: https://github.com/devcarlosalberto/pix-payload/blob/main/src/payload.class.ts
function calcCRC16CCITT(subject: string): string {
    let result = 0xffff

    if (subject.length > 0) {
        for (let offset = 0; offset < subject.length; offset++) {
            result ^= subject.charCodeAt(offset) << 8
            for (let bitwise = 0; bitwise < 8; bitwise++) {
                if ((result <<= 1) & 0x10000) result ^= 0x1021
                result &= 0xffff
            }
        }
    }

    return result.toString(16).toUpperCase()
}

const qrcodeResolvers = {
    Mutation: {
        createPayload: async (_: Context, { input }: { input: QrcodeInput }) => {
            try {
                const { name, value, key, city, txtId } = input
               
                const merchantAccountInformation = `0014BR.GOV.BCB.PIX01${key.length}${key}`

                const addDataFieldSize = `05${txtId?.length.toString().padStart(2, '0')}${txtId}`

                const payloadObj: PayloadObj = {
                    payloadFormat: '000201',
                    merchantAccount: `26${merchantAccountInformation.length}${merchantAccountInformation}`,
                    merchantCategoryCode: '52040000',
                    transactionCurrency: '5303986',
                    transactionAmount: `54${formatTransactionAmount(value)}`,
                    countrycode: '5802BR',
                    merchantName: `59${formatName(name)}`,
                    merchantCity: `60${formatCity(city)}`,
                    addDataField: `62${txtId ? formatTxtId(addDataFieldSize) : '070503***'}`,
                    crc16: '6304'
                };

                console.log(payloadObj)

                let payload = ''
                for (let key in payloadObj) {
                    payload += payloadObj[key]
                }

                payload += calcCRC16CCITT(payload)

                return { payload }
            } catch (error) {
                console.error(error);

                if (error) {
                    throw new Error(error.toString());
                }
                throw new Error("erro");
            }
        }
    }
}

export default qrcodeResolvers;