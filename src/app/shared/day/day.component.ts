import { Component, OnInit, Input } from '@angular/core';
import {CalendarService} from "../../core/services/calendar.service";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day;
  @Input() referenceDate;

  constructor(
    public calendarService: CalendarService,
  ) { }

  ngOnInit() {

  }

  isCurrentDate() {
    return this.calendarService.getCurrentDate().isSame(this.day, 'day');
  }

  isCurrentMonth() {
   return this.referenceDate.isSame(this.day, 'month');
  }

  getDayClass() {
    if(!this.isCurrentMonth()) {
      return 'prev-next-month';
    }
    return this.isCurrentDate() ? 'current-date' : '';
  }

}
