import { Context } from "koa"
import User from "../models/user";
import { createToken } from "../services/tokenManager";
import { comparePasswords, hashPassword } from "../services/auth";

interface UserInput {
    name: String;
    email: String;
    password: String;
    phoneNumber: String;
}

interface UserInputLogin {
    email: String;
    password: String;
}

const authResolvers = {
    Mutation: {
        login: async (_: Context, { input }: { input: UserInputLogin }) => {
            console.log("aquiiiiiiii")
            try {
                const { email, password } = input

                const user = await User.findOne({ email })

                console.log(user)

                if (!user) throw new Error("E-mail or password is wrong")

                const passwordIsCorrect = await comparePasswords(password as string, user.password)

                if (!passwordIsCorrect) throw new Error("E-mail or password is wrong")

                const payload = {
                    id: user._id.toString(),
                    name: user.name
                }

                const token = createToken(payload)

                return { user, token }
            } catch (error) {
                console.error(error);

                if (error) {
                    throw new Error(error.toString());
                }
                throw new Error("erro");
            }
        },
        signup: async (_: Context, { input }: { input: UserInput }) => {
            try {
                const { name, email, password, phoneNumber } = input

                const existingUser = await User.findOne({ email })

                if (existingUser) throw new Error("E-mail already exists")

                const passwordHashed = await hashPassword(password as string)

                input = { ...input, password: passwordHashed }

                const newUser = new User(input)

                await newUser.save()

                const payload = {
                    id: newUser._id.toString(),
                    name
                }

                const token = createToken(payload)

                return { user: newUser, token };
            } catch (error) {
                console.error(error);

                if (error) {
                    throw new Error(error.toString());
                }
                throw new Error("erro");
            }
        }
    },
}

export default authResolvers;