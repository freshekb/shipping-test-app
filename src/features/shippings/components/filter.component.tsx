import {Text, TouchableHighlight, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React, {useContext, useState} from "react";
import {useTranslation} from "react-i18next";
import {TransportType} from "../../../shared/models/TransportModel";
import styles from "./styles";
import {ShippingViewModelContext} from "../viewmodels/shipping.viewmodel";
import DropDown from "react-native-paper-dropdown";
export default function FilterComponent() {
    const [showDropDown, setShowDropDown] = useState(false);

    const {t} = useTranslation();
    const { changeTransportType,transportType,setTransportType} = useContext(ShippingViewModelContext);
    const  types = [
        {
            label: "---",
            value: TransportType.NONE,
        },
        {
            label: t('FREIGHT'),
            value: TransportType.FREIGHT,
        },
        {
            label: t('PASSENGER'),
            value: TransportType.PASSENGER,
        },
        {
            label: t('SPECIAL'),
            value: TransportType.SPECIAL,
        },
    ]
    return (
        <View style={{flexDirection:'row', justifyContent: 'space-between'}}>
            <View  style={styles.picker}><DropDown

                label={t('TRANSPORT_TYPE')}
                mode={"outlined"}
                visible={showDropDown}
                showDropDown={() => setShowDropDown(true)}
                onDismiss={() => setShowDropDown(false)}
                value={transportType}
                setValue={setTransportType}
                list={types}
            /></View>
            <TouchableHighlight
                style={styles.apply}
                onPress={()=>{
                    changeTransportType(transportType);
                }}
                underlayColor='#fff'>
                <Text style={{textAlign:'center', color: '#efefef'}}>{t('APPLY')}</Text>
            </TouchableHighlight>
        </View>
    );
}
