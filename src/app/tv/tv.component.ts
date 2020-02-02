import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-tv',
  templateUrl: './tv.component.html',
  styleUrls: ['./tv.component.scss']
})
export class TVComponent implements OnInit {
  TreandingTv = [] ;
  
  constructor(private _MovieService: MovieService) {
    _MovieService. GetTrendingTv().subscribe((data) => {

      this.TreandingTv=data.results;
      
      console.log(this.TreandingTv);

    })
   }

  ngOnInit() {
  }

}
