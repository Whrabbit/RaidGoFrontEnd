import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventComponent } from "./event/event.component";
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventNewComponent } from "./event/event-new/event-new.component";
import { AccountComponent } from "./account/account.component";

const appRoutes: Routes = [
  {path: '', component: EventComponent, pathMatch: 'full'},
  {path: 'event/:id', component: EventDetailComponent},
  {path: 'newevent', component: EventNewComponent},
  {path: 'account', component: AccountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
