import { Injectable } from '@angular/core'
import { Http, Response } from '@angular/http'
import { Observable } from 'rxjs'
import { environment } from 'src/environments/environment'

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: Http) {}

  findUser(): Observable<Response> {
    return this.http.get(environment.API_HOST + '/api/users')
  }

  findUsers(): Observable<Response> {
    return this.http.get(environment.API_HOST + '/api/users/list')
  }

  updateUser(user): Observable<Response> {
    return this.http.put(environment.API_HOST + '/api/users', user)
  }

  createUser(user): Observable<Response> {
    return this.http.post(environment.API_HOST + '/api/users', user)
  }
}
