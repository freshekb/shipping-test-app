import {TransportModel} from "./TransportModel";
import {DriverModel} from "./DriverModel";
import {LatLng} from "react-native-maps";

export type ShippingModel = {
    id: number
    coordinates: LatLng;
    transport: TransportModel;
    driver: DriverModel;
}
