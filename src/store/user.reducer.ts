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

const usersAdapter: EntityAdapter<User> = createEntityAdapter<User>({
  selectId: (user: User) => user.handle,
});

const initialState = usersAdapter.getInitialState();

const initialUserState: UserState = {
  users: initialState,
};

export function usersReducer(
  state: UserState = initialUserState,
  action: UserActions
): UserState {
  switch (action.type) {
    case UserActionTypes.ADD_USER: {
      return {
        ...state,
        users: usersAdapter.addOne(action.user, state.users),
      };
    }

    case UserActionTypes.LIST_USERS: {
      return state;
    }

    case UserActionTypes.DELETE_USER: {
      return {
        ...state,
        users: usersAdapter.removeOne(action.user.handle, state.users),
      };
    }

    default: {
      return state;
    }
  }
}
