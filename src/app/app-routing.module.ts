import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MoviesComponent } from './movies/movies.component';
import { TVComponent } from './tv/tv.component';
import { PeopleComponent } from './people/people.component';
import { ContactsComponent } from './contacts/contacts.component';
import { AboutComponent } from './about/about.component';
import { MoviedetailsComponent } from './moviedetails/moviedetails.component';


const routes: Routes = [


  {path:'' , redirectTo:'about' , pathMatch:'full'},
  {path:'home' , component:HomeComponent},
  {path:'about' , component:AboutComponent},
  {path:'movies' , component:MoviesComponent},
  {path:'tv' , component:TVComponent},
  {path:'people' , component:PeopleComponent},
  {path:'contacts' , component:ContactsComponent},
  {path:'moviedetails/:id' , component:MoviedetailsComponent },


  




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
