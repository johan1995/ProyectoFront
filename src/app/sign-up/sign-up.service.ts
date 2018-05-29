import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { PersonaModel } from '../model/persona.model';
import {HttpClient} from '@angular/common/http';
import { RestResponse } from '../model/restResponse.model';
@Injectable()
export class SignUpService {

  constructor(private http:HttpClient) { }

  public Validate(persona: PersonaModel): boolean{
    let isValid= true;

    if (!persona.apellido){
        isValid=false;
    }
    if (!persona.nombre){
      isValid=false;
    }
    if (!persona.num_documento){
      isValid=false;
    }

    if (!persona.telefono){
      isValid=false;
    }
    return isValid;
  }


  public saveOrUpdate (persona:PersonaModel) : Observable<RestResponse>{
      return this.http.post<RestResponse>("http://localhost:8080/saveOrUpdate",JSON.stringify(persona))
  }
}
