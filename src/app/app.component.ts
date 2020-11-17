import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { DlgDemoComponent } from './dlg-demo/dlg-demo.component';
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
  constructor(private store: Store<PersonState>, private dialogService: MatDialog) {
    this.fetchingInProgress$ = store.select(PersonSelectors.selectFetching);
    this.personList$ = store.select(PersonSelectors.selectList).pipe(
      map(l => {
        if (l.length > 0) {
          const dialogRef = this.dialogService.open(DlgDemoComponent, {
            data: l
          });
        }
        return l;
      }
      ));
  }

  loadPersonList(): any {
    this.store.dispatch(PersonActions.LoadPersonList());
  }
}
