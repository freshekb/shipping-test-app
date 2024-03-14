import React, {useEffect, useState} from "react";
import {Text, View} from "react-native";
import {useTranslation} from "react-i18next";
import {Picker} from "@react-native-picker/picker";
import {useSettingsViewModel} from "../viewmodels/settings.viewmodel";
import styles from "./styles";
export default function SettingsComponent () {

    const {t} = useTranslation();
    const {getSettings, changeLanguage} = useSettingsViewModel();
    const {data} = getSettings();

    return <View>
        <Text>{t('LANGUAGE')}</Text>
        <Picker
            style={styles.picker}
            selectedValue={data?.language || 'ru-Ru'}
            onValueChange={(itemValue, itemIndex) =>
                changeLanguage(itemValue)
            }>
            <Picker.Item label="---"  />
            <Picker.Item label={t('LANGUAGE_RU')} value="ru-RU" />
            <Picker.Item label={t('LANGUAGE_EN')} value="en" />
        </Picker>

    </View>
}
