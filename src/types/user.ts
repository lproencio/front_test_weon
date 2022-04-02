interface User {
  _id: String;
  type: String;
  name: String;
  document: String;
}

interface listUser {
  total_pages: number;
  total_users: number;
  users: User[];
}

export { User, listUser };
