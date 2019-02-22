const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

// Seed data
const customers = [
  { id: '1', name: 'John Doe', email: 'jdoe@example.com', age: 35 },
  { id: '2', name: 'Steve Smith', email: 'ssmith@example.com', age: 25 },
  { id: '3', name: 'Sara Williams', email: 'swilliams@example.com', age: 32 }
]

const CustomerType = new GraphQLObjectType({
  name: 'Customer',
  fields: () => ({
    id: { type: GraphQLString },
    name: { type: GraphQLString },
    email: { type: GraphQLString },
    age: { type: GraphQLInt }
  })
})

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType,
      args: {
        id: { type: GraphQLString }
      },
      resolve (parentValue, args) {
        for (let i = 0; i < customers.length; i++) {
          if (customers[i].id === args.id) return customers[i];
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})
