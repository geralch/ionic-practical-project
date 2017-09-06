import { Component } from '@angular/core';
import { ViewController  } from 'ionic-angular'; 
@Component({
  selector: 'page-notificaciones',
  templateUrl: 'notificaciones.html',
})
export class NotificacionesPage {

  constructor(public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NotificacionesPage');
  }
  close() {
    this.viewCtrl.dismiss();
  }
}
