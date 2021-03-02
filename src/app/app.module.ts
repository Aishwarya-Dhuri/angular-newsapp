import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatMenuModule  } from "@angular/material/menu";
import { HttpClientModule } from '@angular/common/http';
import { NewsApiService } from './services/news-api.service';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatButtonModule, 
    MatCardModule, 
    MatMenuModule, 
    MatToolbarModule,
     MatIconModule, 
     MatSidenavModule, 
     MatListModule,
     HttpClientModule
  ],
  providers: [NewsApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
