import { Component } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  finalPrice;

  constructor(private sharedService: SharedService) {
    this.finalPrice = this.sharedService.stateChanged$
  }

}
