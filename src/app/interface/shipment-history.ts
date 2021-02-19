import {EventPosition} from "./event-position";


export interface ShipmentHistory {
    eventDateTime?: Date;
    eventPosition?: EventPosition;
    shipmentIsDelayed?: boolean;
    displayMonth?: boolean;
    order?: string;
}
