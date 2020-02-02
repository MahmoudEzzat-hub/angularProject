import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
 
  TreandingAll = [];
  term:string;
  pageNumbers:number[]=[];
  currentPage = 1;




  constructor(private _MovieService: MovieService) {

    for(let i =1 ; i <11 ; i++)
    {
      this.pageNumbers.push(i);
    }

    _MovieService.GetTrendingAll(this.currentPage).subscribe((data) => {

      this.TreandingAll=data.results;
      
      console.log(this.TreandingAll);

    })
  }
  changeNumber(ind)
  {
    this.currentPage  = ind;
   this._MovieService.GetTrendingAll(this.currentPage ).subscribe( (data) => {
     this.TreandingAll= data.results
   } )
  }
  prev()
  {
     this.changeNumber(this.currentPage -1)
  }
  next()
  {
     this.changeNumber(this.currentPage +1)
  }


  ngOnInit() {
  }

}
