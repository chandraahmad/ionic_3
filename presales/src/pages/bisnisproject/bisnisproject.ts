import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { EditprojectPage } from '../editproject/editproject';

/**
 * Generated class for the BisnisprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bisnisproject',
  templateUrl: 'bisnisproject.html',
})
export class BisnisprojectPage {
	employees_name = this.navParams.get('employees_name');
	bu_name = this.navParams.get('bu_name');
	bisnisproject: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getbyidBisnisproject(this.bu_name)
  	.then(data => {
  		this.bisnisproject = data;
  		console.log(data);
  	});
    console.log('ionViewDidLoad BisnisprojectPage');
  }
  iongetidproject(id_proj, employees_name) {
  	this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name});
  }

}
