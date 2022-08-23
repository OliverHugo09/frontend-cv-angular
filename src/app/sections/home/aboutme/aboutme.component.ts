import { Component, OnDestroy, OnInit } from '@angular/core';
import { Aboutme } from '../../../models/admin/aboutme';
import { AboutmeService } from '../../../service/admin/aboutme.service';
import { Media } from '../../../models/admin/media';
import { MediaService } from '../../../service/admin/media.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit, OnDestroy {

  private subscriptions: Array<Subscription> = [];
  aboutmes: Aboutme[];
  medias: Media[];

  constructor(private service: AboutmeService,private servicemedia: MediaService) { }

  ngOnInit(): void {
    var newSubs = this.service.getAboutmes().subscribe(
      next => this.aboutmes = next
    );
    this.subscriptions.push(newSubs);

    var newSubs = this.servicemedia.getMedias().subscribe(
      next => this.medias = next
    );
    this.subscriptions.push(newSubs);
  }

  ngOnDestroy() {
    for (const subs of this.subscriptions) {
      subs.unsubscribe();
   }
 }

}