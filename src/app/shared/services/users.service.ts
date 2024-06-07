import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class UsersService {
  constructor(private http: HttpClient) {}

  findUser(): Observable<any> {
    return this.http.get(environment.API_HOST + "/api/users");
  }

  findUsers(): Observable<any> {
    return this.http.get(environment.API_HOST + "/api/users/list");
  }

  updateUser(user): Observable<any> {
    return this.http.put(environment.API_HOST + "/api/users", user);
  }

  createUser(user): Observable<any> {
    return this.http.post(environment.API_HOST + "/api/users", user);
  }
}
