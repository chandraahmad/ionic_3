import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { HomePage } from '../pages/home/home';
import { StartPage } from '../pages/start/start';
import { LoginPage } from '../pages/login/login';
import { PresalesPage} from '../pages/presales/presales';
import { StatusPage} from '../pages/status/status';
import { CustomerPage } from '../pages/customer/customer';
import { TypePage} from '../pages/type/type';
import { NewPage } from '../pages/new/new';
import { NewcustomerPage } from '../pages/newcustomer/newcustomer';
import { PresalesDetailPage } from '../pages/presales-detail/presales-detail';
import { TypecustomerPage } from '../pages/typecustomer/typecustomer';
import { TypecustomerlistPage } from '../pages/typecustomerlist/typecustomerlist';
import { TypeprojectPage } from '../pages/typeproject/typeproject';
import { TypeprojectlistPage } from '../pages/typeprojectlist/typeprojectlist';
import { StatuslistPage } from '../pages/statuslist/statuslist';
import { RevenueplanPage } from '../pages/revenueplan/revenueplan';
import { NewrevenueplanPage } from '../pages/newrevenueplan/newrevenueplan';
import { RevenueplandetailPage } from '../pages/revenueplandetail/revenueplandetail';
import { EditprojectPage } from '../pages/editproject/editproject';
import { CustomerprojectPage } from '../pages/customerproject/customerproject';
import { RemarkPage } from '../pages/remark/remark';
import { RemarkdetailPage } from '../pages/remarkdetail/remarkdetail';
import { RevenuemonthPage } from '../pages/revenuemonth/revenuemonth';
import { RevenueprojectPage } from '../pages/revenueproject/revenueproject';
import { RemarkprojectPage } from '../pages/remarkproject/remarkproject';
import { RemarkmonthPage } from '../pages/remarkmonth/remarkmonth';
import { OrderplanPage } from '../pages/orderplan/orderplan';
import { OrderplanmonthPage } from '../pages/orderplanmonth/orderplanmonth';
import { OrderplanprojectPage } from '../pages/orderplanproject/orderplanproject';
import { OrderplandetailPage } from '../pages/orderplandetail/orderplandetail';
import { EditrevenuePage } from '../pages/editrevenue/editrevenue';
import { EditremarkPage } from '../pages/editremark/editremark';
import { PipelinePage } from '../pages/pipeline/pipeline';
import { BisnisPage } from '../pages/bisnis/bisnis';
import { BisnisprojectPage } from '../pages/bisnisproject/bisnisproject';
import { SearchprojectPage } from '../pages/searchproject/searchproject';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestapiProvider } from '../providers/restapi/restapi';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StartPage,
    LoginPage,
    PresalesPage,
    StatusPage,
    CustomerPage,
    NewPage,
    NewcustomerPage,
    TypePage,
    PresalesDetailPage,
    TypecustomerPage,
    TypecustomerlistPage,
    TypeprojectPage,
    TypeprojectlistPage,
    StatuslistPage,
    RevenueplanPage,
    NewrevenueplanPage,
    RevenueplandetailPage,
    EditprojectPage,
    CustomerprojectPage,
    RemarkPage,
    RemarkdetailPage,
    RevenuemonthPage,
    RevenueprojectPage,
    RemarkprojectPage,
    RemarkmonthPage,
    OrderplanPage,
    OrderplanmonthPage,
    OrderplanprojectPage,
    OrderplandetailPage,
    EditrevenuePage,
    EditremarkPage,
    PipelinePage,
    BisnisPage,
    BisnisprojectPage,
    SearchprojectPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ContactPage,
    HomePage,
    StartPage,
    LoginPage,
    PresalesPage,
    StatusPage,
    CustomerPage,
    NewPage,
    NewcustomerPage,
    TypePage,
    PresalesDetailPage,
    TypecustomerPage,
    TypecustomerlistPage,
    TypeprojectPage,
    TypeprojectlistPage,
    StatuslistPage,
    RevenueplanPage,
    NewrevenueplanPage,
    RevenueplandetailPage,
    EditprojectPage,
    CustomerprojectPage,
    RemarkPage,
    RemarkdetailPage,
    RevenuemonthPage,
    RevenueprojectPage,
    RemarkprojectPage,
    RemarkmonthPage,
    OrderplanPage,
    OrderplanmonthPage,
    OrderplanprojectPage,
    OrderplandetailPage,
    EditrevenuePage,
    EditremarkPage,
    PipelinePage,
    BisnisPage,
    BisnisprojectPage,
    SearchprojectPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestapiProvider
  ]
})
export class AppModule {}
