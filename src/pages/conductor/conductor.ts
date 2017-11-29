import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {ShoppingItem} from "../../models/shopping-item/shopping-item.interface";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {ConductorItem} from "../../models/conductor-item/conductor-item.interface";


/**
 * Generated class for the ConductorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-conductor',
  templateUrl: 'conductor.html',
})
export class ConductorPage {

  shoppingItem = {} as ShoppingItem;

  shoppingItemRef$: AngularFireList<any>


  todo = {};
  title = 'nacho';
  coductorItem = {} as ConductorItem;
  conductorItemRef$: AngularFireList<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,
              database: AngularFireDatabase) {


    this.shoppingItemRef$ = database.list('shopping-list');
    this.conductorItemRef$ = database.list('conductor-lista');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConductorPage');
  }

  addShoppingItem(shoppingItem: ShoppingItem){

    console.log(shoppingItem);
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });

    this.shoppingItem = {} as ShoppingItem;
    /*
    this.shoppingItemRef$.push({
      itemName: this.shoppingItem.itemName,
      itemNumber: Number(this.shoppingItem.itemNumber)
    });
    //console.log('############'+shoppingItem.itemName);
    console.log(shoppingItem);
    */
  }


  ruta() {
    this.title = this.todo.toString();
    console.log(this.todo)
  }

  navigateToPasajeroPage() {
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push('PasajeroPage');
  }

}
