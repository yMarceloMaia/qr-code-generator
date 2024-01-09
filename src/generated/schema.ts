import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/resolvers';
import typeDefsUser from './typeDefsUser';
import { mergeTypeDefs } from '@graphql-tools/merge';
import typeDefsQrcode from './typeDefsQrcode';

const typeDefs = mergeTypeDefs([typeDefsUser, typeDefsQrcode])

const schema = makeExecutableSchema({
  typeDefs,
  resolvers,
});

export default schema;
