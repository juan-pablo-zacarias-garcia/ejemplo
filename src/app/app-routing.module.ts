import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicoComponent } from './basico/basico.component';
import { MoviesComponent } from './movies/movies.component';

const routes: Routes = [
  {path:'basico', component: BasicoComponent},
  {path:'movies', component: MoviesComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
