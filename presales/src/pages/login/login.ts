import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { HomePage } from '../home/home';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = {username: '', password: ''};
  response = {"message":'', "employees_name":'', "id_employees":'', "username":''};
  responUserdata: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public restapiProvider: RestapiProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  ionLoginprocess(userData) {
      this.navCtrl.push(HomePage, );
  }

  ionLogin(userData) {
    let loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });
    loading.present();
    this.restapiProvider.loginAction(this.userData)
    .then(data => {
      var x = JSON.stringify(data);
      this.response = JSON.parse(x);
      setTimeout(() => {
        loading.dismiss();
      }, 500);
      if (this.response.message == "success Login") {
        this.responUserdata = data;
        console.log(this.responUserdata);
        console.log('success Login');
        this.navCtrl.push(HomePage, this.responUserdata);
      }else{
        console.log('invalid creditial');
      }
    }, (err) => {
      console.log(err);
    });
  }

}
