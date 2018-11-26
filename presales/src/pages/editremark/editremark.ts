import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { EditprojectPage } from '../editproject/editproject';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditremarkPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editremark',
  templateUrl: 'editremark.html',
})
export class EditremarkPage {
	remark: any;
	editremark = {id_proj: '', id_remark_plan: '', remark: '', date_target: '', employees_name: '', status_remark: '', project_name: ''}
	remarks: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider,
  	public alertCtrl: AlertController) {
  	this.remark = this.navParams.get('id_remark_plan'); 
  	console.log(this.remark);
  }

  ionViewDidLoad() {
  	this.restapiProvider.getbyidEditremark(this.remark)
  	.then(data => {
  		this.editremark.id_proj = data[0].id_proj;
  		this.editremark.project_name = data[0].project_name;
  		this.editremark.id_remark_plan = data[0].id_remark_plan;
  		this.editremark.remark = data[0].remark;
  		this.editremark.date_target = data[0].date_target;
  		this.editremark.employees_name = data[0].employees_name;
  		this.editremark.status_remark = data[0].status_remark; 
  	});
  	this.restapiProvider.getRemark()
    .then(data => {
      this.remarks = data;
    });
    console.log('ionViewDidLoad EditremarkPage');
  }

  ionUpdateremark(id_proj, employees_name) {
  	this.restapiProvider.editRemark(this.editremark)
  	.then(data => {
  		console.log('update sukses');
  		let alert = this.alertCtrl.create({
        title: 'Remark Plan',
        subTitle: 'Successfully Changed',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
        }
      }]
      });
      alert.present();
  	});
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
