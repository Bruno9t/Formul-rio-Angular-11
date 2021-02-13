import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import {CadastroService} from "./cadastro.service"
import { User } from './user.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.sass']
})
export class RegisterComponent implements OnInit {

  constructor(
    private service: CadastroService,
    private fb: FormBuilder
    ) { }

  ngOnInit(): void {
  }

  form = this.fb.group({
    name:[""],
    surname:[""]
  })

  onSubmit(){
    
    this.service.addUser(
      this.form.value
    )
    .subscribe((data:User)=>{
      console.log(data)
    })

  }

}
