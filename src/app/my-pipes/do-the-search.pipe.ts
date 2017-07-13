import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'doTheSearch'
})
export class DoTheSearchPipe implements PipeTransform {

//*ngFor="let oneMorty of (mortyArray | doTheSearch:'fast')"
//value = mortyArray
//searchTerm = 'fast'
  transform(value: any, searchTerm: string): any {
    //if the array is undefined or something weird
    if(!value){
      return[];
    }
    // if no search term is provided return the ORIGINAL array
    if(!searchTerm){
      return value;
    }
    let matchedResults = [];

    //lower case the name so that it works for all cases
    searchTerm = searchTerm.toLowerCase();

    value.forEach((oneItem) => {
      //lower case the name so that it works for all cases
      // if the name has the search term in it, push it to the new array
      if(oneItem.name.includes(searchTerm)){
        matchedResults.push(oneItem);
      }
    });
    return matchedResults;
  }

}
