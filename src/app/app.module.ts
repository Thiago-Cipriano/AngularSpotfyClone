import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRotas } from './app.routes';
import { AppComponent } from './app.component';
import {RouterModule} from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(AppRotas),
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
