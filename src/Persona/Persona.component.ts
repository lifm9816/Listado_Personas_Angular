import { Component, Input } from "@angular/core";
import { PersonaService } from "src/app/Persona.service";
import { Persona } from "src/app/persona.model";

@Component({
    selector: "app-persona",
    templateUrl: "./Persona.component.html",
    styleUrls: ["./Persona.component.css"]
})

export class PersonaComponent
{
    @Input() persona: Persona;
    @Input() indice: number;

    constructor(private PersonaService: PersonaService){}

    emitirSaludo()
    {
        this.PersonaService.saludar.emit(this.indice);
    }
}