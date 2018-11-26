import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OrderplanprojectPage } from '../orderplanproject/orderplanproject';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the OrderplanmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderplanmonth',
  templateUrl: 'orderplanmonth.html',
})
export class OrderplanmonthPage {
	years = this.navParams.get('pipeline');
	showmonth: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getMonth()
  	.then(data => {
  		this.showmonth = data;
  	});
    console.log('ionViewDidLoad OrderplanmonthPage');
  }
  ionOrderdetail(years, month) {
  	this.navCtrl.push(OrderplanprojectPage, {years: years, month: month});
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
