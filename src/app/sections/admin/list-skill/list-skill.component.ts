import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Skill } from 'src/app/models/admin/skill';
import { SkillService } from 'src/app/service/admin/skill.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'app-list-skill',
  templateUrl: './list-skill.component.html',
  styleUrls: ['./list-skill.component.css']
})
export class ListSkillComponent implements OnInit{

  private subscriptions: Array<Subscription> = [];
  skills: Skill[];

  constructor(private service: SkillService) { }

   ngOnInit(): void {
    const newSubs = this.service.getSkills().subscribe(
      next => this.skills = next
    );
    this.subscriptions.push(newSubs);
  }

  deleteSkill(id:number){
    if(confirm('Delete this skill?')){
      const newSubs = this.service.deleteSkill(id).subscribe(
        () => this.skills = this.skills.filter( f => f.id != id)
      );
      this.subscriptions.push(newSubs);
    }
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}
