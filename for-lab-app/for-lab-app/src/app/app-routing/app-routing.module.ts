import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from '../dashboard/dashboard.component';
import { CadastroUsuarioComponent } from '../Public/cadastro-usuario/cadastro-usuario.component';
import { FormularioComponent } from '../Private/formulario/formulario.component';

const routes: Routes = [
  {
    path: 'cadastro-usuario',
    component: CadastroUsuarioComponent,
  },
  {
    path: 'formulario',
    component: FormularioComponent,
  },
  {
    path: '',
    component: DashboardComponent,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
