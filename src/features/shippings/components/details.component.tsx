import {Text, TouchableHighlight, View} from "react-native";
import {AllRoutes, useLocalSearchParams} from "expo-router";
import MapView, {Marker, PROVIDER_GOOGLE} from "react-native-maps";
import React, {useContext, useEffect, useRef, useState} from "react";
import styles from "./styles";
import {getIcon} from "../../../shared/utils/get-icon";
import {ShippingViewModelContext} from "../viewmodels/shipping.viewmodel";
import {useTranslation} from "react-i18next";
import {TransportType} from "../../../shared/models/TransportModel";
import * as Linking from "expo-linking";


type DetailRouter = AllRoutes & {
    id: string;
}
export default function DetailsComponent() {
    const mapRef = useRef<MapView | null>(null);
    const {t} = useTranslation();
    const [isMapReady, setMapReady] = useState(false);
    const params = useLocalSearchParams<DetailRouter>();
    const {getShippingById} = useContext(ShippingViewModelContext);
    const {data: item} = getShippingById(parseInt(params.id.toString()));

    useEffect(() => {
        if (isMapReady && item) {
            mapRef.current?.fitToElements({
                animated: true,
                edgePadding: {
                    bottom: 150,
                    left: 150,
                    right: 150,
                    top: 150,
                },
            })
        }
    }, [isMapReady, item]);
    
    return <View>
        <MapView
            ref={mapRef}
            maxZoomLevel={16}
            style={styles.mapDetails}
            onMapReady={() => setMapReady(true)}
        >
            {item && <Marker coordinate={item.coordinates} style={{width: 20}}
                             image={getIcon(item.transport.type)}/>}
        </MapView>
        <View style={styles.detailsInfoRow}>
            <Text style={styles.detailsLabel}>{t('TRANSPORT_TYPE')}: </Text>
            <Text>{t(`${TransportType[item?.transport.type || 0]}`)}</Text>
        </View>
        <View style={styles.detailsInfoRow}>
            <Text style={styles.detailsLabel}>{t('DRIVER_NAME')}: </Text>
            <Text>{item?.driver.name}</Text>
        </View>
        <View style={styles.detailsInfoRow}>
            <Text style={styles.detailsLabel}>{t('PHONE_NUMBER')}: </Text>
            <Text>{item?.driver.phone}</Text>
        </View>
        <View style={styles.detailsInfoRow}>
            <TouchableHighlight
                style={styles.apply}
                onPress={() => {
                    Linking.openURL(`tel:${item?.driver.phone}`);
                }}
                underlayColor='#fff'>
                <Text style={{textAlign: 'center', color: '#efefef'}}>{t('CALL')}</Text>
            </TouchableHighlight>
        </View>
        <View style={[styles.detailsInfoRow,{paddingTop:0}]}>
            <TouchableHighlight
                style={styles.apply}
                onPress={() => {
                    const message = "Добрый день, подскажите пожалуйста, какой номер заказа у вас сейчас в работе";
                    Linking.openURL(`whatsapp://send?text=${message}&phone=${item?.driver.phone}`)
                }}
                underlayColor='#fff'>
                <Text style={{textAlign: 'center', color: '#efefef'}}>{t('WHATSAPP_CHAT')}</Text>
            </TouchableHighlight>
        </View>
    </View>
}
