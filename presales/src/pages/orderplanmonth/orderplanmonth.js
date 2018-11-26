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
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { OrderplanprojectPage } from '../orderplanproject/orderplanproject';
import { RestapiProvider } from '../../providers/restapi/restapi';
/**
 * Generated class for the OrderplanmonthPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var OrderplanmonthPage = /** @class */ (function () {
    function OrderplanmonthPage(navCtrl, navParams, restapiProvider) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restapiProvider = restapiProvider;
        this.years = this.navParams.get('pipeline');
    }
    OrderplanmonthPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.restapiProvider.getMonth()
            .then(function (data) {
            _this.showmonth = data;
        });
        console.log('ionViewDidLoad OrderplanmonthPage');
    };
    OrderplanmonthPage.prototype.ionOrderdetail = function (years, month) {
        this.navCtrl.push(OrderplanprojectPage, { years: years, month: month });
    };
    OrderplanmonthPage.prototype.ionAbout = function () {
        this.navCtrl.push(AboutPage);
    };
    OrderplanmonthPage.prototype.ionContact = function () {
        this.navCtrl.push(ContactPage);
    };
    OrderplanmonthPage.prototype.ionHome = function () {
        this.navCtrl.push(HomePage);
    };
    OrderplanmonthPage = __decorate([
        IonicPage(),
        Component({
            selector: 'page-orderplanmonth',
            templateUrl: 'orderplanmonth.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            RestapiProvider])
    ], OrderplanmonthPage);
    return OrderplanmonthPage;
}());
export { OrderplanmonthPage };
//# sourceMappingURL=orderplanmonth.js.map