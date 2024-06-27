import { Component } from '@angular/core';
import { CursosService } from './cursos.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.css'
})
export class CursosComponent {

  urlLink: string;

  listaCursos: string[];

  constructor(private cursosService : CursosService){
     this.urlLink = "www.udemy.com.br";

     this.listaCursos = cursosService.getCursos();
  }
}
