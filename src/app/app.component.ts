import { Component ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bennu';
  shipmentHistory: any = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/json/data.json").subscribe(data =>{
      this.shipmentHistory = data;
      console.log("ship",this.shipmentHistory)
    })
  }
}
