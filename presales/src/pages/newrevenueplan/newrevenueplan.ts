import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the NewrevenueplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-newrevenueplan',
  templateUrl: 'newrevenueplan.html',
})
export class NewrevenueplanPage {
	revenue = {id_proj: '', month_q: '', amount: ''};
	project: number;
	projectlist: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams, 
  	public restapiProvider: RestapiProvider,
  	public alertCtrl: AlertController) {
  	this.project = this.navParams.get('id_proj');
    console.log(this.project);
  }

  ionViewDidLoad(id_proj) {
  	this.restapiProvider.getbyidRevenueidproject(this.project)
  	.then(data => {
  		this.projectlist = data
  	});
    console.log(this.projectlist);
  }

  ionAddrevenue(revenue) {
  	this.restapiProvider.addRevenue(this.revenue)
  	.then((data) => {
  		console.log(data);
  		let confirm = this.alertCtrl.create({
      title: 'Data Successfully Saved',
      message: 'Do You Want to Send Feedback Revenue Plan Response ?',
      buttons: [
        {
          text: 'No',
          handler: () => {
          	this.navCtrl.push(HomePage);
            console.log('Yang dikliknya NO');
          }
        },
        {
          text: 'Yes',
          handler: () => {
          	this.navCtrl.push(NewrevenueplanPage);
            console.log('Yang dikliknya Yes');
          }
        }
      ]
    });
    confirm.present();
  	});
  }

  ionAbout() {
    this.navCtrl.push(AboutPage);
  }
  ionContact() {
    this.navCtrl.push(ContactPage);
  }
  ionHome() {
    this.navCtrl.push(HomePage);
  }

}
