import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MenubasePage } from './menubase';

@NgModule({
  declarations: [
    MenubasePage,
  ],
  imports: [
    IonicPageModule.forChild(MenubasePage),
  ],
})
export class MenubasePageModule {}
