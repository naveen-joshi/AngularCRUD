import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dateValidator } from './validators/custom.validator';

import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-create-account',
  templateUrl: './create-account.component.html',
  styleUrls: ['./create-account.component.css'],
})
export class CreateAccountComponent implements OnInit {
  type: string = '';
  accountForm: FormGroup;
  submitted = false;
  occupationData = ['Salaried', 'Self Employed', 'Student'];

  constructor(
    private activatedRoute: ActivatedRoute,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.type = this.activatedRoute.snapshot.paramMap.get('accountType');
    this.accountForm = this.formBuilder.group({
      customerName: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z,]+(\\s?[a-zA-Z,])*$'),
        ],
      ],
      dateOfBirth: ['', [Validators.required, dateValidator]],
      PANNumber: [
        '',
        [
          Validators.required,
          Validators.pattern('([A-Z]){5}([0-9]){4}([A-Z]){1}$'),
        ],
      ],
      occupation: ['', Validators.required],
      sourceOfIncome: ['', Validators.required],
      depositAmount: ['', [Validators.required]],
    });
  }

  get f() {
    return this.accountForm.controls;
  }

  onSubmit() {
    this.submitted = true;
  }
}
