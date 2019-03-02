const { GraphQLServer } = require('graphql-yoga')
const { prisma } = require('./generated/prisma-client')

// links variable is used to store the links at runtime.
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length
// add new resolver for the feed root field. Notice that a resolver always has to be named after the corresponding field from the schema definition(type Query).
// Finally, you’re adding three more resolvers for the fields on the Link type from the schema definition. We’ll discuss in a bit what the parent argument is that’s passed into the resolver here.


//all GraphQL resolver functions always receive four arguments.

//the feed resolver It accesses a prisma object on context. As you will see in a bit, this prisma object actually is a Prisma client instance that’s imported from the generated prisma-client library.

// This Prisma client instance effectively lets you access your database through the Prisma API. It exposes a number of methods that let you perform CRUD operations for your models.


//As arguments, you’re passing the data that the resolvers receive via the args parameter.
const resolvers = {
  Mutation: {
    post: (root, args, context) => {
      return context.prisma.createLink({
        url: args.url,
        description: args.description,
      })
    },
  },

  Link: {
    id: (parent) => parent.id,
    description: (parent) => parent.description,
    url: (parent) => parent.url,
  }
}

const server = new GraphQLServer ( {
  typeDefs: './src/schema.graphql',
  resolvers,
  context: {prisma},
})

server.start(() => console.log(` Server is running on http://localhost:4000`))
