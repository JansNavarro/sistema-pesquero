import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form-empleado',
  imports: [ReactiveFormsModule],
  templateUrl: './form-empleado.html',
  styleUrl: './form-empleado.css',
})
export class FormEmpleado {
  private fb = inject(FormBuilder);



}
