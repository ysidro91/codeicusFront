import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show-info',
  templateUrl: './show-info.component.html',
  styles: []
})
export class ShowInfoComponent {

  title:string;

  constructor(
    private activatedRoute:ActivatedRoute
  ) {
    this.title = this.activatedRoute.snapshot.data['title'];
   }

}
