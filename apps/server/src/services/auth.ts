import * as bcrypt from "bcrypt"

// Get the password and return a hash of the password
const hashPassword = async (password: string): Promise<string> => {
    const saltRounds = Number(process.env.BCRYPT_COST)
    const salt = await bcrypt.genSalt(saltRounds);
    const hashedPassword = await bcrypt.hash(password, salt)
    return hashedPassword
}

// Compare the password received and compare with hash in the database. Returns a value boolean
const comparePasswords = async (plainTextPassword: string, hashedPassword: string): Promise<boolean> => {
    return await bcrypt.compare(plainTextPassword, hashedPassword);
}

export { hashPassword, comparePasswords }