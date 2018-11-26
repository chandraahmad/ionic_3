import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { RestapiProvider } from '../../providers/restapi/restapi';

import { EditprojectPage } from '../editproject/editproject';

/**
 * Generated class for the SearchprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-searchproject',
  templateUrl: 'searchproject.html',
})
export class SearchprojectPage {
	employees_name = this.navParams.get('employees_name');
	project: any;
  presale: number;

  constructor(public navCtrl: NavController, 
  	public navParams: NavParams,
  	public restapiProvider: RestapiProvider,
    public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    let loading =this.loadingCtrl.create({
      content : "Please Wait...",
    });
    loading.present();
  	let id_presales = this.navParams.get('id_presales');
    let customer_name = this.navParams.get('customer_name');
    let bu_name = this.navParams.get('bu_name');
    let customer_type = this.navParams.get('customer_type');
    let projecttype = this.navParams.get('type_project_name');
    let statusproject = this.navParams.get('status_project_name');
    let month = this.navParams.get('month');
    let years = this.navParams.get('years');
    if(id_presales != undefined && id_presales != ''){
      console.log(id_presales);
      this.restapiProvider.getByid2(id_presales)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }
    else if (customer_name != undefined && customer_name != '') {
      console.log(customer_name);
      this.restapiProvider.getByidcustomerproject(customer_name)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }else if (bu_name != undefined && bu_name != '') {
      console.log(bu_name);
      this.restapiProvider.getbyidBisnisproject(bu_name)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }else if (customer_type != undefined && customer_type != '') {
      console.log(customer_type);
      this.restapiProvider.getbyidTypecustomer(customer_type)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }else if (projecttype != undefined && projecttype != '') {
      console.log(projecttype);
      this.restapiProvider.getbyidTypeproject(projecttype)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }else if (statusproject != undefined && statusproject != '') {
      console.log(statusproject);
      this.restapiProvider.getbyidStatus(statusproject)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }else if (years != undefined && years != '') {
      console.log(years, month);
      this.restapiProvider.getbyidRevenueforproject(years, month)
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }else{
      this.restapiProvider.getProject()
      .then(data => {
        this.project = data;
      });
      setTimeout(() => {
          loading.dismiss();
        }, 1000);
    }
    console.log(this.project);
  }

  iongetidproject(id_proj, employees_name) {
  	this.navCtrl.push(EditprojectPage, {id_proj: id_proj, employees_name});
  }
  ionSearch(ev: any) {
    let val = ev.target.value;

    if (val && val.trim() != '') {
      this.project = this.project.filter(projectlist => {
        return (projectlist.project_name.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }else{
      this.ionViewDidLoad();
    }
  }

}
