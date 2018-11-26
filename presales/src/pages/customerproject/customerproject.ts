import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EditprojectPage } from '../editproject/editproject';

/**
 * Generated class for the CustomerprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-customerproject',
  templateUrl: 'customerproject.html',
})
export class CustomerprojectPage {
	project: any;
	customer_name: string;
	projectlist: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public restapiProvider: RestapiProvider) {
  	this.project = this.navParams.get('customer_name');
  }

  ionViewDidLoad() {
  	this.restapiProvider.getByidcustomerproject(this.project)
  	.then(data => {
  		this.projectlist = data
  	})
    console.log(this.projectlist);
  }

  ionSearch(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.projectlist = this.projectlist.filter(project => {
        return (project.project_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.ionViewDidLoad();
    }
  }

  iongetidproject(id_proj, employees_name) {
  	this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name});
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
