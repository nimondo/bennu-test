import { Component, Input, OnInit} from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ShipmentHistory} from './interface/shipment-history';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'bennu';
  @Input() DatetoChange: string = '';
  shipmentHistories: ShipmentHistory[] = [];
  constructor(private httpClient: HttpClient){}
  ngOnInit(){
    this.httpClient.get("assets/json/data.json").subscribe((data : any) =>{
      const history : ShipmentHistory[] = data.shipmentHistory;
      let tps = '';
      for (const element of history) {
        let dat = `${element.eventDateTime}`;
        let date1 = dat?.substring(0, 10);
        console.log(date1 == tps, date1, tps)
        if(date1 == tps){
          element.displayMonth = false;
          tps = date1;
        }else{
          element.displayMonth = true;
        }
        tps = date1;

        element.order = this.orderNumber(dat?.substring(8,10));
        this.shipmentHistories.push(element);
      }
    })
  }

  orderNumber(ed: string){
    let st = ed.substring(0, 1);
    let ft = ed.substring(1, 2);
    if((st!="1") && (ft == "1")){
      return "st";
    }else if((st!="1") && (ft == "2")){
      return "nd";
    }else if((st!="1") && (ft == "3")){
      return "rd";
    }else{
      return "th";
    }

  }

}
