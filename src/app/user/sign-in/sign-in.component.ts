import { Component, OnInit } from '@angular/core';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  constructor(private router:Router ) { }

  ngOnInit() {
  }

  loginUser(e){
      e.preventDefault();
      console.log(e);
      var username =e.target.elements[0].value;
      var password =e.target.elements[1].value;
      console.log(username,password);
      if(username =='admin' && password=='admin'){
            this.router.navigate(['home']);
      }
  }
}
