import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-appreciations',
  templateUrl: './appreciations.page.html',
  styleUrls: ['./appreciations.page.scss'],
})
export class AppreciationsPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  openImageInNewTab(_imageUrl: string) {
    window.open('assets/appreciation1.png', '_blank');
  }
  
  openImageInNewTab1(_imageUrl: string) {
    window.open('assets/appreciation2.png', '_blank');
  }

  openImageInNewTab2(_imageUrl: string) {
    window.open('assets/appreciation3.png', '_blank');
  }


}
