import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewrevenueplanPage } from '../newrevenueplan/newrevenueplan';

/**
 * Generated class for the RevenueplandetailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-revenueplandetail',
  templateUrl: 'revenueplandetail.html',
})
export class RevenueplandetailPage {
  revenue = {id_proj: '', month_q: '', amount: '', project_name: '', customer_name: '', employees_name: ''};
	project: number;
	id_proj: number;
	projectlist: any;
	employees: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider,
    public alertCtrl: AlertController) {
  	this.project = this.navParams.get('id_proj');
    console.log(this.project);
  }

  ionViewDidLoad(id_proj) {
  	this.restapiProvider.getbyidRevenue(this.project)
  	.then(data => {
  		this.revenue.id_proj = data[0].id_proj;
      this.revenue.month_q = data[0].month_q;
      this.revenue.amount = data[0].amount;
      this.revenue.project_name = data[0].project_name;
      this.revenue.customer_name = data[0].customer_name;
      this.revenue.employees_name = data[0].employees_name;
  	});
  	this.restapiProvider.getbyidRevenueproject(this.project)
  	.then(data => {
  		this.projectlist = data;
  	});
    console.log(this.project);
  }

  ionNew(id_proj) {
  	this.navCtrl.push(NewrevenueplanPage, {id_proj: id_proj});
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

  ionAddrevenue(id_proj) {
    this.restapiProvider.addRevenue(this.revenue)
    .then((data) => {
      console.log(data);
      let alert = this.alertCtrl.create({
        title: 'Saved Successfully',
        subTitle: 'Data Revenue Plan Successfully Saved',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(RevenueplandetailPage, {id_proj: id_proj});
        }
      }]
      });
      alert.present();

      });
  }

}
