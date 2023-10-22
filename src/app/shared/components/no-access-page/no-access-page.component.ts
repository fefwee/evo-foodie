import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-no-access-page',
  templateUrl: './no-access-page.component.html',
  styleUrls: ['./no-access-page.component.css']
})
export class NoAccessPageComponent {

  constructor(private location: Location) {
  }

  goBack() {
    this.location.back();
  }

}
