import { Component, OnInit } from '@angular/core';

import { Persona } from './models/persona'
import { PersonasService } from './services/personas.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  constructor(private personasService: PersonasService) { }

  listaPersonas: Persona[] = []

  ngOnInit(): void {
    // Aquí se realizan las tareas de inicialización
    this.personasService.getPersonas().subscribe(res => {
      this.listaPersonas = res 
    }, err => {
      console.log(err)
    })
  }

  selectedPersona: Persona = new Persona();

  validar(): boolean {
    if(!this.selectedPersona.name || this.selectedPersona.name.length > 30) {
      alert('No existe un nombre tan corto')
      return false 
    }
    if(!this.selectedPersona.email || this.selectedPersona.email.length <= 5) {
      if(this.selectedPersona.email.indexOf("@") == -1) {
        alert('No es valido este correo')
        return false 
      }
    }
    if(this.selectedPersona.dni.toString().length != 8) {
      alert('No es un DNI válido (Recuerda que los DNI tienen 8 dígitos)')
      return false 
    }
    if(!this.selectedPersona.fecha_de_nacimiento) {
      alert('Pon tu fecha de nacimiento')
      return false 
    }
    return true 
  }

  agregarRegistro() {
    if(this.validar()) {
      this.selectedPersona.id = this.listaPersonas.length + 1;
      this.selectedPersona.fecha_hora_actual = new Date().toLocaleString([], {year:'numeric', month:'2-digit', day:'2-digit', hour: '2-digit', minute:'2-digit'});
  
      // se está enviado adicionalmente la lista de personas por efectos de la simulación de un backend  
      this.personasService.createPersona(this.selectedPersona, this.listaPersonas).subscribe(res => {
        this.selectedPersona = new Persona();
        this.listaPersonas = res
      }, err => {
        console.log(err)
      })
    } 
  }

}
