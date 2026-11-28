import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './form-empleado.html',
  styleUrl: './form-empleado.css',
})
export class FormEmpleado {
  private fb = inject(FormBuilder);


  formEmpleado = this.fb.nonNullable.group({
    name: ['', [Validators.required]]
  })



}
