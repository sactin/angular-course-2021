import { Component,Input,OnInit } from '@angular/core';

@Component({
  selector: 'app-test2',
  templateUrl: './test2.component.html',
  styleUrls: ['./test2.component.scss']
})
export class Test2Component implements OnInit {
  
  //Creación de inputs.
  @Input() name: string;
  @Input() lastName: string;

  constructor() { }

 

}
