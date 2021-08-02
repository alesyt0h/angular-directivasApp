import { Directive, ElementRef, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[error-msg]'
})
export class ErrorMsgDirective implements OnInit, OnChanges {

  private _color: string   = 'red'; // Solo para recibir el valor y guardarlo, con el set color sobraria para cmbiar el color
  private _mensaje: string = 'Este campo es requerido'; // Solo para recibir el valor y guardarlo, con el set color sobraria para cmbiar el color

  public htmlElement: ElementRef<HTMLElement>;

  @Input() set color(valor:string) {
      // this.htmlElement.nativeElement.style.color = valor;   // Se puede hacer asi también o con el this.setColor(), ya que tengo el metodo lo uso
      this._color = valor;
      this.setColor();
  }

  @Input() set mensaje(valor:string) {
    // this.htmlElement.nativeElement.innerText = valor;  // Se puede hacer asi también o con el this.setMensaje(), ya que tengo el metodo lo uso
    this._mensaje = valor;
    this.setMensaje();
  }

  @Input() set valido(valor:boolean) {
    if(valor === true) {
      this.htmlElement.nativeElement.classList.add('hidden');
    } else {
      this.htmlElement.nativeElement.classList.remove('hidden');
    }

    // Con ternario
    // const baseElement = this.htmlElement.nativeElement.classList;
    // (valor === true) ? baseElement.add('hidden') : baseElement.remove('hidden')
  }

  constructor( private el: ElementRef<HTMLElement> ) { 
    this.htmlElement = el;
    // el.nativeElement.style.color = this._color // Tarea - Así lo solucione yo, el lo soluciono cambiando los metodos setColor y setMensaje a el valor de this._color y this._mensaje y llamando los metodos en el ngOnInit
  }
  ngOnChanges(changes: SimpleChanges): void {

    // Demasiado lioso...
    //
    // if (changes.mensaje) {
    //   const mensaje = changes.mensaje.currentValue;
    //   this.htmlElement.nativeElement.innerText = mensaje;
    // }

    // if (changes.color) {
    //   const color = changes.color.currentValue;
    //   this.htmlElement.nativeElement.style.color = color;
    // }

    // console.log(changes);
  }

  ngOnInit(): void {

    // console.log(this.color);   // undefined
    // console.log(this.mensaje);   // undefined
    
    this.setMensaje();
    this.setColor();
    this.setClass();
  }

  setClass(): void {
    this.htmlElement.nativeElement.classList.add('form-text');
  }

  setColor(): void {
    this.htmlElement.nativeElement.style.color = this._color;
  }

  setMensaje(): void {
    this.htmlElement.nativeElement.innerText = this._mensaje;
  }

}
