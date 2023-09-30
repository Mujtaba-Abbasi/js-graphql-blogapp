import { createNewUser, login } from "../controllers/user.js";

export const resolvers = {
  Query: {
    getPosts: () => [],
  },

  Mutation: {
    createUser: (_, { input }) => createNewUser(input),
    login: (_, { input }) => login(input),
  },
};
export default resolvers;
