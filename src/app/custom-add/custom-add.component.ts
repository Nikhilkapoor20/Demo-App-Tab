import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

import { MockService } from '../app.mock-service';
import { Medicines } from './../app.mock-service';

@Component({
  selector: 'custom-add',
  templateUrl: './custom-add.component.html',
  styleUrls: ['./custom-add.component.scss']
})
export class CustomAddComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private service: MockService) { }

  ngOnInit() {
    this.createForm();
  }

  createForm() {
    this.form = this.fb.group({
      name: new FormControl('', Validators.required),
      count: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern(/[0-9]/),
      ])),
    })
  }

  saveMedicines() {
    const med: Medicines = this.form.value;
    this.service.saveMed(med);
    this.form.reset();
  }
}
