import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-contato',
  templateUrl: './contato.component.html'
})
export class ContatoComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  enviarFormulario(form: NgForm){
    if(form.valid)
      this.router.navigate(['./sucesso']);    
    else
      alert('Preencha o formulário corretamente para enviar os dados!');
  }

}
