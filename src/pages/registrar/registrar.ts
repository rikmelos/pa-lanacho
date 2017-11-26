import {Component, ViewChild} from '@angular/core';
import {IonicPage, NavController, NavParams, AlertController, Navbar} from 'ionic-angular';
import {AutenticacionProvider} from "../../providers/autenticacion/autenticacion";
import {NgForm} from "@angular/forms";
import {ConfigProvider} from "../../providers/config/config";
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegistrarPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registrar',
  templateUrl: 'registrar.html',
})
export class RegistrarPage {

  @ViewChild(Navbar) navBar: Navbar;
  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public autenticacionProvider: AutenticacionProvider,
              public alertCtrl: AlertController,
              public configPro: ConfigProvider,
              private toastCtrl: ToastController,
              ) {
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
      message: 'Usuario creado exitosamente',
      duration: 3000,
      position: 'top'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }


  registrarUsuario(formulario: NgForm){

    this.autenticacionProvider.registrarUsuario(
      formulario.value.correo,
      formulario.value.clave)
      .then(()=> {
        this.resentToast();
      })
      .then(()=> {
        this.navCtrl.push('WelcomePage');
      })
      .then(info => console.log(info))
      .catch(error => {
        let alerta = this.alertCtrl.create({
          title: 'Ocurrió un Error',
          message: 'Ocurrió un error registrando al usuario. ' + error,
          buttons: ['OK']
        })
        alerta.present();
      })
  }

}
