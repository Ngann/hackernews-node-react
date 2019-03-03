subscription {
  newVote {
    id
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}

subscription {
  newLink {
      id
      url
      description
      postedBy {
        id
        name
        email
      }
  }
}

mutation {
  signup(
    name: "Alice"
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      id
    }
  }
}

mutation {
  post(
    url: "www.graphqlconf.org"
    description: "An awesome GraphQL conference"
  ) {
    id
  }
}

mutation {
  post(
    url: "www.graphqlweekly.com"
    description: "Curated GraphQL content coming to your email inbox every Friday"
  ) {
    id
  }
}

mutation {
  vote(linkId: "__LINK_ID__") {
    link {
      url
      description
    }
    user {
      name
      email
    }
  }
}

mutation {
  login(
    email: "alice@prisma.io"
    password: "graphql"
  ) {
    token
    user {
      email
      links {
        url
        description
      }
    }
  }
}

query {
  feed(filter:"QL") {
    id
  	description
    url
    postedBy {
      id
      name
    }
  }
}

pagination

query {
  feed(
    first: 1
    skip: 1
  ) {
    id
    description
    url
  }
}
