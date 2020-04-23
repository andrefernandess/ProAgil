import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import { ModalModule, BsModalRef } from 'ngx-bootstrap/modal';
import { TooltipModule } from 'ngx-bootstrap/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { EventosComponent } from './Eventos/Eventos.component';
import { NavComponent } from './nav/nav.component';

import { DateTipeFormatPipePipe } from './_helps/DateTipeFormatPipe.pipe';
@NgModule({
   declarations: [
      AppComponent,
      EventosComponent,
      NavComponent,
      DateTipeFormatPipePipe
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      HttpClientModule,
      FormsModule,
      BrowserAnimationsModule,
      BsDropdownModule.forRoot(),
      TooltipModule.forRoot(),
      ModalModule.forRoot(),
   ],
   providers: [
      EventosComponent,
      BsModalRef
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
