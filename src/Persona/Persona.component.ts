import { Component, Input } from "@angular/core";
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
}