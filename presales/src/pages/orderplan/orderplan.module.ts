import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { OrderplanPage } from './orderplan';

@NgModule({
  declarations: [
    OrderplanPage,
  ],
  imports: [
    IonicPageModule.forChild(OrderplanPage),
  ],
})
export class OrderplanPageModule {}
