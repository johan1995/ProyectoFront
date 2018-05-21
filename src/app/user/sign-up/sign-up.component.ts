import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PersonaModel } from '../../model/persona.model';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  private persona: PersonaModel;
  constructor() { 

    this.persona=new PersonaModel;
  }

  ngOnInit() {
  }
}

