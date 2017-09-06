// import { ClientesDetail } from './Clientes-detail';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Platform, ModalController } from 'ionic-angular';
import * as _ from "lodash"
/**
 * Generated class for the ClientesPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: "clientes"
})
@Component({
  selector: 'page-clientes',
  templateUrl: 'clientes.html',
})
export class ClientesPage {

  constructor(public modal: ModalController, public platform: Platform, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ClientesPage');
    if (!this.platform.is("core")) {
      this.vistamovil = true;
    }
    if (this.platform.width() < 700) {
      this.vistamovil = true;
    }

    this.loadListUsers();

  }
  private vistamovil: boolean = false;
  private users: any[] = [
    {
      "id": "59a82715752f0e662399ee52",
      "estado": false,
      "nombres": "Caroline",
      "apellidos": "Finley",
      "username": "Audra",
      "apoyo": false,
      "address": "692 Lefferts Avenue, Macdona, South Carolina, 7655"
    },
    {
      "id": "59a82715971f64d62e1c7982",
      "estado": true,
      "nombres": "Higgins",
      "apellidos": "Bauer",
      "username": "Diann",
      "apoyo": false,
      "address": "663 Cleveland Street, Sanders, Massachusetts, 7540"
    },
    {
      "id": "59a82715b274c6a93cd5e917",
      "estado": false,
      "nombres": "Brooks",
      "apellidos": "Reed",
      "username": "Craft",
      "apoyo": false,
      "address": "338 Montague Street, Neahkahnie, Texas, 1305"
    },
    {
      "id": "59a82715a4ebd333045d7561",
      "estado": true,
      "nombres": "Cotton",
      "apellidos": "Buckner",
      "username": "Case",
      "apoyo": true,
      "address": "810 Denton Place, Zeba, South Dakota, 4215"
    },
    {
      "id": "59a82715f8b677a970daea33",
      "estado": true,
      "nombres": "Gay",
      "apellidos": "Burton",
      "username": "Kinney",
      "apoyo": false,
      "address": "820 Onderdonk Avenue, Blodgett, Pennsylvania, 697"
    },
    {
      "id": "59a827158b0c8567c9ad1a9b",
      "estado": true,
      "nombres": "Cortez",
      "apellidos": "Ross",
      "username": "Autumn",
      "apoyo": true,
      "address": "111 Jackson Place, Kipp, Indiana, 3150"
    }
  ]
  private fromdb: any[] = [];
  private filtroBasico: string = "";
  private usuarioSelected: any = [];


  loadListUsers() {
    /*this.service.getRequest(
      {},
      "users"
    ).then(
      data => {
        this.fromdb = data["data"];
        this.users = data["data"];
      });*/
  }
  onRowSelect(event, tipo) {
    let id = "";
    if (tipo == 1) {
      id = event
    } else {
      id = event.data.id
    }
    this.openDetail(id);

  }
  openDetail(id: string = '') {
    let parametros = {};
    if (id == '') {
      parametros = { userID: '' }
    } else {
      parametros = { userID: id }
    }
    //let modal = this.modalctrl.create(UsersDetailPage, parametros, { enableBackdropDismiss: false });

    //modal.present();
  }
  onRowUnselect(event) {
    this.usuarioSelected = [];
  }
  onInput($event) {
    if (this.filtroBasico != "") {
      let texto = this.filtroBasico;
      this.users = _.filter(this.fromdb, function (o) { return !o.nombres.indexOf(texto); });
    } else {
      this.users = this.fromdb;
    }
  }
  onCancel($event) {
    this.users = this.fromdb;
  }
  // openModal() {
  //   let modal = this.modal.create(ClientesDetail,
  //     {
  //       nuevo: true
  //     }, { cssClass: "clasemodal" });
  //   modal.present();
  //   modal.onDidDismiss(data => {
  //     if (data) {
  //       console.log(data)
  //       this.users.push(data)
  //     }
  //   });
  // }
}
