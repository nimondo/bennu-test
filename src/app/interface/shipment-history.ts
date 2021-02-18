import {EventPosition} from "./event-position";


export interface ShipmentHistory {
    eventDatetime: Date;
    eventPosition: EventPosition;
    shipmentIsDelayed: boolean;
}
