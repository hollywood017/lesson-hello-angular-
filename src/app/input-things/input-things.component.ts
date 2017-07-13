import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-things',
  templateUrl: './input-things.component.html',
  styleUrls: ['./input-things.component.css']
})
export class InputThingsComponent implements OnInit {

  message: string = 'Select an option';
  //this variable is used to store the user's selection
  mySelection: string;
  //this variable is used to store the user's name( text input)
  userName: string;

  //this variable is used to store the product info from the inputs
  theProduct: object = {};

  constructor() { }

  ngOnInit() {
  }

  reactToSelection(){
    if(this.mySelection === 'bell'){

      this.message = "You are unhealthy.";
    }
    else if( this.mySelection === 'ketchup'){
      this.message = "Gross."
    }
    else{
      this.message = "A fine selection."
    }
  }

  createProduct(){
    console.log('Received user product!');
    console.log(this.theProduct);
  }

}
