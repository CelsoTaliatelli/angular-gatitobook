import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

 usuario = '';
 senha =  '';

  constructor() { }

  login(){
    console.log(this.usuario,this.senha);
  }

  ngOnInit(): void {
  }

}
