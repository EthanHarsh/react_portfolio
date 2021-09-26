const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Project {
    _id: ID
    name: String
    type: String
    description: String
    keywords: [String]
    url: String
    repo: String
    heroimg: String,
    createDate: String
  }

  type Query {
    projects: [Project]
  }
`;

module.exports = typeDefs;