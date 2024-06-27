import { Component } from '@angular/core';

@Component({
  selector: 'app-property-binding',
  templateUrl: './property-binding.component.html',
  //styleUrl: './property-binding.component.css'
  styles: [
    `
    .highlight{
        background-color: yellow;
      font-weight: bold;
    }
    `
  ]
})
export class PropertyBindingComponent {

  site: string = "www.udemy.com.br";
  curtiu: boolean = true;
  urlImagem: string = "https://picsum.photos/id/237/200/300";
  tecla: string = '';
  valorAtual: string = '';
  valorSalvo: string = '';
  isMouseOver: boolean = false;

  palavra: string = 'abc';

  pessoa: any = {
    nome:'',
    idade:'',
    end: {
      endereco:'',
      numero:''
    }
  }


  getValor() {
    return 2;
  }

  getCurtiuCurso() {
    return true;
  }

  botaoClicado() {
    alert('Seja bem vindo')
  }

  onKeyUp(evento: KeyboardEvent) {
    this.valorAtual = (<HTMLInputElement>evento.target).value;
    this.valorAtual = (evento.target as HTMLInputElement).value;
  }

  onKeyUpEnter(valor:string){
    this.valorSalvo = valor;
  }

  salvarValor(valor:string){
    this.valorSalvo = valor;
  }

  onMouseOverOut(){
    this.isMouseOver = !this.isMouseOver;
  }
}
