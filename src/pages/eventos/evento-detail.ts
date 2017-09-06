import { Component, OnInit } from '@angular/core';
import { NavController, NavParams, Platform, ViewController, ToastController } from 'ionic-angular';
import * as moment from "moment"
import { GeneralService } from "../../app/general.service"

@Component({
    selector: 'evento-detail-page',
    templateUrl: 'evento-detail.html'
})
export class EventoDetailPage implements OnInit {

    constructor(private toastCtrl: ToastController, public service: GeneralService, public platform: Platform, public navCtrl: NavController, public navParams: NavParams, public viewctrl: ViewController) {
         
        this.fechainicio =this.navParams.get("fecha_i")
        this.fechafin =this.navParams.get("fecha_f")
        try {
            if (this.navParams.get("id")) { 
                this.titulo=this.navParams.get("title")
                this.descripcion=this.navParams.get("descripcion")

                this.esNuevo = false
            }
        } catch (e) {
            console.log(e)
        }
    }
    ngOnInit() {
    }
    private titulo: string = "Nuevo"
    private esNuevo: boolean = true;//Solo para validaciones
    private modificacionActiva: boolean = true;//Sirve 
    private fechainicio: Date  
    private fechafin: Date 
    private descripcion: string = "";
    private allDay: boolean = false;
    cerrarModal() {
        this.viewctrl.dismiss();
    }
    save() {
        let evento = {
            titulo: this.titulo,
            descripcion: this.descripcion,
            fecha_inicio: moment(this.fechainicio).local().format("YYYY-MM-DD HH:mm:ssZ"),
            fecha_fin: moment(this.fechafin).local().format("YYYY-MM-DD HH:mm:ssZ"),
            allDay: this.allDay
        } 

        let id=0;

        if(this.esNuevo){
            id=Math.floor((Math.random() * 20000) + 1)
        }else{
            id=this.navParams.get("id");
        }
        this.viewctrl.dismiss({id:id, title: this.titulo, start: this.fechainicio, end: this.fechafin, allDay: this.allDay })
        /*
        if (this.esNuevo) {
            this.service.postRequest(
                evento,
                "eventos/registro"
            ).then(
                data => {
                    this.viewctrl.dismiss({ id: data['data'], title: this.titulo, start: this.fechainicio, end: this.fechafin, allDay: this.allDay })

                    this.mostrarMensaje('Los cambios se almacenaron correctamente')
                });
        } else {
            this.service.putRequest(
                evento,
                "users/actualizar"
            ).then(
                data => {
                    this.mostrarMensaje('Los cambios se almacenaron correctamente')
                });
        }*/

    }
    mostrarMensaje(mensaje: string = "") {

        let toast = this.toastCtrl.create({
            message: mensaje,
            duration: 3000,
            position: 'top'
        });
        toast.present();
    }
} 
