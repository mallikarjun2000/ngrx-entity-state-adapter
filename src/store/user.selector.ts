import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from 'src/app/shared/user.model';
import { EntityUserState } from './user.reducer';

export const selectUsersFeatureState = createFeatureSelector<{
  users: EntityUserState;
}>('users');

export const selectAllUsers = createSelector(
  selectUsersFeatureState,
  (usersState: UserState) => Object.values(usersState.users.entities)
);
