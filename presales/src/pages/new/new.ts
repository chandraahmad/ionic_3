import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup, AbstractControl } from '@angular/forms';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';

import { RestapiProvider } from '../../providers/restapi/restapi';
/**
 * Generated class for the NewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new',
  templateUrl: 'new.html',
})
export class NewPage {
  presale= { bu_name: '', oppty_id: '', id_presales: '', project_name: '', customer_name: '', customer_type: '', solution_category_name: '', 
type_project_name: '', opportunity_probability_name: '', status_project_name: '', order_idr: '', gm_2_persen: '', gm_2_idr: '', 
pipeline: '', po_target: '', current_status: '', solution: '', sales_pic: '', delivery_pic: '', presales_start_date: '', partner: '',
budget_n_p: '', proposal: '', brochure: '', rab: '', kak: '', rks: '', oms: '', iq: '', bar: '', employees_insert: '', sfdc_type: ''}
  projectremark= { id_proj: '', project_name: '', customer_name: '', employees_name: '', date_remark: '', remark: '', status_remark: '',
date_target: ''} ;
  revenue = {id_proj: '', month_q: '', amount: '', project_name: '', customer_name: '', employees_name: ''};
  customers: any;
  presales: any;
  customertypes: any;
  projecttypes: any;
  opptytypes: any;
  statusprojects: any;
  solutions: any;
  pipelines: any;
  sales: any;
  deliverypic: any;
  items: any;
  document: any;
  bisnisunit: any;
  sfdc_type: any;
  initializeItems:any;
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";
  kali: number;
  bagi: number;
  hasil: string;
  segmentclick: any;
  respon: any;
  employees_name = this.navParams.get('employees_name');
  formgroup: FormGroup;
  pipeline:AbstractControl;
  id_employees:AbstractControl;
  project_name:AbstractControl;
  customer_name: AbstractControl;
  current_status: AbstractControl;

  constructor(public navCtrl: NavController,
    public alertCtrl: AlertController, 
    public navParams: NavParams, 
    public restapiProvider: RestapiProvider,
    public platform: Platform,
    public formbuilder: FormBuilder,
    ) {
    this.formgroup = formbuilder.group({
      pipeline:['',Validators.required],
      id_employees:['',Validators.required],
      project_name:['',Validators.required],
      customer_name:['',Validators.required]
  });
    this.pipeline = this.formgroup.controls['pipeline'];
    this.id_employees = this.formgroup.controls['id_employees'];
    this.project_name = this.formgroup.controls['project_name'];
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.

    });
  this.initializeItems
  this.segmentclick = 'revenue';
  this.segmentclick = 'remark';
  this.segmentclick = 'editproject';
  }

  ionViewDidLoad() {
     this.presale.employees_insert = this.employees_name;
     console.log(this.presale.employees_insert);
    this.restapiProvider.getSfdc()
    .then(data => {
      this.sfdc_type = data;
    })
    this.restapiProvider.getBisnisunit()
    .then(data => {
      this.bisnisunit = data;
    });
    this.restapiProvider.getDocument()
    .then(data => {
      this.document = data;
    });
    this.restapiProvider.getDeliverypic()
    .then(data => {
      this.deliverypic = data;
    });
    this.restapiProvider.getSales()
    .then(data => {
      this.sales = data;
    });
    this.restapiProvider.getPipeline()
    .then(data => {
      this.pipelines = data;
    });
    this.restapiProvider.getCustomer()
    .then(data => {
      this.customers = data;
    });
    this.restapiProvider.getPresales()
    .then(data => {
      this.presales = data;
    });
    this.restapiProvider.getTypecustomer()
    .then(data => {
      this.customertypes = data;
    });
    this.restapiProvider.getTypeproject()
    .then(data => {
      this.projecttypes = data;
    });
    this.restapiProvider.getOpportunityprobability()
    .then(data => {
      this.opptytypes = data;
    });
    this.restapiProvider.getStatusproject()
    .then(data => {
      this.statusprojects = data;
    });
    this.restapiProvider.getSolution()
    .then(data => {
      this.solutions = data;
    });
  }
  ionAddproject(employees_name ,presale) {
    console.log(employees_name);
  	this.restapiProvider.addPresales(this.presale)
  	.then(result =>{
      let pesan = JSON.stringify(result);
      this.respon = JSON.parse(pesan);
      if (this.respon.message == 'Please Fill Out This Field') {
        let alert = this.alertCtrl.create({
        title: 'There is an Empty Column',
        subTitle: 'Please Fill in an Empty Column',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          console.log(employees_name);
          this.navCtrl.push(HomePage, {employees_name: employees_name});
        }
      }]
      });
      alert.present();
      console.log(this.respon.message);
      }else{
        let alert = this.alertCtrl.create({
        title: 'Saved Successfully',
        subTitle: 'Data Project Successfully Saved',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          console.log(employees_name);
          this.navCtrl.push(HomePage, {employees_name: employees_name});
        }
      }]
      });
      alert.present();
      console.log(this.respon.message);
      }
  	}, (err) => {
  		console.log(err);
  	});
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

  ionAbout(employees_name) {
    this.navCtrl.push(AboutPage, {employees_name: employees_name});
  }
  ionContact(employees_name) {
    this.navCtrl.push(ContactPage, {employees_name: employees_name});
  }
  ionHome(employees_name) {
    this.navCtrl.push(HomePage, {employees_name: employees_name});
  }

  ionCalculate(presale) {
    let seratus: number=100;
    let separator = this.unFormat(this.presale.order_idr)
    this.kali = parseInt(separator) * parseInt(this.presale.gm_2_persen);
    this.bagi = this.kali/seratus;
    console.log(this.bagi)
    this.hasil = String(this.bagi);
    this.presale.gm_2_idr = this.hasil;
    //return presale.gm_2_idr
  }
  unCalculate() {}

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

  ionStatusproject(presale) {
    let pipeline = this.presale.pipeline;
    let years: any = new Date();
    let fullyear = years.getUTCFullYear();
    let status = this.presale.opportunity_probability_name;
    let interval1: any = 100;
    let interval2: any = 0;
    let ONPROGRESS: string = 'ONPROGRESS';
    let WIN: string = 'WIN';
    let PENDING: string = 'PENDING';
    let LOSE: string = 'LOSE';
    if (status == interval1 ) {
      this.presale.status_project_name = WIN;
      }else if (status == interval2) {
      this.presale.status_project_name = LOSE;
      }else if (pipeline == fullyear) {
      this.presale.status_project_name = ONPROGRESS; 
      }else{
        this.presale.status_project_name = PENDING;
      }
        return presale.status_project_name
  }


}
