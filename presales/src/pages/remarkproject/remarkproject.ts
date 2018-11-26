import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EditprojectPage } from '../editproject/editproject';

/**
 * Generated class for the RemarkprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remarkproject',
  templateUrl: 'remarkproject.html',
})
export class RemarkprojectPage {
	projectall: any;
	month: any;
	project: any;
  employees_name = this.navParams.get('employees_name');

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
    console.log('ionViewDidLoad RemarkprojectPage');
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

  ionRemarkdetail(id_proj, employees_name) {
  	this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
  }

}
