import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CalendarContainerComponent } from '../shared/calendar-container/calendar-container.component';
import { MonthHeaderComponent } from '../shared/month-header/month-header.component';
import { WeekHeaderComponent } from '../shared/week-header/week-header.component';
import { WeekComponent } from '../shared/week/week.component';
import { DayComponent } from '../shared/day/day.component';
import { ValidationMessagesComponent } from './validation-messages/validation-messages.component';

@NgModule({
  declarations: [
    CalendarContainerComponent,
    MonthHeaderComponent,
    WeekHeaderComponent,
    WeekComponent,
    DayComponent,
    ValidationMessagesComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CalendarContainerComponent,
    ValidationMessagesComponent,
  ],
})
export class SharedModule { }
