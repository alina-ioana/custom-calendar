import { Component, OnInit, Input } from '@angular/core';
import {CalendarService} from "../../core/services/calendar.service";
import moment from "moment";

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {

  @Input() day;
  referenceDate = moment();

  constructor(
    public calendarService: CalendarService,
  ) {
    calendarService.referenceDate$.subscribe(response => {
      this.referenceDate = response;
    });
  }

  ngOnInit() {
  }

  isCurrentDate() {
    return this.calendarService.getCurrentDate().isSame(this.day, 'day');
  }

  isCurrentMonth() {
    //console.log(this.referenceDate)
    if(!this.referenceDate) return true;
   return this.referenceDate.isSame(this.day, 'month');
  }

  getDayClass() {

    if(!this.isCurrentMonth()) {
      return 'prev-next-month';
    }
    return this.isCurrentDate() ? 'current-date' : '';
  }

}
