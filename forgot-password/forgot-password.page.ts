import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoadingController, ToastController } from '@ionic/angular';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.page.html',
  styleUrls: ['./forgot-password.page.scss'],
})
export class ForgotPasswordPage implements OnInit {

  constructor(private router: Router, public loadingCtrl: LoadingController, private toastController: ToastController) { }

  ngOnInit() {
  }
  
  register()
     {
      this.router.navigate(['/tabs']);    }

      async showPresenting() {
       const loading = await this.loadingCtrl.create({
         message: 'Authenticating...,',
         duration: 1000,
         cssClass: 'custom-loading',
   
     })
}
async presentToast(position: 'top') {
  const toast = await this.toastController.create({
   message: 'Password Has Been Changed Successfully!',
   cssClass: 'toast-message' ,
   duration: 1500,
   position: position
   });

 await toast.present();
}

}
