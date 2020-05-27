import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AdminGuard} from "./core/guards/admin.guard";

const routes: Routes = [
  {
    path: 'days-off',
    loadChildren: () => import('./days-off/days-off.module').then(module => module.DaysOffModule),
    // canActivate: [AdminGuard]
  },
  {
    path: 'authentication',
    loadChildren: () => import('./authentication/authentication.module').then(module => module.AuthenticationModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
