import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {

  transform(listOfMovies:any[] , term:string):any {

    if (term == undefined) {
      return listOfMovies;
    }
    return listOfMovies.filter(function(listOfMovies){
      if(listOfMovies.title != undefined){
        return listOfMovies.title.includes(term);
      }
      

    });
  }

}
