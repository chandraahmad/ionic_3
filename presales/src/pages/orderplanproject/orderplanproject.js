var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
/**
 * Generated class for the OrderplanprojectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderplanprojectPage = /** @class */ (function () {
    function OrderplanprojectPage(navCtrl, navParams, restapiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restapiProvider = restapiProvider;
        this.month = this.navParams.get('month');
        this.project = this.navParams.get('years');
        console.log(this.project, this.month);
    }
    OrderplanprojectPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.restapiProvider.getbyidRevenueforproject(this.project, this.month)
            .then(function (data) {
            _this.projectall = data;
        });
        console.log('ionViewDidLoad OrderplanprojectPage');
    };
    OrderplanprojectPage.prototype.ionAbout = function () {
        this.navCtrl.push(AboutPage);
    };
    OrderplanprojectPage.prototype.ionContact = function () {
        this.navCtrl.push(ContactPage);
    };
    OrderplanprojectPage.prototype.ionHome = function () {
        this.navCtrl.push(HomePage);
    };
    OrderplanprojectPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-orderplanproject',
            templateUrl: 'orderplanproject.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            RestapiProvider])
    ], OrderplanprojectPage);
    return OrderplanprojectPage;
}());
export { OrderplanprojectPage };
//# sourceMappingURL=orderplanproject.js.map