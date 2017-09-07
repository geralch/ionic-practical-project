import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GeralpruebaPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage({
  name: 'geralprueba'
})
@Component({
  selector: 'page-geralprueba',
  templateUrl: 'geralprueba.html',
})
export class GeralpruebaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GeralpruebaPage');
  }

  private selectedCat;
  private selectedCatEdit;
  private edit_new = "bolt";
  private nuevo_gato

  private cats: any[] = [
    {
      "nombre":"Salem",
      "genero":"Masculino",
      "color":"negro",
      "edad": "2 años",
    },
    {
      "nombre":"Mona",
      "genero":"Femenino",
      "color":"Rubia",
      "edad": "7 años",
    },
    {
      "nombre":"Alice",
      "genero":"Femenino",
      "color":"Blanco, Negro y Gris",
      "edad": "4 años",
    },
    {
      "nombre":"Michi",
      "genero":"Femenino",
      "color":"Blaco, Negro y Rubio",
      "edad": "1 años",
    },
  ]

  onSelect(cat){

    this.selectedCat  = cat;
    this.edit_new = "bolt";
    this.selectedCatEdit = null;
  }

  editCat(cat){
    this.selectedCatEdit = cat;
    this.nuevo_gato = null;    
    this.edit_new = "pencil";
    console.log(cat)
  }

  newCat(){
    this.selectedCatEdit = null;    
    this.nuevo_gato = "gato";
    this.edit_new = "plus";    
  }
}
