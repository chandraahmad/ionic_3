import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the OrderplanprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderplanproject',
  templateUrl: 'orderplanproject.html',
})
export class OrderplanprojectPage {
	projectall: any;
	month: any;
	project: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  	this.month = this.navParams.get('month');
  	this.project = this.navParams.get('years');
  	console.log(this.project, this.month);
  }

  ionViewDidLoad() {
  	this.restapiProvider.getbyidRevenueforproject(this.project, this.month)
  	.then(data => {
  		this.projectall = data;
  	});
    console.log('ionViewDidLoad OrderplanprojectPage');
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
