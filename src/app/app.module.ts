import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { LoginComponent } from './Public/login/login.component';
import { CadastroUsuarioComponent } from './Public/cadastro-usuario/cadastro-usuario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { FormularioComponent, NgbdModalContent } from './Private/formulario/formulario.component';
import { PainelAdministradorComponent } from './painel-administrador/painel-administrador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CadastroUsuarioComponent,
    DashboardComponent,
    FormularioComponent,
    NgbdModalContent,
    PainelAdministradorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgbModule
  ],
  exports: [FormularioComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
