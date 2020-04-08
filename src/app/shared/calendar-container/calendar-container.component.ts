import {Component, OnInit} from '@angular/core';

import * as moment from 'moment';
import { generateCalendar } from '../../core/helpers/CalendarHelper';
import { CalendarService } from "../../core/services/calendar.service";

@Component({
  selector: 'app-calendar-container',
  templateUrl: './calendar-container.component.html',
  styleUrls: ['./calendar-container.component.css'],
  providers: [CalendarService]
})
export class CalendarContainerComponent implements OnInit {

  calendar = [];
  referenceDate;

  constructor(
    private calendarService: CalendarService
  ) {
    calendarService.referenceDate$.subscribe(response => {
      this.referenceDate = response;
      console.error('"In constructor', this.referenceDate);
    });
  }

  ngOnInit() {
    this.generateCalendar();
  }

  generateCalendar() {
    this.referenceDate = moment();

    this.calendarService.setReferenceDate(this.referenceDate);
    this.calendar = generateCalendar(this.referenceDate);
  }

}
