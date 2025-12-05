// import {  GraphQLSchema } from "graphql"
import { GraphQLSchema, GraphQLObjectType, GraphQLString, GraphQLID, GraphQLInt } from "graphql"
// graphql, buildSchema,
import express from "express" 
// import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
import { createYoga } from "graphql-yoga";
import { schema } from "./src/graphql/index.js";

const yoga = createYoga({
  schema
});


const app = express();

// app.all('/graphql', createHandler({ schema }));
app.use('/graphql', yoga);

app.get('/', (req, res) => {
  res.type('html');
  res.end(ruruHTML({
    title: 'GraphQL',
    description: 'GraphQL'
  }))
})
app.listen(4000, () => {
  console.log('Listening on port 4000')
})


// const user = new GraphQLObjectType({
//   name: 'User',
//   fields: {
//     id: { type: GraphQLID },
//     name: { type: GraphQLString },
//     age: { type: GraphQLInt },
//     email: { type: GraphQLString }
//   }
// });
// const schema = new GraphQLSchema({
//   query: new GraphQLObjectType({
//     name: 'Query',
//     fields: {
//       hello: {
//         type: GraphQLString,
//         resolve:()  => {
//           return "Hello!";
//         }
//       },
//       user: {
//         type: user,
//         resolve: () => {
//           return {
//             id: 1,
//             name: "John Doe",
//             age: 42,
//             email: "abc@gamil.com"
//           }
//         }
//       }
//     }
//   })
// });

// const schema = buildSchema(`
//   type Query {
//     hello(name: String!): String
//     age: Int
//     weight: Float!
//     isOver18: Boolean
//     hobbies: [String]
//     user: User
//   }
//     type User{
//         id: ID!
//         name: String!
//         age: Int!
//         email: String!

//     }
// `)
// const rootValue = {
//   hello: ({ name }) => "Hello!" + name,
//   age: 42,
//   weight: 80.78,
//   isOver18: true,
//   hobbies: () => {
//     return ["reading", "traveling", "sports"]
//   },
//   user: () => {
//     return {
//       id: 1,
//       name: "John Doe",
//       age: 42,
//       email: "john.doe@example.com"
//     }
//   }
// }

