import { Component,OnInit } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  serverElements:Array<{type:string, name:string, content:string}> = [];

  constructor(){
  }


ngOnInit():void{
}
    onServerCreated(serverData: {serverName:string, serverContent:string}){
    this.serverElements.push({
      type:'server',
      name:serverData.serverName,
      content:serverData.serverContent
    });
  }
  
  onBlueprintCreated(blueprintData: {blueprintName:string, blueprintContent:string}){
    this.serverElements.push({
      type:'blueprint',
      name:blueprintData.blueprintName,
      content:blueprintData.blueprintContent
    });
  }


}
