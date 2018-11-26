import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { EditprojectPage } from '../editproject/editproject';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

/**
 * Generated class for the EditrevenuePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editrevenue',
  templateUrl: 'editrevenue.html',
})
export class EditrevenuePage {
	revenue: any;
	editrevenue = {id_proj: '', id_revenue_plan: '', amount: '', month_q: '', project_name: ''}
	revenues: any;
  employees_name = this.navParams.get('employees_name');
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider,
  	public alertCtrl: AlertController) {
  	this.revenue = this.navParams.get('id_revenue_plan'); 
  	console.log(this.revenue);
  }

  ionViewDidLoad() {
  	this.restapiProvider.getbyidEditrevenue(this.revenue)
  	.then(data => {
  		this.editrevenue.id_proj = data[0].id_proj;
  		this.editrevenue.project_name = data[0].project_name;
  		this.editrevenue.id_revenue_plan = data[0].id_revenue_plan;
  		this.editrevenue.amount = data[0].amount;
  		this.editrevenue.month_q = data[0].month_q;
  	});
    console.log('ionViewDidLoad EditrevenuePage');
  }

  ionUpdaterevenue(id_proj, employees_name) {
  	this.restapiProvider.editRevenue(this.editrevenue)
  	.then(data => {
  		console.log('update sukses');
  		let alert = this.alertCtrl.create({
        title: 'Revenue Plan',
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

  format(valString) {
    if (!valString) {
        return '';
    }
    let val = valString.toString();
    const parts = this.unFormat(val).split(this.DECIMAL_SEPARATOR);
    return parts[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, this.GROUP_SEPARATOR)
  }
  unFormat(val) {
      if (!val) {
          return '';
      }
      val = val.replace(/^0+/, '').replace(/\D/g,'');
      if (this.GROUP_SEPARATOR === ',') {
          return val.replace(/,/g, '');
      } else {
          return val.replace(/\./g, '');
      }
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
