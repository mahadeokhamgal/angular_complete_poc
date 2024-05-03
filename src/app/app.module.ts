import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AsyncPipe } from '@angular/common';
import { WelcomePageComponent } from './welcome-page/welcome-page.component';
import { MaterialModule } from './material/material.module';
import { AgGridLocalModule } from './ag-grid/ag-grid.module';
import { NgxFormlyModule } from './ngx-formly/ngx-formly.module';

@NgModule({
  declarations: [
    AppComponent,
    WelcomePageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AsyncPipe,
    MaterialModule,
    AgGridLocalModule,
    NgxFormlyModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [ AppRoutingModule ]
})
export class AppModule { }
