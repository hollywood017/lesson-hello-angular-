import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-cool-bindings',
  templateUrl: './my-cool-bindings.component.html',
  styleUrls: ['./my-cool-bindings.component.css']
})
export class MyCoolBindingsComponent implements OnInit {
  feedbackMessage: string = 'Please DO NOT click on these anything. ';
  imageUrl: string = 'https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif';
  clickCount: number = 0;

  isInputDisabled: boolean = false;
  buttonText: string = 'Disable The Input';


  constructor() { }

  ngOnInit() {
  }

  changeTheImage(){
    //if current image is the 1st one....
    if(this.imageUrl === 'https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif'){
      //change it to the 2nd one
      this.imageUrl = 'https://media.giphy.com/media/28aGE5xerXkbK/giphy.gif';
    }
    else{
      //otherwise chant it back to the 1st one
      this.imageUrl = 'https://media.giphy.com/media/ZqlvCTNHpqrio/giphy.gif';
    }
    this.clickCount += 1;
  }//close changeTheImage

  updateMessage(){
    this.feedbackMessage = "Told you not to click the button";
    this.clickCount += 1;
  }//close updateMessage

  toggleThatInput(){
    if(this.isInputDisabled === true){
      this.isInputDisabled = false;
      this.buttonText = 'Disable This Input'
    }
    else{
      this.isInputDisabled = true;
      this.buttonText = 'Enable This Input';
    }
  }
}
