import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaModel } from './../model/persona.model';
import { SignUpService } from './sign-up.service';
import { OK } from '../model/httpstatus';
import {Router} from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
  providers: [SignUpService]
})
export class SignUpComponent implements OnInit {

  private persona: PersonaModel;
  private isValid: boolean =true;
  private message: string ="";
  constructor(private signUpService : SignUpService,private router: Router) { 

    this.persona=new PersonaModel();
  }

  ngOnInit() {
  }
  public saveOrUpdate(): void{  
    this.isValid=this.signUpService.Validate(this.persona)

          if (this.isValid){
            this.signUpService.saveOrUpdate(this.persona).subscribe(res=>{
                  if (res.responseCode==OK){
                      this.router.navigate(["/inicioComponent"])
                  }else{
                    this.message=res.message;
                    this.isValid=false;
                  }
            });
          }
          else{
            this.message="Error campos Obligatorios"
          }

  }
}

