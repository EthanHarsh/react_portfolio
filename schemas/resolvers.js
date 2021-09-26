const Project = require('../models/projectModel');

// TODO: Add a comment describing the functionality of this expression
const resolvers = {
  Query: {
    projects: async () => {
      // TODO: Add a comment describing the functionality of this statement
      return await Project.find({});
    }
  }
};

module.exports = resolvers;