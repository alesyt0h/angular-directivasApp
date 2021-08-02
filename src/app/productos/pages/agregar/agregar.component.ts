import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {

  // colorQueQuiero: string = 'green';

  texto1: string = 'Alejandro Ortigosa';
  color : string = 'green';

  miFormulario: FormGroup = this._formBuilder.group({
    nombre: ['', Validators.required ]
  });

  constructor(private _formBuilder: FormBuilder) {  }

  ngOnInit(): void {
  }

  tieneError(control: string): boolean {
    return this.miFormulario.get(control)?.invalid || false;
  }

  cambiarNombre() {
    this.texto1 = Math.random().toString()
  }

  cambiarColor() {
    const color = "#xxxxxx".replace(/x/g, y=>(Math.random()*16|0).toString(16));
    this.color = color;
  }
}
