import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
// import { MaterialModule } from './material/material.module';
import { MatFormFieldModule } from '@angular/material/form-field';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import {
  MatDrawer,
  MatDrawerContainer,
  MatSidenavModule,
} from '@angular/material/sidenav';

import {
  AppRoutinModule,
  routingcomps,
} from './app-routing/app-routing.module';

@NgModule({
  imports: [
    BrowserModule,

    FormsModule,
    FlexLayoutModule,
    MatFormFieldModule,
    AppRoutinModule,
    MatButtonModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
  ],
  declarations: [AppComponent, routingcomps],
  bootstrap: [AppComponent],
})
export class AppModule {}
