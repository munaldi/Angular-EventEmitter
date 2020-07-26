import { Component, OnInit } from '@angular/core'; 

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html'
})

export class ParentComponent implements OnInit {

  receivedMessage: Array<any>;
  messageToSend: Array<any>;

  constructor() { }

  ngOnInit(): void{

  }

  sendToChild(message: Array<any>){
    this.messageToSend = message;
  }

  getMessage(message: Array<any>){
    this.receivedMessage = message;
  }


}