import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EditprojectPage } from '../editproject/editproject';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the TypeprojectlistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-typeprojectlist',
  templateUrl: 'typeprojectlist.html',
})
export class TypeprojectlistPage {
	projecttype: string;
	type_project_name: string;
	projectlist: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, public navParams: NavParams, public restapiProvider: RestapiProvider) {
  		this.projecttype = navParams.get('type_project_name');
  		console.log(this.projecttype);
  }

  ionViewDidLoad(type_project_name) {
  	this.restapiProvider.getbyidTypeproject(this.projecttype)
	    .then(data => {
	      this.projectlist = data;
	    });
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

  iongetidproject(id_proj, employees_name) {
    this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
  }

}
