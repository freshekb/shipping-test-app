import {Text, TouchableHighlight, View} from "react-native";
import {Picker} from "@react-native-picker/picker";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import {TransportType} from "../../../shared/models/TransportModel";
import styles from "./styles";
export default function FilterComponent() {
    const  [transportType, setTransportType] = useState(TransportType.NONE);
    const {t} = useTranslation();
    return (
        <View style={{flexDirection:'row'}}>
            <Picker
                style={styles.picker}
                selectedValue={transportType}
                onValueChange={(itemValue, itemIndex) =>
                    setTransportType(itemValue)
                }>
                <Picker.Item label="---" value={TransportType.NONE}  />
                <Picker.Item label={t('FREIGHT')} value={TransportType.FREIGHT} />
                <Picker.Item label={t('PASSENGER')} value={TransportType.PASSENGER} />
                <Picker.Item label={t('SPECIAL')} value={TransportType.SPECIAL} />
            </Picker>
            <TouchableHighlight
                style={styles.apply}
                onPress={()=>{}}
                underlayColor='#fff'>
                <Text style={{textAlign:'center'}}>{t('APPLY')}</Text>
            </TouchableHighlight>
        </View>
    );
}
