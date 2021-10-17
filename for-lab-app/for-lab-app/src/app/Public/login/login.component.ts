import { Component, Input, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private route: ActivatedRoute, private router: Router) {
  }

  ngOnInit(): void {
  }

  novoUsuario(){
    this.router.navigate(['\cadastro-usuario']);
  }

  formulario(){
    this.router.navigate(['formulario']);
  }

}
