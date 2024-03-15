// pre load images from assets
import {TransportType} from "../models/TransportModel";
import {ImageURISource} from "react-native";

const FREIGHT =  require('../../../assets/truck.png'),
    PASSENGER = require('../../../assets/bus.png'),
    SPECIAL = require('../../../assets/special.png');
export const getIcon = (type: TransportType): ImageURISource => {
    switch (type) {
        case TransportType.FREIGHT:
            return  FREIGHT;
        case TransportType.PASSENGER:
            return PASSENGER;
        case TransportType.SPECIAL:
            return  SPECIAL
        default:
            return  FREIGHT;
    }
}
