import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventComponent } from "./event/event.component";
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventFormComponent } from "./event/event-form/event-form.component";
import { AccountComponent } from "./account/account.component";

const appRoutes: Routes = [
  {path: '', component: EventComponent, pathMatch: 'full'},
  {path: 'event/myevents', component: EventComponent, pathMatch: 'full'},
  {path: 'event/:id', component: EventDetailComponent, pathMatch: 'full'},
  {path: 'myevent/edit/:id', component: EventFormComponent, pathMatch: 'full'},
  {path: 'myevent/:id', component: EventDetailComponent, pathMatch: 'full'},
  {path: 'newevent', component: EventFormComponent},
  {path: 'account', component: AccountComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
