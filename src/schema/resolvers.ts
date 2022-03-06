import { UserList } from "../../Database";

export const resolvers = {
  Query: {
    users() {
      return UserList;
    },
  },
};
