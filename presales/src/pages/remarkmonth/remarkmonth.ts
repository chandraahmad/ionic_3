import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RemarkprojectPage } from '../remarkproject/remarkproject';
import { SearchprojectPage } from '../searchproject/searchproject';

import { RestapiProvider } from '../../providers/restapi/restapi';
/**
 * Generated class for the RemarkmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remarkmonth',
  templateUrl: 'remarkmonth.html',
})
export class RemarkmonthPage {
	years = this.navParams.get('pipeline');
	showmonth: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getMonth()
  	.then(data => {
  		this.showmonth = data;
  	});
  	console.log(this.years);
  }
  // ionRemarkdetail(years, month, employees_name) {
  // 	this.navCtrl.push(RemarkprojectPage, {years: years, month: month, employees_name: employees_name});
  // }

  ionRemarkdetail(years, month, employees_name) {
    this.navCtrl.push(SearchprojectPage, {years: years, month: month, employees_name: employees_name});
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
