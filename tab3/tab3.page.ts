import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-tab3',
  templateUrl: './tab3.page.html',
  styleUrls: ['./tab3.page.scss'],
})
export class Tab3Page implements OnInit {

title = 'Notification &';

  constructor( public router:Router, public loadingCtrl: LoadingController) 
  { }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Redirecting To Fest details Page,Wait...,',
      duration: 1000,
      spinner: 'circles',
      cssClass: 'custom-loading',

    });

    loading.present();
  }

  ngOnInit() {
  }
 RedirectToOtherPage(){

  this.router.navigate(['/swecha-fest']);
 }

 async showPresenting() {
  const loading = await this.loadingCtrl.create({
    message: 'Redirecting To Fest details Page,Wait...,',
    duration: 1000,
    spinner: 'circles',
    cssClass: 'custom-loading',

  });

  loading.present();
}
 
RedirectToAnotherPage(){

  this.router.navigate(['/sigma']);
 }

 async showHalfPresenting() {
  const loading = await this.loadingCtrl.create({
    message: 'Redirecting To Half Days Page,Wait...,',
    duration: 1000,
    spinner: 'circles',
    cssClass: 'custom-loading',

  });

  loading.present();
}

 RedirectToHalfDaysPage(){

  this.router.navigate(['/half-days']);
 }

 RedirectToAppreciationsPage(){

  this.router.navigate(['/appreciations']);
 }

 RedirectToRegistrationFormPage(){

  this.router.navigate(['/registration-form']);
 }

}