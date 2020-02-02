import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MovieService {

  constructor(private _HttpClient: HttpClient) {




  }

  GetTrendingAll(pageNumber): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/all/day?api_key=2f324ba9c074191b0cf84a2be1e128ca&page="+pageNumber)
  }
  GetTrendingMovie(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/movie/day?api_key=2f324ba9c074191b0cf84a2be1e128ca")
  }
  GetTrendingTv(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/Tv/day?api_key=2f324ba9c074191b0cf84a2be1e128ca")
  }
  GetTrendingperson(): Observable<any> {
    return this._HttpClient.get("https://api.themoviedb.org/3/trending/person/day?api_key=2f324ba9c074191b0cf84a2be1e128ca")
  }
}
