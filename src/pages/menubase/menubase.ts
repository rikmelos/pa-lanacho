import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the MenubasePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-menubase',
  templateUrl: 'menubase.html',
})
export class MenubasePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MenubasePage');
  }

  conductor() {
    this.navCtrl.push('ConductorPage');
  }

  pasajero() {
    this.navCtrl.push('PasajeroPage');
  }
}
