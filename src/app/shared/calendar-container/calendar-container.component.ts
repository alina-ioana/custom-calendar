import {Component, OnInit} from '@angular/core';

import moment from 'moment';
import { generateCalendar } from '../../core/helpers/CalendarHelper';

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.css']
})
export class CalendarContainerComponent implements OnInit {

  calendar = [];

  constructor() {

  }

  ngOnInit() {
    this.generateCalendar();

  }

  generateCalendar() {
    let currentDay = moment();
    this.calendar = generateCalendar(currentDay);
  }

}
