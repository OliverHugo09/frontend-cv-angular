import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin.component';

import { AboutmeComponent } from '../../sections/home/aboutme/aboutme.component';
import { ListAboutmeComponent } from '../../sections/admin/list-aboutme/list-aboutme.component'
import { ListFreetimeComponent } from '../../sections/admin/list-freetime/list-freetime.component'
import { ListSkillComponent } from '../../sections/admin/list-skill/list-skill.component';
import { ListExperienceComponent } from '../../sections/admin/list-experience/list-experience.component';
import { ListContactComponent } from '../../sections/admin/list-contact/list-contact.component';

const routes: Routes = [
  { path: '', component: AdminComponent },
  { path: 'list-about-me', component: ListAboutmeComponent },
  { path: 'list-freetime', component: ListFreetimeComponent },
  { path: 'list-skills', component: ListSkillComponent },
  { path: 'list-experience', component: ListExperienceComponent },
  { path: 'list-contact', component: ListContactComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
