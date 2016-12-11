import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CallPage } from '../call/call';

/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  form = {
    url: '',
    ws: ''
  };

  constructor(public navCtrl: NavController) {}

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }


  goToCall() {
    this.navCtrl.push(CallPage,{url: this.form.url, ws: this.form.ws });
  }

}
