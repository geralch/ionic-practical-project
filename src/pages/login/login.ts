import { GeneralService } from './../../app/general.service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, MenuController, SplitPane } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import * as sha512 from 'sha512';
@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  public username: string = "";
  public password: string = "";
  public error: boolean = false;
  public mensaje: string = "";
  constructor(private service: GeneralService, private storage: Storage, public split: SplitPane, public menu: MenuController, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    this.storage.get('token').then(
      data => {
        if (data) {
          this.HideMenu('block',  "56px")
          this.navCtrl.setRoot('inicio')
        }
      }).catch(e => {
        console.error('Error getting LoginData', e)
      });
    console.log('ionViewDidLoad LoginPage');
    this.HideMenu('none', "0px")
  }

  HideMenu(show: string, size: string = "56px") {
    /* Funcion para ocultar Toda la barra de notificaciones, solo valida y solo se puede usar en este modulo
      La manipulación DOM directa debe evitarse completamente en Angular2 debido a que puede afectar su funcionalidad
      y sus propio core
    */
    let headers = document.getElementsByTagName('ion-header') as HTMLCollectionOf<HTMLElement>
    headers[0].style.display = show;
    let scrollcontent = document.getElementsByClassName('scroll-content') as HTMLCollectionOf<HTMLElement>
    scrollcontent[1].style.marginTop = size;

    if (show == "block") {
      this.menu.enable(true);
      this.split.enabled = true
    } else {
      this.menu.enable(false);
      this.split.enabled = false
    }
  }


  login() {

    let loading = this.loadingCtrl.create({
      spinner: 'crescent',
      content: 'Conectando '
    });
    loading.present();
    this.service.postRequest(
      { username: this.username, password: sha512(this.password).toString('hex') },
      "login/"
    ).then(
      data => {
        if (data['mensaje'] == '') {
          this.storage.set('token', data['data'].token);
          this.storage.set('userid', data['data'].id);
          this.error = false;
          setTimeout(() => {
            this.HideMenu('block')
            this.navCtrl.setRoot('inicio')
          }, 1000)



        } else {
          this.error = true;
          this.mensaje = data['mensaje'];

        }
        loading.dismiss();
      });
    // global.logueado = true;

  }
}
