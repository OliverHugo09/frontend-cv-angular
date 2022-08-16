import { Component, OnInit } from '@angular/core';
import { Skill } from 'src/app/models/admin/skill';
import { SkillService } from 'src/app/service/admin/skill.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-edit-skill',
  templateUrl: './edit-skill.component.html',
  styleUrls: ['./edit-skill.component.css']
})
export class EditSkillComponent implements OnInit {

  skill: Skill = new Skill();

  constructor(
  ) { }

  ngOnInit() {
    // this.categoryService.getCategories().subscribe(next => this.categories = next);
    //let id = +this.route.snapshot.paramMap.get('id');
    //this.createOrLoadSkill(id); 
  }

}