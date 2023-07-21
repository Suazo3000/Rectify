const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    _id: ID
    username: String
    email: String
    password: String
  }

  type Therapist {
    id: ID
    name: String
    specialty: String
    location: String
    bio: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type Query {
    therapists: [Therapist!]!
    me: User
  }

  type Mutation {
    addUser(username: String!, email: String!, password: String!): Auth
    login(email: String!, password: String!): Auth
  }
`;

module.exports = typeDefs;
