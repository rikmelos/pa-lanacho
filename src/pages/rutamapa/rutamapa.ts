import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Component, ViewChild, ElementRef } from '@angular/core';

declare var google: any;

/**
 * Generated class for the RutamapaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-rutamapa',
  templateUrl: 'rutamapa.html',
})
export class RutamapaPage {

  Destination: any = '';
  MyLocation: any = '';

  origen: string = '';
  destino: string = '';

  constructor(public navCtrl: NavController, public navParams: NavParams, private mapElement: ElementRef) {
      this.MyLocation = navParams.get("origenPassed");
      this.Destination = navParams.get("destinoPassed");

      this.origen = this.MyLocation;
      this.destino = this.Destination;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RutamapaPage');
    console.log(this.MyLocation);
    console.log(this.Destination);
    this.calculateAndDisplayRoute();
  }
  calculateAndDisplayRoute() {
    let that = this;
    let directionsService = new google.maps.DirectionsService;
    let directionsDisplay = new google.maps.DirectionsRenderer;
    const map = new google.maps.Map(document.getElementById('map'), {
      zoom: 7,
      center: {lat: 41.85, lng: -87.65}
    });
    directionsDisplay.setMap(map);


    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        map.setCenter(pos);
        //that.MyLocation = new google.maps.LatLng(pos);

      }, function() {

      });
    } else {
      // Browser doesn't support Geolocation
    }

    directionsService.route({
      origin: this.MyLocation,
      destination: this.Destination,
      travelMode: 'DRIVING'
    }, function(response, status) {
      if (status === 'OK') {
        directionsDisplay.setDirections(response);
      } else {
        window.alert('Directions request failed due to ' + status);
      }
    });
  }

}
