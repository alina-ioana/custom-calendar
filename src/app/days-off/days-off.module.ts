import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import { DaysOffRoutingModule } from './days-off-routing.module';
import { DaysOffComponent } from './_days-off/days-off.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [DaysOffComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DaysOffRoutingModule,
    SharedModule,
  ]
})
export class DaysOffModule { }
