import { Component, OnInit } from '@angular/core';
import {Router}from '@angular/router';
import { LoadingController } from '@ionic/angular';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastController } from '@ionic/angular';
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  myForm!: FormGroup; // define the myForm property

  constructor(private router: Router, public loadingCtrl: LoadingController, private userService: UserService, private formBuilder: FormBuilder, private toastController: ToastController) { }
  submit() {
    // Get the entered email and password values
    const email = (<HTMLInputElement>document.getElementsByName('user-email')[0]).value;
    const password = (<HTMLInputElement>document.getElementsByName('password')[0]).value;

    // Log the values to the console
    console.log('Email:', email);
    console.log('Password:', password);

    // Store the user details in the service
    this.userService.setUserDetails({ email, password });
  }
  ngOnInit() {
    this.myForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required]
    });
  }
  logIn()
    {
     //code foe logging in
     this.router.navigate(['/tabs']);    }

     async showLoading() {
      const loading = await this.loadingCtrl.create({
        message: 'Authenticating...,',
        duration: 1000,
        cssClass: 'custom-loading',
  
      });
  
      loading.present();
    }
  

  async presentToast(position: 'top') {
    const toast = await this.toastController.create({
     message: 'Logged in Successfully!',
     cssClass: 'toast-message' ,
     duration: 1500,
     position: position
     });

   await toast.present();
  }
}
