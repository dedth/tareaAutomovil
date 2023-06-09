import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule, FormGroup } from '@angular/forms';



import { AppComponent } from './app.component';
import { ButtonModule } from 'primeng/button';

import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from "primeng/panel";
import { ListboxModule } from 'primeng/listbox';
import { CalendarModule } from 'primeng/calendar';
import { CheckboxModule } from 'primeng/checkbox';
import { MultiSelectModule } from 'primeng/multiselect';
import { CascadeSelectModule } from 'primeng/cascadeselect';
import { RatingModule } from 'primeng/rating';
import { SelectButtonModule } from 'primeng/selectbutton';
import { KnobModule } from 'primeng/knob';
import { AutomovilComponent } from './automovil/automovil.component';
import { ImageModule } from 'primeng/image';






@NgModule({
  declarations: [
    AppComponent,
    AutomovilComponent,
  ],

  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ButtonModule,
    InputTextModule,
    PanelModule,
    CalendarModule,
    CheckboxModule,
    ListboxModule,
    AppRoutingModule,
    MultiSelectModule,
    CascadeSelectModule,
    RatingModule,
    SelectButtonModule,
    KnobModule,
    ImageModule,
   

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
