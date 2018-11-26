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
import { AlertController } from 'ionic-angular';
import { RestapiProvider } from '../../providers/restapi/restapi';
import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
/**
 * Generated class for the NewrevenueplanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var NewrevenueplanPage = /** @class */ (function () {
    function NewrevenueplanPage(navCtrl, navParams, restapiProvider, alertCtrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.restapiProvider = restapiProvider;
        this.alertCtrl = alertCtrl;
        this.revenue = { id_proj: '', month_q: '', amount: '' };
        this.project = this.navParams.get('id_proj');
        console.log(this.project);
    }
    NewrevenueplanPage_1 = NewrevenueplanPage;
    NewrevenueplanPage.prototype.ionViewDidLoad = function (id_proj) {
        var _this = this;
        this.restapiProvider.getbyidRevenueidproject(this.project)
            .then(function (data) {
            _this.projectlist = data;
        });
        console.log(this.projectlist);
    };
    NewrevenueplanPage.prototype.ionAddrevenue = function (revenue) {
        var _this = this;
        this.restapiProvider.addRevenue(this.revenue)
            .then(function (data) {
            console.log(data);
            var confirm = _this.alertCtrl.create({
                title: 'Data Successfully Saved',
                message: 'Do You Want to Send Feedback Revenue Plan Response ?',
                buttons: [
                    {
                        text: 'No',
                        handler: function () {
                            _this.navCtrl.push(HomePage);
                            console.log('Yang dikliknya NO');
                        }
                    },
                    {
                        text: 'Yes',
                        handler: function () {
                            _this.navCtrl.push(NewrevenueplanPage_1);
                            console.log('Yang dikliknya Yes');
                        }
                    }
                ]
            });
            confirm.present();
        });
    };
    NewrevenueplanPage.prototype.ionAbout = function () {
        this.navCtrl.push(AboutPage);
    };
    NewrevenueplanPage.prototype.ionContact = function () {
        this.navCtrl.push(ContactPage);
    };
    NewrevenueplanPage.prototype.ionHome = function () {
        this.navCtrl.push(HomePage);
    };
    NewrevenueplanPage = NewrevenueplanPage_1 = __decorate([
        IonicPage(),
        Component({
            selector: 'page-newrevenueplan',
            templateUrl: 'newrevenueplan.html',
        }),
        __metadata("design:paramtypes", [NavController,
            NavParams,
            RestapiProvider,
            AlertController])
    ], NewrevenueplanPage);
    return NewrevenueplanPage;
    var NewrevenueplanPage_1;
}());
export { NewrevenueplanPage };
//# sourceMappingURL=newrevenueplan.js.map