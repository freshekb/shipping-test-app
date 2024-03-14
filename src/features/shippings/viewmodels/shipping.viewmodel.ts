import {useQuery, useQueryClient, UseQueryResult} from "@tanstack/react-query";
import {ShippingModel} from "../../../shared/models/ShippingModel";
import {TransportType} from "../../../shared/models/TransportModel";
import {getShippingList} from "../../../shared/services/shipping.service";


export  interface ShippingViewModel {
    getShipping: (type: TransportType) => UseQueryResult<ShippingModel[], Error>;
}

/**
 * -------------------------------------------------------------
 * useShippingViewModel - returns settings view model functions
 * -------------------------------------------------------------
 */
export const useShippingViewModel: ShippingViewModel = () => {
    // Access the client
    const queryClient = useQueryClient();

    /**
     * getShipping -
     * @param type
     */
    const  getShipping = (type: TransportType = TransportType.NONE) => useQuery({
        queryKey: ['getSettings',type],
        queryFn:() => getShippingList(type)
    });

    return {
        getShipping
    }
}
