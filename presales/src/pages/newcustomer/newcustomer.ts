import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { CustomerPage } from '../customer/customer';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the NewcustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newcustomer',
  templateUrl: 'newcustomer.html',
})
export class NewcustomerPage {
	customer = { customer_name: ''};

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiProvider: RestapiProvider, public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewcustomerPage');
  }

  ionAdd(customer) {
  	this.restapiProvider.addCustomer(this.customer)
  	.then((result) =>{
  		console.log(result);
      let alert = this.alertCtrl.create({
        title: 'Berhasil Disimpan',
        subTitle: 'Data Customer Berhasil Disimpan',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(CustomerPage);
        }
      }]
      });
      alert.present();
  	}, (err) => {
  		console.log(err);
  	});
  }

  ionAbout() {
    this.navCtrl.push(AboutPage);
  }
  ionContact() {
    this.navCtrl.push(ContactPage);
  }
  ionHome() {
    this.navCtrl.push(HomePage);
  }

}
