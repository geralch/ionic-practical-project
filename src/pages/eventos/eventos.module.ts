import { CalendarModule } from 'primeng/primeng';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { EventosPage } from './eventos';
import {ScheduleModule} from "primeng/primeng"
@NgModule({
  declarations: [
    EventosPage,
  ],
  imports: [
    ScheduleModule,
    IonicPageModule.forChild(EventosPage),
    CalendarModule
  ],
})
export class EventosPageModule {}
