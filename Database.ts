interface UserProps {
  id: number;
  name: string;
  username: string;
  age: number;
  nationality: string;
}

export const UserList: UserProps[] = [
  {
    id: 1,
    name: "John",
    username: "John",
    age: 20,
    nationality: "Canada",
  },
  {
    id: 2,
    name: "Mike",
    username: "Mike",
    age: 20,
    nationality: "Singapore",
  },
  {
    id: 3,
    name: "Sarah",
    username: "Sarah",
    age: 25,
    nationality: "Thailand",
  },
];
