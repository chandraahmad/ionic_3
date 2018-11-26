import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EditprojectPage } from '../editproject/editproject';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the PresalesDetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presales-detail',
  templateUrl: 'presales-detail.html',
})
export class PresalesDetailPage {
  id_proj: number;
	id_employees: number;
  presale: number;
  presaleslist: any;
  employeeprojectlist: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  	this.presale = this.navParams.get('id_presales');
    console.log(this.presale);
  }

  ionViewDidLoad(id_presales) {
    console.log(this.employees_name);
    this.restapiProvider.getByid1(this.presale)
    .then(data => {
      this.presaleslist = data;
    });
    this.restapiProvider.getByid2(this.presale)
    .then(data => {
      this.employeeprojectlist = data;
    });
    console.log(id_presales);
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
