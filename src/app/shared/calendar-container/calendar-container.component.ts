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
      this.generateCalendar();
    });
  }

  ngOnInit() {
    this.calendarService.setReferenceDate(moment());
  }

  generateCalendar() {
    this.calendar = generateCalendar(this.referenceDate);
  }

}
