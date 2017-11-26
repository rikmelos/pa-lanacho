import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, Navbar, ToastController, AlertController} from 'ionic-angular';
import {NgForm} from "@angular/forms";
import {AutenticacionProvider} from "../../providers/autenticacion/autenticacion";

/**
 * Generated class for the EntrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-entrar',
  templateUrl: 'entrar.html',
})
export class EntrarPage {

  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController, public navParams: NavParams,
              private toastCtrl: ToastController,
              public autenticacionProvider: AutenticacionProvider,
              public alertCtrl: AlertController) {
  }



  ionViewDidLoad() {
    this.navBar.backButtonClick = (e:UIEvent)=>{
      // todo something
      this.navCtrl.pop();
    }
    console.log('ionViewDidLoad RegistrarPage');
  }


  resentToast() {
    let toast = this.toastCtrl.create({
      message: 'Bienvenido a Pa\' la nacho',
      duration: 3000,
      position: 'bottom'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  iniciarSesion(formulario: NgForm){
    this.autenticacionProvider.inicarSesion(
      formulario.value.correo,
      formulario.value.clave)
      .then(()=> {
        this.resentToast();
      })
      .then(()=> {
        this.navCtrl.push('ContentPage');
      })
      .then(info => console.log('Usuario conectado'))
      .catch(error => {
        let alerta = this.alertCtrl.create({
          title: 'Ocurrió un Error',
          message: 'Ocurrió un error iniciando la sesión. ' + error,
          buttons: ['OK']
        })
        alerta.present();
      })
  }

}
