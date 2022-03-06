interface UserProps {
  id: number;
  name: string;
  username: string;
  age: number;
  nationality: string;
  friends?: UserProps[];
}

interface MovieProps {
  id: number;
  name: string;
  year: number;
  isShowing: boolean;
}

export const UserList: UserProps[] = [
  {
    id: 1,
    name: "John",
    username: "John",
    age: 20,
    nationality: "CANADA",
    friends: [
      {
        id: 2,
        name: "Mike",
        username: "Mike",
        age: 20,
        nationality: "SINGAPORE",
      },
    ],
  },
  {
    id: 2,
    name: "Mike",
    username: "Mike",
    age: 20,
    nationality: "SINGAPORE",
  },
  {
    id: 3,
    name: "Sarah",
    username: "Sarah",
    age: 25,
    nationality: "THAILAND",
  },
];

export const MovieList: MovieProps[] = [
  {
    id: 1,
    name: "Avengers",
    year: 2000,
    isShowing: false,
  },
  {
    id: 2,
    name: "Avengers 2",
    year: 2001,
    isShowing: false,
  },
  {
    id: 3,
    name: "Avengers 3",
    year: 2002,
    isShowing: true,
  },
];
