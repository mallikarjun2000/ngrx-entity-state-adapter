export interface User {
  id: 1;
  firstname: string;
  lastname: string;
  handle: string;
}

export interface UserState {
  users: User[];
}
