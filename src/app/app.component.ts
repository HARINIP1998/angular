import { Component } from '@angular/core';
import { detail } from './detail';


@Component({
  selector: 'my-project',
  template: `
  <h1>{{title}}</h1>
  <ul>
    <li *ngFor="let detail of details">
      {{ detail.name }}
      </li>
  </ul>
`
})
export class AppComponent {
  title = 'BIO-DATA';

  details = [
    new detail(1,'Harini P'),
    new detail(2,'female'),
    new detail(3,'19/08/1998'),
    new detail(4,'meenaaharin1998@gmail.com'),
  ];
  mydetail= this.details[0];
}



