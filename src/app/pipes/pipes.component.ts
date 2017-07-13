import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {
  randomText: string;

  rightNow: Date = new Date();
  mortySearchText: string;
  mortyArray: object[] = [
    {name: 'old morty', pictureUrl:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi_75zsw4bVAhXLKiYKHf5EDpgQjRwIBw&url=https%3A%2F%2Fboards.fireden.net%2Fv%2Fthread%2F362909162%2F&psig=AFQjCNFE4wHzEwDPNf8jxQS5GOs1H4HoOA&ust=1500044628366444'},
    {name: 'no eye morty', pictureUrl:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwiRn-iDxIbVAhUJ1CYKHXm4DE0QjRwIBw&url=http%3A%2F%2Frickandmorty.wikia.com%2Fwiki%2FNo_Eye_Morty&psig=AFQjCNEpUTXHXhiVGZK_R0vpQ96WLuB4Vg&ust=1500044678044062'},
    {name: 'double morty', pictureUrl:'https://www.google.com/url?sa=i&rct=j&q=&esrc=s&source=images&cd=&cad=rja&uact=8&ved=0ahUKEwi2zsWPxIbVAhVCRCYKHZ-fCuoQjRwIBw&url=http%3A%2F%2Frickandmorty.wikia.com%2Fwiki%2FDouble_Morty_(Pocket_Mortys)&psig=AFQjCNHmS4VmT4v6Of7CTZYKMsx6DfqdNQ&ust=1500044703087784'},
    {name: 'scruffy morty', pictureUrl:'https://vignette2.wikia.nocookie.net/rickandmorty/images/9/97/2_Scruffy_Morty.png/revision/latest?cb=20160116021015'},
      ]

  constructor() { }

  ngOnInit() {
  }

  addOneHour(){
    //Make a copy of the date
    let updated = new Date(this.rightNow);

    updated.setHours(this.rightNow.getHours() + 1);

    //Save the copy in the object
    this.rightNow = updated;
  }

}
