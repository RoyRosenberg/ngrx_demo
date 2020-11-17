import { Component, Inject, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

import { Person } from '../models/person';

@Component({
  selector: 'app-dlg-demo',
  templateUrl: './dlg-demo.component.html',
  styleUrls: ['./dlg-demo.component.scss']
})
export class DlgDemoComponent implements OnInit {

  constructor(@Inject(MAT_DIALOG_DATA) public data: Person[]) { }

  ngOnInit(): void {
  }

}
