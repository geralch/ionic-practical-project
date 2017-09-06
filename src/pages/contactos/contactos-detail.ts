import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform, ViewController, ToastController } from 'ionic-angular';
import { GeneralService } from "../../app/general.service"

@Component({
    selector: 'contactos-detail-page',
    templateUrl: 'contactos-detail.html'
})
export class ContactosDetail implements OnInit {

    constructor(private toastCtrl: ToastController, public service: GeneralService, public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public viewctrl: ViewController) {

    }
    private nombre: string = ''
    private cargo: string = ''
    private cliente: string = ''
    private tel: string = ''
    private usuario: string = ''
    private direccion: string = ''
    ngOnInit() {
    }

    cerrarModal() {
        this.viewctrl.dismiss();
    }
    save() {

        this.viewctrl.dismiss({
            username: this.nombre,
            estado: this.cargo,
            nombres: this.cliente,
            apellidos: this.tel,
            apoyo: this.usuario,
            address: this.direccion

        });
    }
} 
