import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { PacienteComponent } from './components/paciente/paciente.component';
import { PacienteInternadoComponent } from './components/paciente-internado/paciente-internado.component';
import { PacienteAltaComponent } from './components/paciente-alta/paciente-alta.component';
import { CitadosComponent } from './components/citados/citados.component';
import { DoctoresComponent } from './components/doctores/doctores.component';
import { EnfermerosComponent } from './components/enfermeros/enfermeros.component';
import { RegistraUsuarioComponent } from './components/registra-usuario/registra-usuario.component';
import { InternarComponent } from './components/internar/internar.component';
import { ReporteoInternadosComponent } from './components/reporteo-internados/reporteo-internados.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'paciente', component: PacienteComponent },
  {path: 'registra-usuario', component: RegistraUsuarioComponent},
  {path: 'internar-paciente', component: InternarComponent},
  {path: 'pacientes-internados', component: PacienteInternadoComponent },
  {path: 'pacientes-alta', component: PacienteAltaComponent },
  {path: 'citados', component: CitadosComponent },
  {path: 'doctores', component: DoctoresComponent },
  {path: 'enfermeros', component: EnfermerosComponent },
  {path: 'reporteo-internados', component: ReporteoInternadosComponent},
  { path: '',   redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
