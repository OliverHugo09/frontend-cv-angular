import { Component, OnDestroy, OnInit } from '@angular/core';
import { Main } from '../../../models/admin/main';
import { MainService } from '../../../service/admin/main.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  mains: Main[];
  
  constructor(private service: MainService) { }

  ngOnInit(): void {
    var newSubs = this.service.getMains().subscribe(
      next => this.mains = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

  toAbout(){
      document.getElementById("about")?.scrollIntoView({behavior:"smooth"});  
  }

  toFreetime(){
    document.getElementById("freetime")?.scrollIntoView({behavior:"smooth"});  
  }
  
  toSkills(){
    document.getElementById("skills")?.scrollIntoView({behavior:"smooth"});  
  }

  toExperience(){
  document.getElementById("experience")?.scrollIntoView({behavior:"smooth"});  
  }

  toContact(){
  document.getElementById("contact")?.scrollIntoView({behavior:"smooth"});  
  }
  

}
