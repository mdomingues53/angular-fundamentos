import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-curso',
  templateUrl: './curso.component.html',
  styleUrl: './curso.component.css'
})
export class CursoComponent {

  @Input() nome: string = '';
}
