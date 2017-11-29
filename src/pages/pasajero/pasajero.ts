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

  /*
  shoppingItemRef$: AngularFireList<any>
  items: Observable<any[]>;*/

  conductorItemRef$: AngularFireList<any>
  items: Observable<any[]>;
  valorPasa: string;

  constructor(public navCtrl: NavController, public navParams: NavParams,
              database: AngularFireDatabase ) {

    /*
    this.shoppingItemRef$ = database.list('shopping-list');

    this.items = this.shoppingItemRef$.snapshotChanges().map(changes => {
      return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });*/

              this.conductorItemRef$ = database.list('conductor-lista');
              this.items = this.conductorItemRef$.snapshotChanges().map(changes => {
              return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
    });

  }//cierra constructor

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasajeroPage');


  }




  navigateToConductorPage() {
    // Navigate the user to the AddShoppingPage
    this.navCtrl.push('ConductorPage');
  }


  navegateInfoPage(origen,destino,nombre,fecha,hora,cupos,precio,mensaje){

    console.log(origen);
    console.log(destino);
    console.log(nombre);
    console.log(fecha);
    console.log(hora);
    console.log(cupos);
    console.log(precio);
    console.log(mensaje);

    this.navCtrl.push('InformacionPage',{
      origenPassed: origen,
      destinoPassed: destino,
      nombrePassed: nombre,
      fechaPassed: fecha,
      horaPassed: hora,
      cuposPassed: cupos,
      precioPassed: precio,
      mensajePassed: mensaje,
    });
  }

  /*
  navegateInfoPage(){
    this.navCtrl.push('RutamapaPage',{
      origenPassed: 'suba',
      destinoPassed: 'ciudad tunal'
    });
  }
   (item.origen,item.destino,item.nombre,item.fecha,item.hora,item.cupos,item.precio,item.mesajeConductor)
  */

}

