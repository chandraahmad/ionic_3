import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {
	id_employees = this.navParams.get('id_employees');
	employees_name = this.navParams.get('employees_name');
	department = this.navParams.get('department');
	username = this.navParams.get('username');

  constructor(public navCtrl: NavController,
  	public navParams: NavParams) {

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.id_employees);
    console.log(this.department);
    console.log(this.employees_name);
  }

}
