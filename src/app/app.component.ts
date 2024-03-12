import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 inputText = "Texto Inicial Alterado";
 inputType = "text"
 isDisabled = true;


 enableInput() {

    this.isDisabled = false;
    
 }

  disebleInput (){

    this.isDisabled = true;
  }

  setPasswordTypeInput(){
    
    this.inputType = 'password';

  }

  setTextTypeInput() {
    this.inputType = 'text';

  }

  logInputText() {

    console.log(this.inputText);

  }

  handleInputEvent(event:Event) {
    const currentText = (event.target as HTMLInputElement).value

    console.log (currentText)
  }

  }


