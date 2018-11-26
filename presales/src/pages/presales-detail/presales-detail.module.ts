import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PresalesDetailPage } from './presales-detail';

@NgModule({
  declarations: [
    PresalesDetailPage,
  ],
  imports: [
    IonicPageModule.forChild(PresalesDetailPage),
  ],
})
export class PresalesDetailPageModule {}
