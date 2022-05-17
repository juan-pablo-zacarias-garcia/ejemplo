import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PopularMovies } from './movies/interface_movies';
import { Interface_Usuarios } from './interfaces/usuarios';

import { initializeApp } from 'firebase/app';
import { environment } from '../environments/environment';

import { doc,getFirestore, collection, getDocs, addDoc, deleteDoc, DocumentReference, updateDoc, deleteField, getDoc } from 'firebase/firestore/lite';





@Injectable({
  providedIn: 'root'
})
export class MoviesService {

  
  

  constructor(private http: HttpClient) { }
  moviesUrl = 'https://api.themoviedb.org/3/movie/popular?api_key=a362707ee32c9eb04fbddfaa736ed774&language=en-US&page=1';

  app = initializeApp(environment.firebaseConfig);
  db = getFirestore(this.app);

  getPopularMovies():Observable<PopularMovies>{
    return this.http.get<PopularMovies>(this.moviesUrl);
  }

  //obtener todos los usuarios
  async  getUsers(){
  const usuarios = collection(this.db, 'usuarios');
  const usuariosSnapshot = await getDocs(usuarios);
  const usuariosList = usuariosSnapshot.docs.map( doc=>doc.data()) as Interface_Usuarios[];
  return usuariosList;
  }
//obtener un usuario
  async getUser(){
    const documento = doc(this.db, 'usuarios', "VVh69FJvnB5dU95MlYyK");
    const usuario = await getDoc(documento).then(doc => doc.data()) as Interface_Usuarios;
    return usuario;
  }
  async addUser( usuario:Interface_Usuarios ){
    try {
      const docRef = await addDoc(collection(this.db, "usuarios"), usuario);
      return true;
    } catch (e) {
      return false;
    }
  }
  async deleteUser(){
    try {
      const documento = doc(this.db, 'usuarios', "jVHOBH30MfYfyM3sfaAs");
      await deleteDoc(documento);
      return true;
    } catch (e) {
      return false;
    }
  }




}
