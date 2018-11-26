import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { TypeprojectPage } from '../typeproject/typeproject';
import { TypecustomerPage } from '../typecustomer/typecustomer';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the TypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-type',
  templateUrl: 'type.html',
})
export class TypePage {
	searchQuery: string = '';
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public restapiProvider: RestapiProvider, 
    public alertCtrl: AlertController) {
  }

  ionViewDidLoad() {
    console.log('Welcome To Type');
  }
  ionTypecustomer(employees_name) {
    this.navCtrl.push(TypecustomerPage, {employees_name: employees_name});
  }
  ionTypeproject(employees_name) {
    this.navCtrl.push(TypeprojectPage, {employees_name: employees_name});
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
