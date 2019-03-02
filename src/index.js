const { GraphQLServer } = require('graphql-yoga')

// links variable is used to store the links at runtime.
let links = [{
  id: 'link-0',
  url: 'www.howtographql.com',
  description: 'Fullstack tutorial for GraphQL'
}]

let idCount = links.length
// add new resolver for the feed root field. Notice that a resolver always has to be named after the corresponding field from the schema definition(type Query).
// Finally, you’re adding three more resolvers for the fields on the Link type from the schema definition. We’ll discuss in a bit what the parent argument is that’s passed into the resolver here.
const resolvers = {
  Query: {
    info: () => `this is the API of hackernews Clone`,
    feed: () => links,
  },

  Mutation: {
    post: (parent, args) => {
      const link ={
        id: `link-${idCount++}`,
        description: args.description,
        url: args.url,
      }
      links.push(link)
      return link
    }
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
})

server.start(() => console.log(` Server is running on http://localhost:4000`))
