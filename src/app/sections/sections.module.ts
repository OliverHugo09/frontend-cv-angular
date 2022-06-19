import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './home/footer/footer.component';
import { FreetimeComponent } from './home/freetime/freetime.component';
import { SkillComponent } from './home/skill/skill.component';
import { ExperienceComponent } from './home/experience/experience.component';
import { NavbarComponent } from './home/navbar/navbar.component';
import { AboutmeComponent } from './home/aboutme/aboutme.component';
import { FormComponent } from './home/form/form.component';
import { NavbarAdminComponent } from './admin/navbar-admin/navbar-admin.component';
import { RouterModule } from '@angular/router';
import { PanelAdminComponent } from './admin/panel-admin/panel-admin.component';
import { ListAboutmeComponent } from './admin/list-aboutme/list-aboutme.component';
import { ListFreetimeComponent } from './admin/list-freetime/list-freetime.component';
import { ListSkillComponent } from './admin/list-skill/list-skill.component';
import { ListExperienceComponent } from './admin/list-experience/list-experience.component';
import { ListContactComponent } from './admin/list-contact/list-contact.component';


@NgModule({
  declarations: [
    FooterComponent,
    FreetimeComponent,
    SkillComponent,
    ExperienceComponent,
    NavbarComponent,
    AboutmeComponent,
    FormComponent,
    NavbarAdminComponent,
    PanelAdminComponent,
    ListAboutmeComponent,
    ListFreetimeComponent,
    ListSkillComponent,
    ListExperienceComponent,
    ListContactComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    FooterComponent,
    FreetimeComponent,
    SkillComponent,
    ExperienceComponent,
    NavbarComponent,
    AboutmeComponent,
    FormComponent,
    NavbarAdminComponent,
    PanelAdminComponent,
  ]
})
export class SectionsModule { }
