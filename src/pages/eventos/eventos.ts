import { Storage } from '@ionic/storage';
import { EventoDetailPage } from './evento-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, Platform } from 'ionic-angular';

import * as moment from "moment"



import { GeneralService } from "../../app/general.service"





@IonicPage({
  name: "eventos"
})
@Component({
  selector: 'page-eventos',
  templateUrl: 'eventos.html',
})
export class EventosPage {

  constructor(private storage: Storage, public service: GeneralService, public modal: ModalController, public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad EventosPage');
  }
  events: any[] = [
    {
      "id": 1,
      "title": "Reunion crm",
      "start": "2017-09-01T16:00:00",
      "end": "2017-09-01T18:00:00",
      "descripcion": "reunion para definir el estado del servidor"
    },
    {
      "id": 2,
      "title": "Long Event",
      "start": "2017-09-04T08:00:00",
      "end": "2017-09-04T08:30:00"
    },
    {
      "id": 3,
      "title": "Repeating Event",
      "start": "2017-09-02T16:00:00",
      "end": "2017-09-02T17:00:00"
    },
    {
      "id": 4,
      "title": "Repeating Event",
      "start": "2017-09-03T16:00:00",
      "end": "2017-09-03T16:00:00"
    },
    {
      "id": 5,
      "title": "Conference",
      "start": "2017-09-13T16:00:00",
      "end": "2017-09-13T16:00:00"
    }
  ];

  header: any;
  public vistadefecto = "month";


  ngOnInit() {

    if (this.platform.is("core")) {
      this.vistadefecto = "month";
    } else {

      this.vistadefecto = "agendaDay";

    }
    this.header = {
      left: 'prev,next today',
      center: 'title',
      right: 'month,agendaWeek,agendaDay'
    };
    // this.loadEvents()

  }

  handleDayClick(event) {
    console.log(event.date)
    let modal = this.modal.create(EventoDetailPage,
      {
        fecha_i: event.date._d,
        fecha_f: event.date._d
      }, { cssClass: "clasemodal" });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        console.log(data)
        this.events.push(data)
      }
    });
  }

  handleEventClick(e) {
    let modal = this.modal.create(EventoDetailPage,
      {
        id: e.calEvent.id,
        title: e.calEvent.title,
        descripcion: e.calEvent.descripcion,
        allDay: e.calEvent.allDay,
        fecha_i: moment.utc(e.calEvent.start).toDate(),
        fecha_f: moment(e.calEvent.end).toDate()
      }, { cssClass: "clasemodal" });
    modal.present();
    modal.onDidDismiss(data => {
      if (data) {
        let index: number = this.findEventIndexById(data.id);
        if (index >= 0) {
          this.events[index] = data;
        }
      }

    });

  }
  loadEvents() {
    this.service.getRequest(
      {},
      "eventos"
    ).then(
      data => {
        for (let i = 0; i < data["data"].length; i++) {
          //data["data"][i].color='#C2185B'
          data["data"][i].title = data["data"][i].titulo
          data["data"][i].start = moment(data["data"][i].fecha_inicio).utc();
          data["data"][i].end = moment(data["data"][i].fecha_fin).utc();

        }
        this.events = data["data"]
      });
  }
  findEventIndexById(id: number) {
    let index = -1;
    for (let i = 0; i < this.events.length; i++) {
      if (id == this.events[i].id) {
        index = i;
        break;
      }
    }

    return index;
  }
}
