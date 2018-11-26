import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { NewcustomerPage } from '../newcustomer/newcustomer';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { CustomerprojectPage } from '../customerproject/customerproject';
import { SearchprojectPage } from '../searchproject/searchproject';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the CustomerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customer',
  templateUrl: 'customer.html',
})
export class CustomerPage {
searchQuery: string = '';
	customers: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getCustomer()
  	.then(data => {
  		this.customers = data;
  	});
  }

  ionSearch(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.customers = this.customers.filter(customer => {
        return (customer.customer_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.ionViewDidLoad();
    }
  }

  ionNewpage() {
  	this.navCtrl.push(NewcustomerPage);
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

  // ionCustomerproject(customer_name, employees_name) {
  //   this.navCtrl.push(CustomerprojectPage, {customer_name: customer_name, employees_name: employees_name});
  // }

  ionCustomerproject(customer_name, employees_name) {
    this.navCtrl.push(SearchprojectPage, {customer_name: customer_name, employees_name: employees_name});
  }
}
