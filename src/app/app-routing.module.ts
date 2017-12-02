import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventComponent } from "./event/event.component";
import { EventStartComponent } from "./event/event-start/event-start.component";
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventNewComponent } from "./event/event-new/event-new.component";

const appRoutes: Routes = [
  {path: '', component: EventComponent, pathMatch: 'full', children: [
  {path: '', component: EventStartComponent},
  {path: ':id', component: EventDetailComponent}
]},
  {path: 'newevent', component: EventNewComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
