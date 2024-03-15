import React, {useState} from "react";
import {Text, View} from "react-native";
import {useTranslation} from "react-i18next";
import {useSettingsViewModel} from "../viewmodels/settings.viewmodel";
import DropDown from "react-native-paper-dropdown";

export default function SettingsComponent () {
    const [showDropDown, setShowDropDown] = useState(false);

    const {t} = useTranslation();
    const {getSettings, changeLanguage} = useSettingsViewModel();
    const {data} = getSettings();
    const languageList = [
        {
            label: t('LANGUAGE_RU'),
            value: "ru-Ru",
        },
        {
            label: t('LANGUAGE_EN'),
            value: "en",
        }
    ]
    return <View>
        <DropDown
            label={t('LANGUAGE')}
            mode={"outlined"}
            visible={showDropDown}
            showDropDown={() => setShowDropDown(true)}
            onDismiss={() => setShowDropDown(false)}
            value={'ru-Ru'}
            setValue={changeLanguage}
            list={languageList}
        />


    </View>
}
