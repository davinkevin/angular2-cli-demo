import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import {MdCardModule} from '@angular2-material/card';
import { AppComponent } from './app.component';
import {TimeService} from './shared/time/time.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MdCardModule.forRoot()
  ],
  providers: [TimeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
