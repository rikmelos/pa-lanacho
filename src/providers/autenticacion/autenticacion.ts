import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from "angularfire2/auth";


/*
  Generated class for the AutenticacionProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class AutenticacionProvider {

  constructor(public http: HttpClient,
              private afAuth: AngularFireAuth,) {
    console.log('Hello AutenticacionProvider Provider');
  }

  registrarUsuario(correo:string, clave:string){
    return this.afAuth.auth.createUserWithEmailAndPassword(correo, clave)
  }

  inicarSesion(correo:string, clave:string){
    return this.afAuth.auth.signInWithEmailAndPassword(correo, clave);
  }

  terminarSesion(){
    this.afAuth.auth.signOut();
  }

}


