import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EditprojectPage } from '../editproject/editproject';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the TypecustomerlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typecustomerlist',
  templateUrl: 'typecustomerlist.html',
})
export class TypecustomerlistPage {
	customertype: string;
	customer_type: string;
	customerlist: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiProvider: RestapiProvider) {
  this.customertype = navParams.get('customer_type');
  console.log(this.customertype);
  }

  ionViewDidLoad(customer_type) {
  	this.restapiProvider.getbyidTypecustomer(this.customertype)
	    .then(data => {
	      this.customerlist = data;
	    });
  	console.log(customer_type);
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

  iongetidproject(id_proj, employees_name) {
    this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
  }

}
