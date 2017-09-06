import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ClientesPage } from './clientes';
import { DataTableModule } from "primeng/components/datatable/datatable";

@NgModule({
  declarations: [
    ClientesPage,
  ],
  imports: [
    IonicPageModule.forChild(ClientesPage),
    DataTableModule
  ],
})
export class ClientesPageModule {}
