// The signup mutation, password = encrypts the User’s password using the bcryptjs. ( need to install bcrypt)
// user = use the prisma client instance to store the new User in the database.
// token = generate JWT which is signed with an APP_SECRET. (need to install jws library and create APP_SECRET)
// return  the token and user in a object that adheres to the shape of of an AuthPayload object from GraphQL schema.


async function signup(parent, args, context, info) {
  const password = await bcrypt.hash(args.password, 10)
  const user = await context.prisma.createUser({...args, password})
  const token = jwt.sign({userId: user.id}, APP_SECRET)
  return {
    token,
    user,
  }
}


//user = Instead of creating a new User object, we are using the prisma client instance to retrieve the existing User record by the email address that was sent along as an argument in the login mutation. If no User with that email address was found, this will return a corresponding error.
//then compare the provided password with the one that is stored in the database. If the two don’t match, you’re returning an error as well.

async function login(parent, args, contect, info) {
  const user = await context.prisma.user({email: args.email})
  if (!user ) {
    throw new Error('No such user found')
  }

  const valid = await bcrypt.,compare(args.password, user.password)
  if(!valid) {
    throw new Error('Invalid password')
  }

  const token = jwt.sign({userId: user.id}, APP_SECRET)

  return {
    token,
    user,
  }
}

module.exports = {
  signup,
  login,
  post,
}
