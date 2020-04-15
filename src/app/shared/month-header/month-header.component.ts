import { Component, OnInit } from '@angular/core';

import { generateCalendar } from '../../core/helpers/CalendarHelper';
import {CalendarService} from "../../core/services/calendar.service";

@Component({
  selector: 'app-month-header',
  templateUrl: './month-header.component.html',
  styleUrls: ['./month-header.component.css']
})
export class MonthHeaderComponent implements OnInit {

  referenceDate = null;

  constructor(
    private calendarService: CalendarService
  ) {

    calendarService.referenceDate$.subscribe(response => {
      this.referenceDate = response;
    });

  }

  ngOnInit() {

  }

  prev() {
    this.calendarService.setReferenceDate(this.referenceDate.subtract(1, 'month'));
  }

  next() {
    this.calendarService.setReferenceDate(this.referenceDate.add(1, 'month'));
  }

}
