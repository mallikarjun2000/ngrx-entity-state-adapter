import { createEntityAdapter, EntityAdapter, EntityState } from '@ngrx/entity';
import { UserActionTypes, UserActions } from './user.action';
import { User, UserState } from 'src/app/shared/user.model';

export interface EntityUserState extends EntityState<User> {}

export const initialUsersList: User[] = [
  {
    id: 1,
    firstname: 'John',
    lastname: 'Abraham',
    handle: '@ja',
  },
];

const initialUserState: UserState = {
  users: [],
};

const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.id,
});

const initialState = usersAdapter.getInitialState();

export function usersReducer(
  state: UserState = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return {
        ...state,
        users: state.users.concat([action.user]),
      };
    }

    case UserActionTypes.LIST_USERS: {
      return {
        ...state,
        users: initialUsersList,
      };
    }

    case UserActionTypes.DELETE_USER: {
      return {
        ...state,
        users: state.users.filter((user) => user.handle !== action.user.handle),
      };
    }

    default: {
      return state;
    }
  }
}
