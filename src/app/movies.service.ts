import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularMovies } from './movies/interface_movies';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  constructor(private http: HttpClient) { }
  moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=a362707ee32c9eb04fbddfaa736ed774&language=en-US&page=1';

  getPopularMovies():Observable<PopularMovies>{
    return this.http.get<PopularMovies>(this.moviesUrl);
  }


}
