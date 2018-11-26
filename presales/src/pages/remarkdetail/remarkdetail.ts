import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';
/**
 * Generated class for the RemarkdetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-remarkdetail',
  templateUrl: 'remarkdetail.html',
})
export class RemarkdetailPage {
	project: any;
	id_proj: number;
	projectremark= { id_proj: '', project_name: '', customer_name: '', employees_name: '', date_remark: '', remark: '', status_remark: '',
date_target: ''} ;
	remark: any;
	remarks: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider,
  	public alertCtrl: AlertController) {
  	this.project = this.navParams.get('id_proj');
    console.log(this.project);
  }

  ionViewDidLoad() {
  	this.restapiProvider.getbyidRevenue(this.project)
  	.then(data => {
  		this.projectremark.id_proj = data[0].id_proj
  		this.projectremark.project_name = data[0].project_name;
  		this.projectremark.customer_name = data[0].customer_name;
  		this.projectremark.employees_name = data[0].employees_name;
  	});
  	this.restapiProvider.getbyidRemark(this.project)
  	.then(data => {
  		this.remark = data;
  	});
  	this.restapiProvider.getRemark()
  	.then(data => {
  		this.remarks = data;
  	});
    console.log('ionViewDidLoad RemarkdetailPage');
  }

  ionAddremark(id_proj) {
  	this.restapiProvider.addRemark(this.projectremark)
  	.then(data => {
  		this.remark = data;
  		let alert = this.alertCtrl.create({
        title: 'Saved Successfully',
        subTitle: 'Data Remark Successfully Saved',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(RemarkdetailPage, {id_proj: id_proj});
        }
      }]
      });
  		alert.present();
  	});
  }

}
