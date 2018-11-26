import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { TypeprojectlistPage } from '../typeprojectlist/typeprojectlist';
import { SearchprojectPage } from '../searchproject/searchproject';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the TypeprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeproject',
  templateUrl: 'typeproject.html',
})
export class TypeprojectPage {
	projecttypes: any;
  projecttype: any;
  type_project_name: string;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getTypeproject()
    .then(data => {
      this.projecttypes = data;
    });
    console.log('ionViewDidLoad TypeprojectPage');
  }
  // ionGetbyidproject(type_project_name, projecttype, employees_name) {
  //     this.navCtrl.push(TypeprojectlistPage, {type_project_name: type_project_name, employees_name: employees_name});
  //     console.log(type_project_name);
  // }

  ionGetbyidproject(type_project_name, projecttype, employees_name) {
      this.navCtrl.push(SearchprojectPage, {type_project_name: type_project_name, employees_name: employees_name});
      console.log(type_project_name);
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
