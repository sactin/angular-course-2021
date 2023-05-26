import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss'],
})
export class Test2Component implements OnInit {
  //Creación de inputs.
  @Input() name?: string;
  @Input() lastName?: string;
  @Output() onSendData = new EventEmitter();

  onShowData() {
    this.onSendData.emit('general data' + this.name + ' ' + this.lastName);
  }

  

  constructor() {}
  

  // make sure this is AFTER the constructor
  ngOnInit() {
    console.log(this.name);
  }
}
