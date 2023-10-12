import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/shared/user.model';

export const selectUsersFeatureState =
  createFeatureSelector<UserState>('users');

export const selectAllUsers = createSelector(
  selectUsersFeatureState,
  (usersState: UserState) => usersState.users
);
