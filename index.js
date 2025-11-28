import { graphql, buildSchema } from "graphql"
import express from "express"
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
const schema = buildSchema(`
  type Query {
    hello(name: String!): String
    age: Int
    weight: Float!
    isOver18: Boolean
    hobbies: [String]
  }
`)

const rootValue = {
  hello: ({ name }) => "Hello!" + name,
  age: 42,
  weight: 80.78,
  isOver18: true,
  hobbies: () => {
    return ["reading", "traveling", "sports"]
  }
}


const app = express();

app.all('/graphql', createHandler({ schema, rootValue }));


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
