import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { Person } from './models/person';
import * as PersonActions from './personStore/actions';
import { PersonState } from './personStore/reducer';
import * as PersonSelectors from './personStore/selectors';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ngrx01';
  fetchingInProgress$: Observable<boolean>;
  personList$: Observable<Person[]>;
  constructor(private store: Store<PersonState>) {
    this.fetchingInProgress$ = store.select(PersonSelectors.selectFetching);
    this.personList$ = store.select(PersonSelectors.selectList);
  }

  loadPersonList(): any {
    this.store.dispatch(PersonActions.LoadPersonList());
  }
}
