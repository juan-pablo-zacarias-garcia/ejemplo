import { Component, OnInit } from '@angular/core';
import { PopularMovies } from './interface_movies';
import { MoviesService } from '../movies.service';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Interface_Usuarios } from '../interfaces/usuarios';
import { MapType } from '@angular/compiler';
import { DocumentData } from '@firebase/firestore/dist/lite';


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

  Usuarios: Interface_Usuarios[] = [];

  usuario: Interface_Usuarios = {
    nombre:"Jose",
    correo: "jose@gmail.com"
  }
  usuario2: Interface_Usuarios ={
    nombre:"nada",
    correo: "nada"
  };





  ngOnInit(): void {
    this.service.getPopularMovies().subscribe((mov)=>this.movies=mov);
     this.service.getUsers().then(data => {
       this.Usuarios = <Interface_Usuarios[]>data;
    });
    //this.service.addUser(this.usuario).then(data => { console.log(data)});
    //this.service.deleteUser();
    this.service.getUser().then(data=>{
      this.usuario2 = <Interface_Usuarios>data;
      console.log(this.usuario2);
    }
    );
         
  }
  imgUrl: String = "https://image.tmdb.org/t/p/original/";

}
