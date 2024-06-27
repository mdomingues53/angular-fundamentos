import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent {

  url: string = "www.udemy.com";
  urlImagem: string = "https://picsum.photos/id/237/200/300";

  nomeDoCurso: string = 'Angular';

  valorInicial: number = 100;

  getTotalSoma(num1: number, num2: number){
    return num1 + num2;
  }

  getFeedBackCurso(){
    return true;
  }

  getUrlFoto(){
    return this.urlImagem;
  }

  onEmitAlert(evento:any){
    console.log(evento.novoValor);
  }
}
