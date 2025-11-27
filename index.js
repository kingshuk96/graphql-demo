import { graphql, buildSchema } from "graphql"
import express from "express"
import { createHandler } from "graphql-http/lib/use/express";
import { ruruHTML } from "ruru/server";
const schema = buildSchema(`
  type Query {
    hello: String
    age: Int
  }
`)

const rootValue = {
  hello: () => "Hello world!",
  age: () => 42
}

const source = "{ age }"

graphql({ schema, source, rootValue }).then(response => {
  console.log(response)
})

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