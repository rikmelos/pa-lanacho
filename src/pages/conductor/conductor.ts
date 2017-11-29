import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
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


  flag = false;
  todo = {};
  title = 'nacho';
  conductorItem = {} as ConductorItem;
  conductorItemRef$: AngularFireList<any>

  constructor(public navCtrl: NavController, public navParams: NavParams,
              database: AngularFireDatabase,
              private toastCtrl: ToastController,) {


    //this.shoppingItemRef$ = database.list('shopping-list');
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

  resentToast() {
    let toast = this.toastCtrl.create({
      message: 'Ingrese todos los datos por favor!',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  resentToastSucc() {
    let toast = this.toastCtrl.create({
      message: 'Datos registrados exitosamente!',
      duration: 2000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  reload(){
    this.navCtrl.setRoot(this.navCtrl.getActive().component);
  }

  addConductorItem(conductorItem: ConductorItem){



    /*
    this.conductorItemRef$.push({
      nombre: this.conductorItem.nombre,
      origen: this.conductorItem.origen,
      destino: this.conductorItem.destino,
      precio: this.conductorItem.precio,
      fecha: this.conductorItem.fecha,
      hora: this.conductorItem.hora,
      cupos: this.conductorItem.cupos,
      mensajeConductor: this.conductorItem.mesajeConductor
    });*/

    if(this.conductorItem.origen == null && this.conductorItem.destino != null ){
      this.conductorItem.origen = "Universidad nacional de Colombia";
    }else if(this.conductorItem.origen != null && this.conductorItem.destino == null){
      this.conductorItem.destino = "Universidad nacional de Colombia";
    }

    if(this.conductorItem.nombre == null){
      //console.log("ingrese el nombre por favor");
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.origen == null){
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.destino == null){
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.precio == null){
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.fecha == null){
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.hora == null){
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.cupos == null){
      this.resentToast();
      this.reload();
    }else if(this.conductorItem.mesajeConductor == null){
      this.resentToast();
      this.reload();
    }else{

      this.flag = true;
      this.conductorItemRef$.push({
        nombre: this.conductorItem.nombre,
        origen: this.conductorItem.origen,
        destino: this.conductorItem.destino,
        precio: this.conductorItem.precio,
        fecha: this.conductorItem.fecha,
        hora: this.conductorItem.hora,
        cupos: this.conductorItem.cupos,
        mensajeConductor: this.conductorItem.mesajeConductor
      });
      this.resentToastSucc();
      this.reload();
    }

    console.log(conductorItem);





  /*

    if(this.flag){
      console.log("validado");
    }

    console.log("**************"+this.flag);*/

    /*
    for (var item of conductorItem) {
      console.log(item);
    }*/
    /*
    if(conductorItem == null){
    console.log(conductorItem);}else{
      console.log("faltan item");
    }*/
    this.conductorItem = {} as ConductorItem;
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
