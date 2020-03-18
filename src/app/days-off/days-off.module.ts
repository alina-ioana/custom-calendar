import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {DaysOffRoutingModule} from './days-off-routing.module';
import { DaysOffComponent } from './_days-off/days-off.component';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [DaysOffComponent],
  imports: [
    CommonModule,
    DaysOffRoutingModule,
    SharedModule,
  ]
})
export class DaysOffModule { }
