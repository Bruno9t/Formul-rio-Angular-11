import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

import {User} from "./user.interface"

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  baseURL="http://localhost:3000"


  addUser(user:User):Observable<User>{


    return this.http.post<User>(`${this.baseURL}/users`,user)
    
  }
}
