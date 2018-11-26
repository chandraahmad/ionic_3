import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { StatuslistPage } from '../statuslist/statuslist';
import { SearchprojectPage } from '../searchproject/searchproject';

/**
 * Generated class for the StatusPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-status',
  templateUrl: 'status.html',
})
export class StatusPage {
	searchQuery: string = '';
	status: any = [{name:"~/../assets/imgs/puzzle.png", status_project_name: "ONPROGRESS"},
    {name:"~/../assets/imgs/stopwatch.png", status_project_name: "PENDING"},
    {name:"~/../assets/imgs/trophy.png", status_project_name: "WIN"},
    {name:"~/../assets/imgs/presentation.png", status_project_name: "LOSE"}];
  items: any;
  status_project_name: string;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public alertCtrl: AlertController, 
    public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
    data => {
  		this.status = data;
  	}
    console.log(this.status);
  }

  // ionGetbyidstatus(status_project_name, employees_name) {
  //   console.log(employees_name);
  //   this.navCtrl.push(StatuslistPage, {status_project_name: status_project_name, employees_name: employees_name});
  //   console.log(status_project_name);
  // }

  ionGetbyidstatus(status_project_name, employees_name) {
    console.log(employees_name);
    this.navCtrl.push(SearchprojectPage, {status_project_name: status_project_name, employees_name: employees_name});
    console.log(status_project_name);
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
