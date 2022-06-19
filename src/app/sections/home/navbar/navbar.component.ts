import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
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
