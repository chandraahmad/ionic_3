import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { EditprojectPage } from '../editproject/editproject';
/**
 * Generated class for the StatuslistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-statuslist',
  templateUrl: 'statuslist.html',
})
export class StatuslistPage {
	statuslist: any;
	statusproject: string;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  	this.statusproject = navParams.get('status_project_name');
  	console.log(this.statusproject);
  }

  ionViewDidLoad() {
  	this.restapiProvider.getbyidStatus(this.statusproject)
    .then(data => {
      this.statuslist = data;
    });
    console.log(this.statusproject);
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
  
  ionSearch(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.statuslist = this.statuslist.filter(status => {
        return (status.project_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.ionViewDidLoad();
    }
  }

  iongetidproject(id_proj, employees_name) {
    console.log(employees_name);
    this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
  }

}
