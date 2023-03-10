import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { Persona } from '../models/persona';

@Injectable({
  providedIn: 'root'
})

// name
// email
// dni
// fecha de nacimiento
// genero 
export class PersonasService {
  personaArray: Persona[] = [
    { id: 1, name: "Esteban", email: "esteban@gmail.com", dni: "73992015", fecha_de_nacimiento: new Date(2004, 4, 19), genero: "Masculino", fecha_hora_actual: '09/03/2023, 23:01'},
    { id: 2, name: "Jennifer", email: "jennifer@gmail.com", dni: "03913834", fecha_de_nacimiento: new Date(2000, 8, 24), genero: "Femenino", fecha_hora_actual: '09/03/2023, 23:01'},
    { id: 3, name: "Joel", email: "joel@gmail.com", dni: "45930512", fecha_de_nacimiento: new Date(2001, 0, 10), genero: "Masculino", fecha_hora_actual: '09/03/2023, 23:04'},
    { id: 4, name: "Fernanda", email: "fernanda@gmail.com", dni: "74883024", fecha_de_nacimiento: new Date(1998, 2, 29), genero: "Femenino", fecha_hora_actual: '09/03/2023, 23:06'},
    { id: 5, name: "Kevin", email: "kevin@gmail.com", dni: "08678234", fecha_de_nacimiento: new Date(2003, 5, 3), genero: "Masculino", fecha_hora_actual: '09/03/2023, 23:40'},
  ]
  constructor(
    private http: HttpClient
  ) { }

  getPersonas(): Observable<any>{
    return of(this.personaArray);
    // return this.http.get('https://mi-api.com/datos');
  }

  createPersona(persona: Persona, personasActuales: Persona[]): Observable<any> {
    // return this.http.post('https://mi-api.com/datos', employee)
    personasActuales.push(persona)
    return of(personasActuales)
  }


}
