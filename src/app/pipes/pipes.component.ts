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
    {name: 'old morty', pictureUrl:'http://www.gamezebo.com/wp-content/uploads/2016/01/pm_mortys05.jpg'},
    {name: 'no eye morty', pictureUrl:'http://www.gamezebo.com/wp-content/uploads/2016/01/pm_mortys10.jpg'},
    {name: 'double morty', pictureUrl:'http://www.gamezebo.com/wp-content/uploads/2016/01/pm_mortys46.jpg'},
    {name: 'scruffy morty', pictureUrl:'http://www.gamezebo.com/wp-content/uploads/2016/01/pm_mortys02.jpg'},
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
