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
