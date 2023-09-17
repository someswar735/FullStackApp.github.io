import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { environment } from '../environments/environment';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database'

const firebaseConfig =  {
  apiKey: "AIzaSyDloHELkvQRHFSuKCi-Jt6qKV17lwkvv4o",
authDomain: "csdnew-3ef42.firebaseapp.com",
databaseURL: "https://csdnew-3ef42-default-rtdb.firebaseio.com",
projectId: "csdnew-3ef42",
storageBucket: "csdnew-3ef42.appspot.com",
messagingSenderId: "124227531442",
appId: "1:124227531442:web:773557197149ce65334fab",
measurementId: "G-Q685XH372Q"
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule
  ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],
})
export class AppModule {}
