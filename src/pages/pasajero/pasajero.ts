import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AngularFireList, AngularFireDatabase} from "angularfire2/database";
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';


/**
 * Generated class for the PasajeroPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-pasajero',
  templateUrl: 'pasajero.html',
})
export class PasajeroPage {

  shoppingItemRef$: AngularFireList<any>
  items: Observable<any[]>;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              database: AngularFireDatabase ) {
    this.shoppingItemRef$ = database.list('shopping-list');

    this.items = this.shoppingItemRef$.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasajeroPage');
  }




  navigateToConductorPage() {
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push('ConductorPage');
  }

}
