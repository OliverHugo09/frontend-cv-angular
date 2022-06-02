import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer/footer.component';
import { FreetimeComponent } from './freetime/freetime.component';
import { SkillComponent } from './skill/skill.component';
import { ExperienceComponent } from './experience/experience.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutmeComponent } from './aboutme/aboutme.component';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    FooterComponent,
    FreetimeComponent,
    SkillComponent,
    ExperienceComponent,
    NavbarComponent,
    AboutmeComponent,
    FormComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    FooterComponent,
    FreetimeComponent,
    SkillComponent,
    ExperienceComponent,
    NavbarComponent,
    AboutmeComponent,
    FormComponent,
  ]
})
export class SectionsModule { }
