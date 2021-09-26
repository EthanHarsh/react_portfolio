import { gql } from '@apollo/client';

export const QUERY_PROJECTS = gql`
  query getProjects {
    projects {
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
  }
`;
