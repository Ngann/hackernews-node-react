in root director run `node src/index.js` to access  GraphQL Playground in http://localhost:4000

schema.graphql file defines the schema which is defined in typeDefs in the index.js

mutation is then added to the resolver which pushes to the links array.
`prisma deploy` to deploy server and connect to AWS aurora

cd prisma, run `prisma generate`  now generated and located in hackernews-node/src/generated/prisma-client
