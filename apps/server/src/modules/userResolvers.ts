import { Context } from "koa";
import User from "../models/user";


interface UserInput {
  name: string;
  email: string;
}

const userResolvers = {
  Query: {
    users: async () => {
      return await User.find();
    },
    userByName: async (_: Context, { name }: { name: string }) => {
      return await User.findOne({ name });
    }
  },
}

export default userResolvers;