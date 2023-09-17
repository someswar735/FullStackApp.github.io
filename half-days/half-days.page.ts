import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-half-days',
  templateUrl: './half-days.page.html',
  styleUrls: ['./half-days.page.scss'],
})
export class HalfDaysPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openImageInNewTab(_imageUrl: string) {
    window.open('assets/half_days_1.png', '_blank');
  }
  
  openImageInNewTab1(_imageUrl: string) {
    window.open('assets/half_days_2.png', '_blank');
  }
}
