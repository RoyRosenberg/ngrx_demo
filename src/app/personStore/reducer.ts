import { Action, createReducer, on } from '@ngrx/store';

import { Person } from '../models/person';
import * as PersonActions from './actions';

export interface PersonState {
    fetching: boolean;
    list: Person[];
    errorMessage: string;
    currentPersonId: number;
}

const initState123: PersonState = { fetching: false, list: [], errorMessage: '', currentPersonId: 0 };

const personReducer = createReducer(initState123,
    on(PersonActions.LoadPersonList, state => {
        // localStorage.setItem
        return { ...state, fetching: true };
    }),
    on(PersonActions.LoadPersonListSuccess, (state, payload) => ({ ...state, fetching: false, list: payload.list, errorMessage: '' })),
    on(PersonActions.LoadPersonListFail, (state, payload) => ({ ...state, fetching: false, list: [], errorMessage: payload.message })),
    on(PersonActions.GetDemoList, state => ({ ...state, fetching: false, list: [{ id: 1, name: 'dd' }] }))
);

export function reducer(state: PersonState | undefined, action: Action): PersonState {
    return personReducer(state, action);
}
