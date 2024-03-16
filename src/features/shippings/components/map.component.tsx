import React, {useCallback, useContext, useRef} from "react";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import styles from "./styles";
import {ShippingViewModelContext} from "../viewmodels/shipping.viewmodel";
import {TransportType} from "../../../shared/models/TransportModel";
import {ImageURISource} from "react-native";
import {useFocusEffect} from "expo-router";
import {getIcon} from "../../../shared/utils/get-icon";
import { router } from 'expo-router';

export default function MapComponent () {
    const mapRef = useRef<MapView | null>(null);

    const {getShipping} = useContext(ShippingViewModelContext);

    const {data} = getShipping();

    useFocusEffect(useCallback(()=> {
        mapRef.current?.fitToElements({
            animated: true,
            edgePadding: {
                bottom: 150,
                left: 150,
                right: 150,
                top: 150,
            },
        });
    }, [data]));


    return (<MapView
        ref={mapRef}
        style={styles.map}
        onMapReady={() => {
             setTimeout(()=>  mapRef.current?.fitToElements({
                    animated: true,
                    edgePadding: {
                        bottom: 150,
                        left: 150,
                        right: 150,
                        top: 150,
                    },
                }), 100);
        }}
    >
        {data?.map((item, index) => (
            <Marker key={index} identifier={`transport${index}`} coordinate={item.coordinates} style={{width: 20}} onPress={()=>{
                router.push({pathname:'/details', params: {id: item.id}} as never);
            }}
                    image={getIcon(item.transport.type)}/>))}
    </MapView>);
}
