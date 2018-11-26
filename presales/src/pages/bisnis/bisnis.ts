import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { BisnisprojectPage } from '../bisnisproject/bisnisproject';
import { SearchprojectPage } from '../searchproject/searchproject';

/**
 * Generated class for the BisnisPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bisnis',
  templateUrl: 'bisnis.html',
})
export class BisnisPage {
	bisnis: any;
  employees_name = this.navParams.get('employees_name');

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getBisnisunit()
  	.then(data => {
  		this.bisnis = data;
  		console.log(data);
  	});
  }
  // ionBisnisproject(bu_name, employees_name) {
  //   this.navCtrl.push(BisnisprojectPage, {bu_name: bu_name, employees_name: employees_name});
  // }
  ionBisnisproject(bu_name, employees_name) {
    this.navCtrl.push(SearchprojectPage, {bu_name: bu_name, employees_name: employees_name});
  }

}
