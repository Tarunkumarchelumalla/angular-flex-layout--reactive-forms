import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { MaterialModule } from './material/material.module';

@NgModule({
  imports: [BrowserModule, FormsModule, FlexLayoutModule,MaterialModule],
  declarations: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule { }
