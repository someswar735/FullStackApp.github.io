import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-swecha-fest',
  templateUrl: './swecha-fest.page.html',
  styleUrls: ['./swecha-fest.page.scss'],
})
export class SwechaFestPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  openImageInNewTab1(_imageUrl: string) {
    window.open('assets/swecha-fest1.png', '_blank');
  }
  
  openImageInNewTab2(_imageUrl: string) {
    window.open('assets/swecha2.png', '_blank');
  }

  openImageInNewTab3(_imageUrl: string) {
    window.open('assets/swecha3.png', '_blank');
  }
}
