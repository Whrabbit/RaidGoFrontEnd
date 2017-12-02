import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import {EventItemComponent} from './event/event-list/event-item/event-item.component';
import { EventListComponent } from './event/event-list/event-list.component';
import {EventService} from "./event/event.service";
import {AppRoutingModule} from "./app-routing.module";
import {HttpModule} from "@angular/http";
import { EventDetailComponent } from './event/event-detail/event-detail.component';
import {EventComponent} from "./event/event.component";
import { EventStartComponent } from './event/event-start/event-start.component';
import { EventNewComponent } from './event/event-new/event-new.component';
import {FormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    EventListComponent,
    EventItemComponent,
    EventComponent,
    EventDetailComponent,
    EventStartComponent,
    EventNewComponent

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
