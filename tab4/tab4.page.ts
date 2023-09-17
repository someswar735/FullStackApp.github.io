import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  userDetails: any;

  constructor( public router:Router,private userService: UserService, public loadingCtrl: LoadingController) 
  { }
  ionViewDidEnter() {
    // Retrieve the user details from the service
    this.userDetails = this.userService.getUserDetails();
  }
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

    this.router.navigate(['/developer']);
   }
}
