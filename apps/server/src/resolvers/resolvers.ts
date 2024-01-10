import userResolvers from "../modules/userResolvers";
import authResolvers from "../modules/authResolvers";
import qrcodeResolvers from "../modules/qrcodeResolvers";

const resolvers = [
  userResolvers,
  authResolvers,
  qrcodeResolvers
];

export default resolvers;
