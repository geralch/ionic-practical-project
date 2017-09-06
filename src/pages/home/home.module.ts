import { DataTableModule } from 'primeng/components/datatable/datatable';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { HomePage } from './home';
import {StepsModule} from "primeng/primeng"
@NgModule({
  declarations: [
    HomePage,
  ],
  imports: [
    StepsModule,
    IonicPageModule.forChild(HomePage),
    DataTableModule
  ],
})
export class HomePageModule {}
