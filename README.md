## Usage

### 1. Clone repository & install dependencies

```sh
git clone 
cd project
yarn install # or `npm install`
```

### 2. Install the Prisma CLI

```sh
yarn global add prisma
```

You need to setup a Prisma service. You can refer to [this Quickstart](https://www.prisma.io/docs/quickstart/) to learn how.

### 3. Deploy the Prisma database service

```sh
prisma deploy
```

When prompted where (i.e. to which Prisma server) you want to deploy your service, choose the **Demo server** which can be used for free in Prisma Cloud. If you haven't done so already, you will be asked to register with Prisma Cloud (which you can do via GitHub). For the following prompts in the terminal you can select the suggested values by hitting Enter. (If you have Docker installed, you can also choose to deploy Prisma locally by creating a new database.)

### 4. Start the server & open Playground

To interact with the API in a GraphQL Playground, all you need to do is execute the `start` script defined in `package.json`:

```sh
yarn start
```



in root director run `node src/index.js` to access  GraphQL Playground in http://localhost:4000

schema.graphql file defines the schema which is defined in typeDefs in the index.js

mutation is then added to the resolver which pushes to the links array.
`prisma deploy` to deploy server and connect to AWS aurora

cd prisma, run `prisma generate`  now generated and located in hackernews-node/src/generated/prisma-client

Learn how to build a GraphQL server from scratch. The stack used was based on Node.js, graphql-yoga and Prisma.

graphql-yoga is a fast and simple GraphQL server library built on top of Express.js. It comes with several features, such as out-of-the-box support for GraphQL Playgrounds and realtime GraphQL subscriptions.

The resolvers of your GraphQL server are implemented using the Prisma client that’s responsible for database access.

resource and community recommendations:

Prisma Blog: The blog regularly features new and interesting content about GraphQL, from community news to technical deep dives and various tutorials.
GraphQL Weekly: A weekly GraphQL newsletter with news from the GraphQL ecosystem
GraphQL Conf: The world’s biggest gathering of GraphQL enthusiasts happening in the heart of Berlin
Prisma Slack: A Slack team with vivid discussions around everything GraphQL & Prisma
