import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ContactosPage } from './contactos';
import { DataTableModule } from "primeng/components/datatable/datatable";

@NgModule({
  declarations: [
    ContactosPage,
  ],
  imports: [
    IonicPageModule.forChild(ContactosPage),
    DataTableModule
  ],
})
export class ContactosPageModule {}
