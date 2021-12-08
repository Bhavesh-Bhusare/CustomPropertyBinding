import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css']
})
export class ServerComponent implements OnInit {
  //to make this element property accessible to all app component add '@Input()' in front of that property
  //to bind element propety through alias write name of alias in @Input('here')
  @Input('srvElement') element:{type:string, name:string, content:string};


  constructor() { }

  ngOnInit(): void {
  }

}
