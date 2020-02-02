import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.component.html',
  styleUrls: ['./movies.component.scss']
})



export class MoviesComponent implements OnInit {
   TreandingMovie = [] ;
  constructor(private _MovieService: MovieService) { 
    
    _MovieService.GetTrendingMovie().subscribe((data) => {

      this.TreandingMovie=data.results;
      
      console.log(this.TreandingMovie);

    })
    
  }

  ngOnInit() {
  }

}
