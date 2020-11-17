import { createFeatureSelector, createSelector } from '@ngrx/store';

import { PersonState } from './reducer';

export interface AppState {
    person: PersonState;
}

export const selectPerson = createFeatureSelector<PersonState>('person');

export const selectFetching = createSelector(
    selectPerson,
    (personState) => personState.fetching
);

export const selectList = createSelector(
    selectPerson,
    (personState) => personState.list
);


