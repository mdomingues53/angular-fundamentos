import { Component, Input, Output, EventEmitter, ViewChild, ElementRef} from '@angular/core';

@Component({
  selector: 'contador',
  templateUrl: './output-properties.component.html',
  styleUrl: './output-properties.component.css'
})
export class OutputPropertiesComponent {

  @Input() valor: number = 0;

  @Output() emissor = new EventEmitter();

  @ViewChild('txtValor', { static: false }) txtValor: ElementRef;

  constructor(campoInput: ElementRef){
    this.txtValor = campoInput;
  }

  incrementa(){
    this.txtValor.nativeElement.value++;
    this.emissor.emit({novoValor : this.valor});
  }

  decrementa(){
    this.txtValor.nativeElement.value--;
    this.emissor.emit({novoValor : this.valor});
  }
}
