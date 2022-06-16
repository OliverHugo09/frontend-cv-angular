import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AboutmeComponent } from '../../sections/home/aboutme/aboutme.component';

const routes: Routes = [
  { path: '', component: AdminComponent }, 
  { path: 'skills', component: AboutmeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
