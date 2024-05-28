import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './arquitectura/header/header.component';
import { HeaderMainComponent } from './arquitectura/header-main/header-main.component';
import { LoginComponent } from './components/login/login.component';
import { AccionesComponent } from './components/acciones/acciones.component';
import { Acciones2Component } from './components/acciones2/acciones2.component';
import { HomeComponent } from './components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PacienteInternadoComponent } from './components/paciente-internado/paciente-internado.component';
import { PacienteAltaComponent } from './components/paciente-alta/paciente-alta.component';
import {TableModule} from 'primeng/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CitadosComponent } from './components/citados/citados.component';
import {CalendarModule} from 'primeng/calendar';
import {DropdownModule} from 'primeng/dropdown';
import { EnfermerosComponent } from './components/enfermeros/enfermeros.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { TurnosComponent } from './components/turnos/turnos.component';
import { ToastrModule } from 'ngx-toastr';
import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';
import { InternarComponent } from './components/internar/internar.component';
import { HttpClientModule } from '@angular/common/http';
import { ReporteoInternadosComponent } from './components/reporteo-internados/reporteo-internados.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeaderMainComponent,
    LoginComponent,
    AccionesComponent,
    Acciones2Component,
    HomeComponent,
    PacienteComponent,
    PacienteInternadoComponent,
    PacienteAltaComponent,
    CitadosComponent,
    EnfermerosComponent,
    DoctoresComponent,
    TurnosComponent,
    RegistraUsuarioComponent,
    InternarComponent,
    ReporteoInternadosComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    FormsModule, 
    ReactiveFormsModule,
    TableModule,
    CalendarModule,
    DropdownModule,
    HttpClientModule,
    ToastrModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
