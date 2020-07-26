import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html'
})

export class ChildComponent implements OnInit {

  @Input() receivedParentMessage:Array<any>;

  @Output() messageToEmit = new EventEmitter<any>();

  messageToSend: Array<any> = [1,2,3,4,5,6,7,8,9,"Parent"];

  contructor() { }

  ngOnInit(): void {

  }

  sendMessageToParent(message: Array<any>) {
    this.messageToEmit.emit(message);
  }

}