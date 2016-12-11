import { Component } from '@angular/core';
import { NavController,NavParams } from 'ionic-angular';

/*
  Generated class for the Call page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-call',
  templateUrl: 'call.html'
})
export class CallPage {
  public url:any;
  public ws:any;

  constructor(public navCtrl: NavController,public params:NavParams) {
    this.url = params.get("url");
    this.ws = params.get("ws");
  }

  ionViewDidLoad() {
    console.log('Loaded Call Page');
  }

}
