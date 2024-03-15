import {queryOptions, useQuery, useQueryClient, UseQueryOptions, UseQueryResult} from "@tanstack/react-query";
import {ShippingModel} from "../../../shared/models/ShippingModel";
import {TransportType} from "../../../shared/models/TransportModel";
import {getShippingItem, getShippingList} from "../../../shared/services/shipping.service";
import {createContext, Dispatch, SetStateAction, useState} from "react";


export  interface ShippingViewModel {
    transportType: TransportType;
    setTransportType: Dispatch<SetStateAction<TransportType>>;
    getOptions: (type: TransportType) => UseQueryOptions<ShippingModel[], Error>;
    getShipping: (type?: TransportType | undefined) => UseQueryResult<ShippingModel[], Error>;
    getShippingById: (id: number) => UseQueryResult<ShippingModel, Error>;
    changeTransportType: (type: TransportType) => void;
}

/**
 * -------------------------------------------------------------
 * useShippingViewModel - returns settings view model functions
 * -------------------------------------------------------------
 */
export const useShippingViewModel = (): ShippingViewModel => {
    const [transportType, setTransportType] = useState(TransportType.NONE);
    // Access the client
    const queryClient = useQueryClient();
    /**
     * getOptions - get shipping list options by type
     * @param type
     */
    const getOptions = (type: TransportType = TransportType.NONE) =>
        queryOptions<ShippingModel[], Error>({
            initialData: [],
            queryKey: ['getShipping'],
            queryFn: () =>  getShippingList(type)
        });

    /**
     * getShipping - get shipping list by type
     * @param type
     */
    const getShipping = () =>
        useQuery<ShippingModel[], Error>(getOptions(transportType));

    /**
     * getShippingItem - get shipping item by id
     * @param id : number  - id of shipping
     */
    const getShippingById = (id: number) =>
        useQuery<ShippingModel, Error>({
            queryKey: ['getShippingById',id],
            queryFn: () =>  getShippingItem(id)
        });

    /**
     * changeTransportType - filter transports
     * @param type : TransportType type of transport
     */
    const changeTransportType = async (type: TransportType) => {
        try {
            console.log(['getShipping', type]);
            setTransportType(type);
            await queryClient.invalidateQueries({queryKey: ['getShipping'], refetchType: "all"});
        } catch (e) {
            console.error(e);
        }
    }


    return {
        getOptions,
        getShipping,
        changeTransportType,
        transportType,
        setTransportType,
        getShippingById
    }
}

export const ShippingViewModelContext = createContext(useShippingViewModel());
