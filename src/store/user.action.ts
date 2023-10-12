import { Action } from '@ngrx/store';
import { User } from 'src/app/shared/user.model';

export enum UserActionTypes {
  LIST_USERS = 'List users',
  ADD_USER = 'Add User',
  DELETE_USER = 'Delete User',
}

export class AddUser implements Action {
  public readonly type = UserActionTypes.ADD_USER;
  constructor(public user: User) {}
}
export class ListUsers implements Action {
  readonly type = UserActionTypes.LIST_USERS;
}
export class DeleteUser implements Action {
  readonly type = UserActionTypes.DELETE_USER;
  constructor(public user: User) {}
}

export type UserActions = AddUser | ListUsers | DeleteUser;
