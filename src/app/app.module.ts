import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './landing-page/app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonElementsModule } from './common-elements/common-elements.module';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    CommonElementsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
