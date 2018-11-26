import { Component } from '@angular/core';
import { App, NavController, ViewController, NavParams } from 'ionic-angular';

import { PresalesPage} from '../presales/presales';
import { StatusPage} from '../status/status';
import { CustomerPage} from '../customer/customer';
import { NewPage} from '../new/new';
import { TypePage} from '../type/type';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { RevenueplanPage } from '../revenueplan/revenueplan';
import { OrderplanPage } from '../orderplan/orderplan';
import { RemarkPage } from '../remark/remark';
import { PipelinePage } from '../pipeline/pipeline';
import { BisnisPage } from '../bisnis/bisnis';
import { SearchprojectPage } from '../searchproject/searchproject';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  searchQuery: string = '';
  items: any;
  username = this.navParams.get('username');
  employees_name = this.navParams.get('employees_name');
  id_employees = this.navParams.get('id_employees');
  department = this.navParams.get('department'); 

  constructor(public navCtrl: NavController, 
    public appCtrl: App, 
    public viewCtrl: ViewController,
    public navParams: NavParams) {
    this.navParams.get('employees_name');
    this.initializeItems();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
    console.log(this.username, this.employees_name);
  }
  ionNew(employees_name){
    console.log(employees_name);
    this.navCtrl.push(NewPage, {employees_name: employees_name});
  }
  ionPresales(employees_name) {
    console.log(employees_name);
  	this.navCtrl.push(PresalesPage, {employees_name: employees_name});
  }
  ionStatus(employees_name) {
    console.log(employees_name);
  	this.navCtrl.push(StatusPage, {employees_name: employees_name});
  }
  ionCustomer(employees_name) {
    console.log(employees_name);
  	this.navCtrl.push(CustomerPage, {employees_name: employees_name});
  }
  ionType(employees_name) {
    console.log(employees_name);
    this.navCtrl.push(TypePage, {employees_name: employees_name});
  }
  ionAbout() {
    this.navCtrl.push(AboutPage);
  }
  ionContact(id_employees, employees_name, department) {
    this.navCtrl.push(ContactPage, {id_employees: id_employees, employees_name: employees_name, department: department});
  }
  ionRevenueplan(employees_name) {
    console.log(employees_name);
    this.navCtrl.push(RevenueplanPage, {employees_name: employees_name});
  }
  ionOrderplan() {
    this.navCtrl.push(OrderplanPage);
  }
  ionRemark(employees_name) {
    console.log(employees_name);
    this.navCtrl.push(RemarkPage, {employees_name: employees_name});
  }
  ionPipeline(employees_name) {
    console.log(employees_name);
    this.navCtrl.push(PipelinePage, {employees_name: employees_name});
  }
  ionBU(employees_name) {
    console.log(employees_name);
    this.navCtrl.push(BisnisPage, {employees_name: employees_name});
  }
  ionSearchproject(employees_name) {
    console.log(employees_name);
    this.navCtrl.push(SearchprojectPage, {employees_name: employees_name});
  }

  initializeItems() {
    this.items = [
    {
      "name":"cart",
      "nav":"By Presales",
      "click":"ionPresales()",
      "color":"#6495ED",
    },
    {
      "name":"people",
      "nav":"By Customer",
      "click":"ionPresales()",
      "color":"#f53d3d",
    },
    {
      "name":"stats",
      "nav":"By Status",
      "click":"ionPresales()",
      "color":"#696969",
    },
    {
      "name":"list-box",
      "nav":"By Type",
      "click":"ionPresales()",
      "color":"#FFD700",
    },
    {
      "name":"clipboard",
      "nav":"By Order Plan",
      "click":"ionPresales()",
      "color":"#FF00FF",
    },
    {
      "name":"trending-up",
      "nav":"By Revenue Plan",
      "click":"ionPresales()",
      "color":"#FAFAD2",
    },
    ]; 
  }
  ionSearch(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.items = this.items.filter(item => {
        return (item.nav.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

  ionOpen(event, item) {
    this.initializeItems();
    alert('click' + this.items);
  }

}