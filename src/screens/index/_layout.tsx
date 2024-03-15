import {Stack} from 'expo-router/stack';
import FilterComponent from "../../features/shippings/components/filter.component";
import {usePathname, useRootNavigationState, useRouter} from "expo-router";
import {useTranslation} from "react-i18next";

export default function IndexLayout() {
    const {t} = useTranslation();

    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false, title:t("LIST")}}/>
            <Stack.Screen name="details"  options={{headerShown: true, title:t("DETAILS")}}/>
        </Stack>
    );
}
