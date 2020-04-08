import { Component, OnInit } from '@angular/core';
import {CalendarService} from "../../core/services/calendar.service";

@Component({
  selector: 'app-days-off',
  templateUrl: './days-off.component.html',
  styleUrls: ['./days-off.component.css'],
  providers: [CalendarService]
})
export class DaysOffComponent implements OnInit {

  constructor(
    private calendarService: CalendarService
  ) {
    calendarService.referenceDate$.subscribe(response => {
      console.log('"In constructor', response);
    });
  }

  ngOnInit() {

    this.calendarService.setReferenceDate(null);

  }

}
