import { createSchema } from "graphql-yoga";
import { userTypeDef as User ,resolvers as userResolvers } from "./models/user.js";
import _ from "lodash";

const queries = `
    type Query {
        hello: String
    }
    
`;
const typeDefs = [queries, User];

const resolvers = {
          Query: {
            hello: () => 'Hello from Yoga!',
           
          },
        };


export const schema = createSchema({
    typeDefs: typeDefs,
    resolvers: _.merge(resolvers, userResolvers),
});