import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-people',
  templateUrl: './people.component.html',
  styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {
  Trendingperson = [] ;
  constructor(private _MovieService: MovieService) {

    _MovieService.GetTrendingperson().subscribe((data) => {

      this.Trendingperson=data.results;
      

    })
   }

  ngOnInit() {
  }

}
