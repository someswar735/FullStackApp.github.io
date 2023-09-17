import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';

import { Router } from '@angular/router';

@Component({
  selector: 'app-animation',
  templateUrl: './animation.page.html',
  styleUrls: ['./animation.page.scss'],
})
export class AnimationPage implements OnInit {

  constructor( public router:Router, public loadingCtrl: LoadingController) 
  { }
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Redirecting To Login Page,Wait...,',
      duration: 1000,
      spinner: 'circles',
      cssClass: 'custom-loading',

    });

    loading.present();
  }

  ngOnInit() {
  }
 RedirectToOtherPage(){

  this.router.navigate(['/login']);
 }

 
}