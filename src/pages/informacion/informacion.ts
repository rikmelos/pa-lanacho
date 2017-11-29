import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';

/**
 * Generated class for the InformacionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-informacion',
  templateUrl: 'informacion.html',
})
export class InformacionPage {

  MyDestino: any = '';
  MyOrigen: any = '';

  origen: string = '';
  destino: string = '';
  nombre: string = '';
  fecha: string = '';
  hora: string = '';
  cupos: string = '';
  precio: string = '';
  mensaje: string = '';


  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController) {

    this.origen = navParams.get("origenPassed");
    this.destino = navParams.get("destinoPassed");
    this.nombre = navParams.get("nombrePassed");
    this.fecha = navParams.get("fechaPassed");
    this.hora = navParams.get("horaPassed");
    this.cupos = navParams.get("cuposPassed");
    this.precio = navParams.get("precioPassed");
    this.mensaje = navParams.get("mensajePassed");

    /*this.fecha = navParams.get("fechaPassed");
    this.hora = navParams.get("horaPassed");
    this.cupos = navParams.get("cuposPassed");
    this.precio = navParams.get("precioPassed");
    this.mesajeConductor = navParams.get("mesajeConductorPassed");
    */
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformacionPage');
  }



  resentToast() {
    let toast = this.toastCtrl.create({
      message: 'Faltan algunos datos, vuelvalo a intentar',
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

  navigateToPasajeroPage() {
    // Navigate the user to the AddShoppingPage

    if(this.origen  != null && this.destino != null){
      this.navCtrl.push('RutamapaPage',{
        origenPassed: this.origen,
        destinoPassed: this.destino
      });
    }else{
      this.resentToast();
      this.reload();
    }


  }

}



