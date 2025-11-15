import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
  step = 1;

  
}