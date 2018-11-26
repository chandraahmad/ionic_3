import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { TypecustomerlistPage } from '../typecustomerlist/typecustomerlist';
import { SearchprojectPage } from '../searchproject/searchproject';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the TypecustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typecustomer',
  templateUrl: 'typecustomer.html',
})
export class TypecustomerPage {
	customertypes: any;
  customertype: any;
  customer_type: string;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getTypecustomer()
    .then(data => {
      this.customertypes = data;
    });
    console.log('ionViewDidLoad TypecustomerPage');
  }

  // ionGetbyidcustomer(customer_type, customertype, employees_name) {
  //     this.navCtrl.push(TypecustomerlistPage, {customer_type: customer_type, employees_name: employees_name});
  // }

  ionGetbyidcustomer(customer_type, customertype, employees_name) {
      this.navCtrl.push(SearchprojectPage, {customer_type: customer_type, employees_name: employees_name});
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
