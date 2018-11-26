import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


/*
  Generated class for the RestapiProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestapiProvider {
  employees;
  localhost = 'http://localhost/presale/index.php/welcome/';
  ip = 'http://10.165.8.225/Monitoring_Automation/index.php/Webservice/welcome/';
  public = 'https://103.94.169.242/Fujitsu_Presales_Automation/index.php/Webservice/';

  constructor(public http: HttpClient) {
    console.log('Hello RestapiProvider Provider');
  }

  editProject(projectedit){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/resteditproject', JSON.stringify(projectedit))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  editRevenue(projectedit){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/resteditrevenue', JSON.stringify(projectedit))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  editRemark(editremark){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/resteditremark', JSON.stringify(editremark))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  loginAction(data) {
    return new Promise((resolve, reject) =>{
      this.http.post('http://mancibadak.website/presale/index.php/welcome/restlogin/', JSON.stringify(data))
      .subscribe(data =>
        resolve(data)
        , err => {console.log(err);
        });
    });
  }
  getMonth() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetmonth')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getProject(){
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetproject')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getPipeline() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetpipeline')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getSfdc() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetsfdc')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getSales() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetsales')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getDeliverypic() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetdeliverypic')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getEmployee() {
  	return new Promise(resolve => {
  		this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetemployee')
  		.subscribe(data => {
  			resolve(data);
  		}, err => {console.log(err);
  		});
  	});
  }
  getStatusproject() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetstatusproject')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getDocument() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetdocument')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getRevenueplan() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetpipeline')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getSolution() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetsolution')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getRemark() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetremark')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  addRevenue(data){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/restinsertrevenue', JSON.stringify(data))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  addRemark(remark){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/restinsertremark', JSON.stringify(remark))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  addEmployee(data){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/restinsertproject', JSON.stringify(data))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
   getByid1(id_presales) {
     return new Promise(resolve => {
       this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyid1/' + id_presales)
       .subscribe(data => {
         resolve(data); 
       }, err => {console.log(err);
       });
     });
   }
   getByid2(id_presales) {
     return new Promise(resolve => {
       this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyid2/' + id_presales)
       .subscribe(data => {
         resolve(data); 
       }, err => {console.log(err);
       });
     });
   }
  converttoarray(data) {
      console.log(data);
      this.employees = data[0];
   }
  getbyidTypeproject(type_project) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidtypeproject/' + type_project)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  deleteRemark(id_remark_plan){
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/deleteremark?id_remark_plan=' + id_remark_plan)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      })
    })
  }
  deleteRevenue(id_revenue_plan){
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/deleterevenue?id_revenue_plan=' + id_revenue_plan)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      })
    })
  }
  getbyidTypecustomer(customer_type) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidtypecustomer/' + customer_type)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidEditrevenue(id_revenue_plan) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyideditrevenue/' + id_revenue_plan)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidEditremark(id_remark_plan) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyideditremark/' + id_remark_plan)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidStatus(status_project_name) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidstatus/' + status_project_name)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidRevenue(id_proj) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidrevenue/' + id_proj)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidEditproject(id_proj) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyideditproject/' + id_proj)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidRevenueproject(id_proj) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidrevenueproject/' + id_proj)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidBisnisproject(bu_name) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidbisnisproject/' + bu_name)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidRevenueforproject(years, month) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidpipelineproject/' + years + month)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidRevenueidproject(id_proj) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidrevenueidproject/' + id_proj)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getByidcustomerproject(customer_name) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidcustomerproject/' + customer_name)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getbyidRemark(id_proj) {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbyidremark/' + id_proj)
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  addPresales(data){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/restinsertproject', JSON.stringify(data))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  getCustomer() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetcustomer')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getBisnisunit() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetbisnisunit')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  addCustomer(data){
    return new Promise((resolve, reject) => {
      this.http.post('http://mancibadak.website/presale/index.php/welcome/restinsertcustomer', JSON.stringify(data))
      .subscribe(data => {
        resolve(data);
      }, (err) => {
        reject(err);
      });
    });
  }
  getOpptytype() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetstatusproject')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getOpportunityprobability() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetopptytype')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getPresales() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgetpresales')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getTypecustomer() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgettypecustomer')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }
  getTypeproject() {
    return new Promise(resolve => {
      this.http.get('http://mancibadak.website/presale/index.php/welcome/restgettypeproject')
      .subscribe(data => {
        resolve(data);
      }, err => {console.log(err);
      });
    });
  }

}
