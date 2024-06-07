import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { environment } from "src/environments/environment";

@Injectable({
  providedIn: "root"
})
export class RankingService {
  constructor(private http: HttpClient) {}

  findRanking() {
    return this.http.get(environment.API_HOST + "/api/ranking");
  }

  registerRanking(result) {
    return this.http.post(environment.API_HOST + "/api/ranking", result);
  }
}
