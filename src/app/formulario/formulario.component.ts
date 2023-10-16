import { Component, Output, EventEmitter, ViewChild, ElementRef } from '@angular/core';
import { Persona } from '../persona.model';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  @Output() personaCreada = new EventEmitter<Persona>();

  /*Con 2 way binding
  //nombreInput: string = "";
  //apellidoInput: string = "";
  <form class = "row g-3">
      <div class="col-auto">
        <label for="nombre" class="visually-hidden">Nombre</label>
        <input 
          id = "nombre" 
          type="text"
          name = "nombre" 
          placeholder = "Nombre" 
          class = "form-control"
          [(ngModel)]="nombreInput"   
        >
      </div>
  
      <div class="col-auto">
        <label for="apellido" class = "visually-hidden">Apellido</label>
        <input
          id = "apellido"
          type="text"
          name = "apellido"
          placeholder = "Apellido"
          class = "form-control"
          [(ngModel)]="apellidoInput"
        >
      </div>
  
      <div class="col-auto">
        <button type = "submit" class = "btn btn-primary" (click)="agregarPersona()" >Agregar Persona</button>
      </div>
  </form>

  */

  @ViewChild("nombreInput") nombreInput: ElementRef;
  @ViewChild("apellidoInput") apellidoInput: ElementRef;

  //Con referencias locales
  agregarPersona(){
    let persona = new Persona(this.nombreInput.nativeElement.value, this.apellidoInput.nativeElement.value);
    this.personaCreada.emit(persona);
  }
}
