import { Component ,OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ShipmentHistory} from './interface/shipment-history';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bennu';
  shipmentHistories: ShipmentHistory[] = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/json/data.json").subscribe((data : any) =>{
      this.shipmentHistories = data.shipmentHistory;
      console.log(this.shipmentHistories);
      // const test = data.shipmentHistory;
      // console.log("ship",this.shipmentHistory)
      // console.log(test);
    })
  }
}
