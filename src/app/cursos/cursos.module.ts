import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CursosComponent } from './cursos.component';
import { CursosDetalheComponent } from './cursos-detalhe/cursos-detalhe.component';
import { CursosService } from './cursos.service';
import { AlertModule } from 'ngx-bootstrap/alert';

@NgModule({
  declarations: [
    CursosComponent,
    CursosDetalheComponent
  ],
  imports: [
    CommonModule,
    AlertModule.forRoot()
  ],
  exports: [
    CursosComponent
  ],
  providers:[ CursosService]
})
export class CursosModule { }
