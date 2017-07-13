import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  //in a template you use the pipe like this:
  //{{userName | capitalize}}
  //                  |
  //         ----------
  //         |
  name: 'capitalize'
    //the "name" setting specifies how to use it
})
export class CapitalizePipe implements PipeTransform {
    //The logic of our pipes goes inside the "transform()" method.

    //"new york" -> "New York"
    //{{ "new york" | capitalize }}
  transform(value: any, args?: any): any {
    // the value variable is the thing that you are modifying
    //(the thing on the left of the "|")

    //value = "new york";

    const wordsArray = value.split(' ');


    //capitalize the pieces
    let capitalizeWords = wordsArray.map((oneWord) => {
      return oneWord.charAt(0).toUpperCase() + oneWord.slice(1);
    });

    //join the capitalized pieces together with a space between them
    return capitalizeWords.join(' ');

  }

}
