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
import { AccountNewComponent } from './account/account-new/account-new.component';


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
    AccountNewComponent

  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [EventService],
  bootstrap: [AppComponent]
})
export class AppModule { }
