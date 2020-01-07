import { Component, OnInit } from '@angular/core';
import{FormControl,FormGroup,Validators, MinLengthValidator}from '@angular/forms'
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  logincontrol = new FormGroup({

    username:new FormControl('', Validators.required ,Validators.maxLength[12]),
    email: new FormControl('' ,Validators.required , Validators.maxLength[20]),
    tel : new FormControl('', Validators.required , MinLengthValidator[11]),
    
    password : new FormControl('',Validators.required, Validators.minLength[6])
    
    
    });
}
