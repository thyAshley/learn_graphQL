import { UserList, MovieList } from "../../Database";

interface UserType {
  id: number;
  name: string;
  username: string;
  age: number;
  nationality: string;
  friends: UserType[];
  favouriteMovies: MovieType[];
}

interface MovieType {
  id: number;
  name: string;
  year: number;
  isShowing: boolean;
}

export const resolvers = {
  Query: {
    // User resolver
    users() {
      return UserList;
    },
    user(_: any, args: UserType) {
      return UserList.find((user) => user.id === Number(args.id));
    },

    // Movie resolvers
    movies() {
      return MovieList;
    },
    movie(_: any, args: MovieType) {
      return MovieList.find((movie) => movie.name === args.name);
    },
  },

  User: {
    favouriteMovies() {
      return MovieList.filter((movie) => movie.year > 2000);
    },
  },
};
