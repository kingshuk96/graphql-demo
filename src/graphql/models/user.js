export const userTypeDef = `
type Query {
    user:user
}
type user {
        id: Int
        name: String
}
type Mutation{
   createUser(name:String): user
}
`;

export const resolvers = {
    Query: {
        user: () => {
            return {
                id: 1,
                name: "John Doe"
            };
        },
    },
    Mutation: {
        createUser: () => {
            return {
                id: 2,
                name: "Jane Smith"
            };
        },
    },
};