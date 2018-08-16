import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {
  name = new FormControl('');

  constructor() { }

  ngOnInit() {
  }
  updateName() {
    this.name.setValue('Nancy');
  }
}
