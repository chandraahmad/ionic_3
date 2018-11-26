import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { NewPage} from '../new/new';
import { EditrevenuePage } from '../editrevenue/editrevenue';
import { EditremarkPage } from '../editremark/editremark';

/**
 * Generated class for the EditprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editproject',
  templateUrl: 'editproject.html',
})
export class EditprojectPage {
	 projectedit = { id_proj: '', bu_name: '', pipeline: '', oppty_id: '', id_presales: '', project_name: '', customer_name: '', customer_type: '', solution_category_name: '',
solution: '', type_project_name: '', sfdc_type: '', oppty_probability_name: '', status_project_name: '', order_idr: '', gm_2_persen: '', gm_2_idr: '', po_target: '', current_status: '', 
sales_pic: '', delivery_pic: '', presales_start_date: '', partner: '', budget_n_p: '', proposal: '', brochure: '', rab: '', kak: '', rks: '', oms: '', iq: '', bar: '', employees_update: '' };
	projectremark= { id_proj: '', project_name: '', customer_name: '', presales_name: '', remark: '', status_remark: '',
date_target: '', employees_update: ''} ;
  revenue = {id_proj: '', month_q: '', amount: '', project_name: '', customer_name: '', presales_name: '', employees_update: ''};
  id_proj: number;
	project: number;
	customers: any;
  presales: any;
  customertypes: any;
  projecttypes: any;
  sfdc_type: any;
  opptytypes: any;
  statusprojects: any;
  solutions: any;
  pipelines: any;
  segmentclick: any;
  remarks: any;
  remark: any;
  projectlist: any;
  document: any;
  bisnisunit: any;
  sales: any;
  deliverypic: any;
  respon: any;
  kali: number;
  bagi: number;
  hasil: string;
  revenueedit: any;
  employees_name = this.navParams.get('employees_name');
  DECIMAL_SEPARATOR=".";
  GROUP_SEPARATOR=",";

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider,
    public alertCtrl: AlertController) {
  	this.project = this.navParams.get('id_proj'); 
  	console.log(this.project);
    this.segmentclick = 'revenue';
    this.segmentclick = 'remark';
    this.segmentclick = 'editproject';
  }
  ionEditproject(id_proj, employees_name) {
  	console.log('masuk sini');
  	console.log(this.projectedit);
  	this.restapiProvider.editProject(this.projectedit)
  	.then(data =>{
  		console.log('Berhasil');
      let alert = this.alertCtrl.create({
        title: 'Saved Successfully',
        subTitle: 'Data Project Successfully Saved',
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

  ioneditrevenue(id_revenue_plan, employees_name) {
    console.log(id_revenue_plan);
    console.log(employees_name);
    this.navCtrl.push(EditrevenuePage, {id_revenue_plan: id_revenue_plan, employees_name: employees_name});
  }
  ioneditremark(id_remark_plan, employees_name) {
    console.log(id_remark_plan);
    console.log(employees_name);
    this.navCtrl.push(EditremarkPage, {id_remark_plan: id_remark_plan, employees_name: employees_name});
  }

  iondeleteremark(id_remark_plan, id_proj, employees_name) {
    this.restapiProvider.deleteRemark(id_remark_plan)
    .then(data => {
      console.log('berhasil');
      let alert = this.alertCtrl.create({
        title: 'Successfully Deleted',
        subTitle: 'Data Deleted',
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
  iondeleterevenue(id_revenue_plan, id_proj, employees_name) {
    this.restapiProvider.deleteRevenue(id_revenue_plan)
    .then(data => {
      console.log('berhasil');
      let alert = this.alertCtrl.create({
        title: 'Successfully Deleted',
        subTitle: 'Data Deleted',
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

  ionCalculate(projectedit) {
    let seratus: number=100;
    this.kali = parseInt(this.projectedit.order_idr) * parseInt(this.projectedit.gm_2_persen);
    this.bagi = this.kali/seratus;
    console.log(this.bagi)
    this.hasil = String(this.bagi);
    this.projectedit.gm_2_idr = this.hasil;
    return projectedit.gm_2_idr
  }

  ionViewDidLoad(id_proj) {
    console.log(this.employees_name);
    this.projectedit.employees_update = this.employees_name;
    this.revenue.employees_update = this.employees_name;
    this.projectremark.employees_update = this.employees_name;
  	this.restapiProvider.getbyidEditproject(this.project)
  	.then(data => {
  		this.projectedit.id_proj = data[0].id_proj;
  		this.projectedit.bu_name = data[0].bu_name;
      this.projectedit.pipeline = data[0].pipeline;
  		this.projectedit.oppty_id = data[0].oppty_id;
  		this.projectedit.id_presales = data[0].id_presales;
  		this.projectedit.project_name = data[0].project_name;
  		this.projectedit.customer_name = data[0].customer_name;
  		this.projectedit.customer_type = data[0].customer_type;
  		this.projectedit.solution_category_name = data[0].solution_category_name;
      this.projectedit.solution = data[0].solution;
  		this.projectedit.type_project_name = data[0].type_project_name;
      this.projectedit.sfdc_type = data[0].sfdc_type;
  		this.projectedit.oppty_probability_name = data[0].oppty_probability_name;
  		this.projectedit.status_project_name = data[0].status_project_name;
  		this.projectedit.order_idr = data[0].order_idr;
  		this.projectedit.gm_2_persen = data[0].gm_2_persen;
  		this.projectedit.gm_2_idr = data[0].gm_2_idr;
  		this.projectedit.po_target = data[0].po_target;
      this.projectedit.current_status = data[0].current_status;
      this.projectedit.budget_n_p = data[0].budget_n_p;
      this.projectedit.partner = data[0].partner;
      this.projectedit.proposal = data[0].proposal;
      this.projectedit.brochure = data[0].brochure;
      this.projectedit.sales_pic = data[0].sales_pic;
      this.projectedit.delivery_pic = data[0].delivery_pic;
      this.projectedit.presales_start_date = data[0].presales_start_date;
      this.projectedit.rab = data[0].rab;
      this.projectedit.kak = data[0].kak;
      this.projectedit.rks = data[0].rks;
      this.projectedit.oms = data[0].oms;
      this.projectedit.iq = data[0].iq;
      this.projectedit.bar = data[0].bar;
      this.projectedit.bu_name = data[0].bu_name;
  	});
  	this.restapiProvider.getSfdc()
    .then(data => {
      this.sfdc_type = data;
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
    this.restapiProvider.getPipeline()
    .then(data => {
      this.pipelines = data;
    });
    this.restapiProvider.getbyidRevenue(this.project)
    .then(data => {
      this.projectremark.id_proj = data[0].id_proj
      this.projectremark.project_name = data[0].project_name;
      this.projectremark.customer_name = data[0].customer_name;
      this.projectremark.presales_name = data[0].presales_name;
    });
    this.restapiProvider.getbyidRemark(this.project)
    .then(data => {
      this.remark = data;
    });
    this.restapiProvider.getRemark()
    .then(data => {
      this.remarks = data;
    });
    this.restapiProvider.getbyidRevenue(this.project)
    .then(data => {
      this.revenue.id_proj = data[0].id_proj;
      this.revenue.month_q = data[0].month_q;
      this.revenue.amount = data[0].amount;
      this.revenue.project_name = data[0].project_name;
      this.revenue.customer_name = data[0].customer_name;
      this.revenue.presales_name = data[0].presales_name;
    });
    this.restapiProvider.getbyidRevenueproject(this.project)
    .then(data => {
      this.projectlist = data;
    });
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
    console.log(this.revenue.presales_name);
    console.log('ionViewDidLoad EditprojectPage');
  }

  ionAddrevenue(id_proj, employees_name) {
    this.restapiProvider.addRevenue(this.revenue)
    .then(data => {
      let parsing = JSON.stringify(data);
      this.respon = JSON.parse(parsing)
      console.log(this.respon.message);
      if (this.respon.message == "Data Berhasil Tersimpan") {
        let alert = this.alertCtrl.create({
        title: 'Saved Successfully',
        subTitle: 'Data Revenue Plan Successfully Saved',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
        }
      }]
      });
      alert.present();
      }else if (this.respon.message == "Bulan Tidak Boleh Sama") {
        let alert = this.alertCtrl.create({
        title: 'Saved Failure',
        subTitle: 'The Inputed Year and Month already exist',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
        }
      }]
      });
      alert.present();
      }else if (this.respon.message == "Jumlah amount lebih") {
        let alert = this.alertCtrl.create({
        title: 'Saved Failure',
        subTitle: 'The amount of income is greater',
        buttons: [{
        text: 'OK',
        role: 'ok',
        handler: () => {
          this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name: employees_name});
        }
      }]
      });
      alert.present();
      }
      });
  }
  ionAddremark(id_proj, employees_name) {
    this.restapiProvider.addRemark(this.projectremark)
    .then(data => {
      this.remark = data;
      let alert = this.alertCtrl.create({
        title: 'Saved Successfully',
        subTitle: 'Data Remark Successfully Saved',
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

  ionAbout(employees_name) {
    this.navCtrl.push(AboutPage, {employees_name: employees_name});
  }
  ionContact(employees_name) {
    this.navCtrl.push(ContactPage, {employees_name: employees_name});
  }
  ionHome(employees_name) {
    this.navCtrl.push(HomePage, {employees_name: employees_name});
  }
  ionNew(employees_name){
    console.log(employees_name);
    this.navCtrl.push(NewPage, {employees_name: employees_name});
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

}
