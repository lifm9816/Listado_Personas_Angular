import { Component } from '@angular/core';
import { Persona } from './persona.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Listado de Personas';
  
  personas: Persona[] = [
    new Persona("Amy", "Martínez"),
    new Persona("Luis", "Martínez"),
    new Persona("César Elías", "Martínez")];

    personaAgregada(persona: Persona)
    {
      this.personas.push(persona);
    }
}
