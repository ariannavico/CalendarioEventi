import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { EventsCalendarComponent } from './events-calendar/events-calendar.component';
import { FormsModule } from '@angular/forms';
import { MyCalendarComponent } from './my-calendar/my-calendar.component';

import { AgmCoreModule } from '@agm/core';
@NgModule({
  declarations: [
    AppComponent,
    EventsCalendarComponent,
    MyCalendarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule, 
    FormsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqTJEtgWaeG0ynAHgkWi3QQJqEmgPnRg8'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
