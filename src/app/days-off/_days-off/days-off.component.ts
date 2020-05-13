import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../core/services/calendar.service";
import {FormBuilder, FormControl, FormGroup, Validators, AbstractControl} from "@angular/forms";
import { CustomValidators } from 'src/app/shared/validation-messages/CustomValidators';

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
      firstName: ['', [Validators.required, CustomValidators.fixedLength(5), CustomValidators.isNumber()]],
      lastName: ['', [Validators.required]],
    });
  }

  toggleDaysOffForm() {
    this.displayDaysOffForm = !this.displayDaysOffForm;
  }

  get firstName(): AbstractControl {return this.form.get('firstName')}
  get lastName(): AbstractControl {return this.form.get('lastName')}

  changeFirstName(value) {
    console.log(this.firstName)
  }

}
