import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, mergeMap } from 'rxjs/operators';

import { PersonService } from '../services/person.service';
import * as PersonActions from './actions';

@Injectable()
export class PersonEffects {
    constructor(
        private actions$: Actions,
        private personService: PersonService
    ) { }

    loadPersons$ = createEffect(() => this.actions$.pipe(
        ofType(PersonActions.LoadPersonList),
        mergeMap(() => this.personService.loadPersonList()
            .pipe(
                map(result => PersonActions.LoadPersonListSuccess({ list: result }),
                    catchError(() => of(PersonActions.LoadPersonListFail({ message: 'error!' })))
                ))
        )
    ));
}
