import { createSchema } from "graphql-yoga";

export const schema = createSchema({
    typeDefs: `
        type Query {
            hello: String 
            user: user
        }
        type user {
            id: Int
            name: String
        }
        `,
        resolvers: {
          Query: {
            hello: () => 'Hello from Yoga!',
            user: () => {
                return {
                    id: 1,
                    name: "John Doe"
                };
            },
          },
        },
});