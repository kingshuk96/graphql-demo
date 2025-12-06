export const userTypeDef = `
type Query {
    user:user
}
type user {
        id: Int
        name: String
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
};