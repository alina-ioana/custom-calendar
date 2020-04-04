import { Component, OnInit } from '@angular/core';
import { DaysOfTheWeek, daysOfTheWeek } from '../../core/constants/daysOffTheWeek';

@Component({
  selector: 'app-week-header',
  templateUrl: './week-header.component.html',
  styleUrls: ['./week-header.component.css']
})
export class WeekHeaderComponent implements OnInit {

  daysOfWeek: DaysOfTheWeek[] = daysOfTheWeek;

  constructor() { }

  ngOnInit() {

  }

}
