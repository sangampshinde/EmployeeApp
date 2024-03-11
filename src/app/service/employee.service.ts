import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor( private http:HttpClient) { }

  getAllEmployee():Observable<any>{
    return this.http.get('https://freeapi.gerasim.in/api/EmployeeApp/GetAllEmployee'); //31.58

  }
}
