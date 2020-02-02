import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {MovieService  } from '../movie.service';



@Component({
  selector: 'app-moviedetails',
  templateUrl: './moviedetails.component.html',
  styleUrls: ['./moviedetails.component.scss']
})
export class MoviedetailsComponent implements OnInit {
  [x: string]: any;

  ind;
  movieDetails:object;


  constructor( _ActivatedRoute:ActivatedRoute , _MovieService:MovieService) {

    this.ind= _ActivatedRoute.snapshot.paramMap.get("id")

    window.alert(this.ind)



   }

  ngOnInit() {
    this._MovieService.GetTrendingAll().subscribe((data) => {
      
      this.movieDetails = data [this.ind];
    })

  }

}
