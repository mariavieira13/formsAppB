import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-cadprod',
  templateUrl: './cadprod.page.html',
  styleUrls: ['./cadprod.page.scss'],
})
export class CadprodPage implements OnInit {

  formCadprod: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.formCadprod = this.formBuilder.group({
      nome: ['', Validators.compose([Validators.required, Validators.minLength(3)])],
      descricao: ['', Validators.compose([Validators.minLength(3)])],
      validade: ['', Validators.compose([Validators.required, Validators.maxLength(8)])],
      preco: ['', Validators.compose([Validators.required])],
    });
};

  ngOnInit() {
  }

  cadastrar() {
     console.log('Formulário: ', this.formCadprod.valid);
  }

}
