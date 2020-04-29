import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../core/services/calendar.service";
import {FormBuilder, FormControl, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-days-off',
  templateUrl: './days-off.component.html',
  styleUrls: ['./days-off.component.css'],
})
export class DaysOffComponent implements OnInit {

  displayDaysOffForm = false;

  // Template driven
  // firstName = '';
  // lastName = '';


  form: FormGroup;

  constructor(
    private formBuilder: FormBuilder
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  submitDaysOff() {

    console.log(this.form.getRawValue());
  }

  initForm() {
    this.form = this.formBuilder.group({
      firstName: ['Alina', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  toggleDaysOffForm() {
    this.displayDaysOffForm = !this.displayDaysOffForm;
  }

  get firstName() {return this.form.get('firstName')}
  get lastName() {return this.form.get('lastName')}

}
