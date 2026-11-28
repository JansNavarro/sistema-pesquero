import { Component, inject, input } from '@angular/core';
import { AbstractControl, FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Iempleado } from '../../../shared/models/iempleado';


@Component({
  selector: 'form-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './form-empleado.html',
  styleUrl: './form-empleado.css',
})
export class FormEmpleado {
  private fb = inject(FormBuilder);
  private empleado = input.required<Iempleado>
  
  formEmpleado = this.fb.nonNullable.group({
    name: ['', [Validators.required]],
    email: ['', [Validators.required, Validators.email]],
    post: ['', [Validators.required]]
  });


  //Controlamos si el mensaje de error se debe de ver o no
  showError(control :AbstractControl):boolean{
    return control.invalid && (control.touched || control.dirty);
  }

  //capturamos los errores y lo pasamos como texto
  messageError(control :AbstractControl):string{
    if(!control.errors){
      return '';
    }
    //Capturamos el primer error del formulario
    const errorKey = Object.keys(control.errors)[0];

    switch(errorKey){
      case 'required':
        return 'El Campo es requerido';
      case 'email':
        return 'Formato invalido de Email';
      default:
        return 'Campo invalido'
    }

  }



}
