import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { EventComponent } from "./event/event.component";
import { EventListComponent } from './event/event-list/event-list.component';
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import { EventItemComponent } from './event/event-list/event-item/event-item.component';
import { EventFormComponent } from './event/event-form/event-form.component';

import { EventService } from "./event/event.service";
import { AppRoutingModule } from "./app-routing.module";
import { AccountComponent } from './account/account.component';
import { AccountFormComponent } from './account/account-form/account-form.component';
import { AccountService } from "./account/account.service";
import { EventDetailItemComponent } from './event/event-detail/event-detail-item/event-detail-item.component';
import { ColorDirective } from "./directives/color.directive";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventComponent,
    EventListComponent,
    EventDetailComponent,
    EventItemComponent,
    EventFormComponent,
    AccountComponent,
    AccountFormComponent,
    EventDetailItemComponent,
    ColorDirective

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EventService, AccountService],
  bootstrap: [AppComponent]
})
export class AppModule { }
