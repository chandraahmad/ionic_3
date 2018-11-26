import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RevenuemonthPage } from '../revenuemonth/revenuemonth';

/**
 * Generated class for the RevenueplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revenueplan',
  templateUrl: 'revenueplan.html',
})
export class RevenueplanPage {
	revenueyears: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getRevenueplan()
  	.then(data => {
  		this.revenueyears = data;
  		console.log(data);
  	});
  }

  ionRevenuemonth(pipeline, employees_name) {
  	this.navCtrl.push(RevenuemonthPage, {pipeline: pipeline, employees_name: employees_name});
  }
  
  ionAbout(employees_name) {
    this.navCtrl.push(AboutPage, {employees_name: employees_name});
  }
  ionContact(employees_name) {
    this.navCtrl.push(ContactPage, {employees_name: employees_name});
  }
  ionHome(employees_name) {
    this.navCtrl.push(HomePage, {employees_name: employees_name});
  }

}
