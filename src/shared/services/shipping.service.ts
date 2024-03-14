import {TransportType} from "../models/TransportModel";
import {ShippingModel} from "../models/ShippingModel";


/**
 * ---------------------------------------------------
 *  SHipping Service contains data set/get functions
 *  --------------------------------------------------
 */


/**
 * getShippingList - returns shipping list by type
 * @param type TransportType - type  of
 */

const getShippingList = (type: TransportType): Promise<ShippingModel[]> => {
    return fetch('', {
        "headers": {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }
    }).then(response => response.json())
        .then((list: ShippingModel[]) =>
            type === TransportType.NONE ?
                list :
                list.filter(s => s.transport.type === type));
}


export  {
    getShippingList
}
