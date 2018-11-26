import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderplanmonthPage } from '../orderplanmonth/orderplanmonth';

import { RestapiProvider } from '../../providers/restapi/restapi';

/**
 * Generated class for the OrderplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orderplan',
  templateUrl: 'orderplan.html',
})
export class OrderplanPage {
	order: any;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider) {
  }

  ionViewDidLoad() {
  	this.restapiProvider.getRevenueplan()
  	.then(data => {
  		this.order = data;
  		console.log(data);
  	});
    console.log('ionViewDidLoad OrderplanPage');
  }
  ionOrderplanmonth(pipeline) {
  	this.navCtrl.push(OrderplanmonthPage, {pipeline: pipeline});
  }

}
