import { Component, OnInit } from '@angular/core';
import { Persona } from './persona.model';
import { LoggingService } from './LoggingService.service';
import { PersonaService } from './Persona.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  
  title = 'Listado de Personas';
  
  personas: Persona[] = [];

    constructor(private loggingService: LoggingService,
      private PersonaService: PersonaService){}

      ngOnInit(): void {
        this.personas = this.PersonaService.personas;
      }
}
