import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { PresalesDetailPage } from '../presales-detail/presales-detail';
import { SearchprojectPage } from '../searchproject/searchproject';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the PresalesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-presales',
  templateUrl: 'presales.html',
})
export class PresalesPage {
	searchQuery: string = '';
	presales: any;
  id_employees: number;
  employees_name = this.navParams.get('employees_name');
  data: any;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, 
    public restapiProvider: RestapiProvider) {
  
  }

  ionViewDidLoad() {
    console.log(this.employees_name);
  	this.restapiProvider.getPresales()
  	.then(data => {
  		this.presales = data;
  	});
  }

  ionSearch(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.presales = this.presales.filter(presale => {
        return (presale.presales_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.ionViewDidLoad();
    }
  }

  // ionGetbyid1(id_presales, employees_name) {
  //   this.navCtrl.push(PresalesDetailPage, {id_presales: id_presales, employees_name: employees_name});
  // }

  ionGetbyid(id_presales, employees_name) {
    this.navCtrl.push(SearchprojectPage, {id_presales: id_presales, employees_name: employees_name});
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
