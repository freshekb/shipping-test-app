import {TransportType} from "../models/TransportModel";
import {ShippingModel} from "../models/ShippingModel";
import  data from '../../../assets/data/shipping_list.json';

/**
 * ---------------------------------------------------
 *  SHipping Service contains data set/get functions
 *  --------------------------------------------------
 */


/**
 * getShippingList - returns shipping list by type
 * @param type : TransportType - type of transport
 * @return - list of shipping
 */

const getShippingList = async (type: TransportType): Promise<ShippingModel[]> => {

    const list: ShippingModel[] = data;

    const result =  type === TransportType.NONE ?
                list :
        list.filter(s => s.transport.type === type);
    return  result;
}

/**
 * getShippingItem - returns shipping list by type
 * @param id : number - type of transport
 * @return - list of shipping
 * @throws NOT_FOUND
 */

const getShippingItem = async (id: number): Promise<ShippingModel> => {
    const item: ShippingModel | undefined =  data.find(s=>s.id === id);
    if (item === undefined) throw new Error("NOT_FOUND");
    return item;
}


export  {
    getShippingList,
    getShippingItem
}
