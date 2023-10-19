import { EventEmitter, Injectable } from "@angular/core";
import { LoggingService } from "./LoggingService.service";
import { Persona } from "./persona.model";

@Injectable()
export class PersonaService
{
    personas: Persona[] = [
        new Persona("Amy", "Martínez"),
        new Persona("Luis", "Martínez"),
        new Persona("César Elías", "Martínez")];

    saludar = new EventEmitter<number>();    


    constructor(private LoggingService: LoggingService){}

   agregarPersona(persona: Persona)
   {
        this.LoggingService.enviarMensajeConsola("Se agregó a la persona: " + persona.nombre + " " + persona.apellido);
        this.personas.push(persona);
   }
}