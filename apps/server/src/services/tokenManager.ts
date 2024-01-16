import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'

dotenv.config()

// Create token with payload
function createToken(payload: any) {
    const token = jwt.sign(
        payload,
        process.env.JWT_KEY as string,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
    return token
}

// Verify token and return a value boolean
function getPayload(token: string): string | jwt.JwtPayload | null {
    try {
        const payload = jwt.verify(
            token,
            process.env.JWT_KEY as string
        )

        return payload
    } catch (error) {
        return null
    }
}

export { createToken, getPayload }