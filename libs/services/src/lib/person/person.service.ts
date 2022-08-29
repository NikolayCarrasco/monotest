import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '@my-org/models';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonService {

  constructor(
    private http: HttpClient
  ) { }

  getAllPeople(){
    return this.http.get(environment.baseUrl + '/people');
  }

  deletePerson(id: string): Observable<Person>{
    return this.http.delete<Person>(`${environment.baseUrl + '/people/'}${id}`);
  }
}
