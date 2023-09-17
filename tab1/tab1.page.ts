import { Component, OnInit } from '@angular/core';
import {  LoadingController } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: './tab1.page.html',
  styleUrls: ['./tab1.page.scss'],
})
export class Tab1Page implements OnInit {
  menu: any = []
  service: any;
  constructor(public loadingController: LoadingController) { }

  ngOnInit() {
    this.presentLoading().then(() => {
      this.service.getMenuList(2).subscribe((res: { document: { records: any; }; }) => {
        this.menu = res.document.records;
        this.loadingController.dismiss();
      });
    });
  }
  async presentLoading() {
    const loading = await this.loadingController.create({
      cssClass: "my-custom-class",
      message: "Please Wait ",
      duration: 1000,
    });
    await loading.present();
  }

  goToPage(menu_id: string) {
    console.log(menu_id + "Clicked");
    
  }
}