import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


import { EventComponent } from "./event/event.component";
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventFormComponent } from "./event/event-form/event-form.component";
import { AccountComponent } from "./account/account.component";
import { AccountFormComponent } from "./account/account-form/account-form.component";
import { CanDeactivateGuard } from "./interface/alert-changes.service";
import {ErrorPageComponent} from "./error-page/error-page.component";

const appRoutes: Routes = [
  {path: '', component: EventComponent, pathMatch: 'full'},
  {path: 'myevents', component: EventComponent, pathMatch: 'full'},
  {path: 'event/:id', component: EventDetailComponent, pathMatch: 'full'},
  {path: 'myevent/edit/:id', component: EventFormComponent, pathMatch: 'full'},
  {path: 'myevent/:id', component: EventDetailComponent, pathMatch: 'full'},
  {path: 'newevent', component: EventFormComponent},
  {path: 'login', component: AccountComponent},
  {path: 'register', component: AccountFormComponent},
  { path: 'account', children: [
    { path: 'settings', component: AccountFormComponent, canDeactivate: [CanDeactivateGuard] }
  ]},
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Page not found!'} },
  { path: '**', redirectTo: '/not-found' }
];
@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
