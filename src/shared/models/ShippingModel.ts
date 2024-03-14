import {TransportModel} from "./TransportModel";
import {DriverModel} from "./DriverModel";

export type ShippingModel = {
    id: number;
    transport: TransportModel;
    driver: DriverModel;
}
