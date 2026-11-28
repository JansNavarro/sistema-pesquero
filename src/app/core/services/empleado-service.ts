import { HttpClient } from '@angular/common/http';
import { inject, Injectable, signal } from '@angular/core';
import { empleadoDb, Iempleado } from '../../shared/models/iempleado';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EmpleadoService {
  private http = inject(HttpClient);
  private url = 'http://localhost:8080/api/empleados';

  private empleados = signal<Iempleado[]>([]);
  readonly empleadoState = this.empleados.asReadonly();


 crearEmpleado(data:empleadoDb):Observable<Iempleado>{
  return this.http.post<Iempleado>(this.url,data).pipe(
    tap((nuevoEmpleado) => {
      this.empleados.update((listaActual) => [...listaActual,nuevoEmpleado])
    })
  )
 };

 editarEmpleado(id:number, data:empleadoDb): Observable<Iempleado>{
  return this.http.put<Iempleado>(this.url,id).pipe(
    tap((empleadoEditado) => {
      this.empleados.update((listaActual) => 
      listaActual.map((emp) => emp.id === id ? empleadoEditado : emp)
    )
    })
  );
 };

 obtenerEmpleado():Observable<Iempleado[]>{
  return this.http.get<Iempleado[]>(this.url).pipe(
    tap((empleado) => {
      this.empleados.set(empleado)
    })
  )
 }










}
