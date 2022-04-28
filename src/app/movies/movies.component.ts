import { Component, OnInit } from '@angular/core';
import { PopularMovies } from './interface_movies';
import { MoviesService } from '../movies.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.css']
})
export class MoviesComponent implements OnInit {

  constructor(private service: MoviesService, config:NgbCarouselConfig ) { 
    config.showNavigationArrows=true;
    config.keyboard=true;
  }

  movies: PopularMovies={
    page:0,
    results:[],
    total_results:0,
    total_pages:0
  }

  ngOnInit(): void {
    this.service.getPopularMovies().subscribe((mov)=>this.movies=mov);
  }
  imgUrl: String = "https://image.tmdb.org/t/p/original/";

}
