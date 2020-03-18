import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {DaysOffComponent} from './_days-off/days-off.component';

const routes: Routes = [
  {
    path: '',
    component: DaysOffComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DaysOffRoutingModule { }
