import { Component, OnInit, Input } from '@angular/core';
import basic_form_vm from './basic-form';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-validation-messages',
  templateUrl: './validation-messages.component.html',
  styleUrls: ['./validation-messages.component.css']
})
export class ValidationMessagesComponent implements OnInit {

  @Input() vm = '';
  @Input() control;
  @Input() controlName;

  validationMessages = null;

  constructor() { }

  ngOnInit() {
    switch(this.vm) {
      case 'basic_form':
        this.validationMessages = basic_form_vm;
        break;
    }
  }

}
