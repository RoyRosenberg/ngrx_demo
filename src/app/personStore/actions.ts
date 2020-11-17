import { createAction, props } from '@ngrx/store';

import { Person } from '../models/person';


export const LoadPersonList = createAction('[Person] Load Person List');
export const LoadPersonListSuccess = createAction('[Person] Load Person List Success',
    props<{ list: Person[] }>());
export const LoadPersonListFail = createAction('[Person] Load Person List Fail',
    props<{ message: string }>());
export const GetDemoList = createAction('[Person] Get Demo List');
// export const CreateNewPerson = createAction('[Person] Create New');
// export const SelectCustomer = createAction('[Person] Select', props<{ id: number }>());


