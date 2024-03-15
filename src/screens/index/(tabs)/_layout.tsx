import {FontAwesome} from "@expo/vector-icons";
import {Tabs} from "expo-router";
import {useTranslation} from "react-i18next";
import FilterComponent from "../../../features/shippings/components/filter.component";
import {
    ShippingViewModelContext,
    useShippingViewModel
} from "../../../features/shippings/viewmodels/shipping.viewmodel";

export default function TabLayout() {
    const {t} = useTranslation();
    const model = useShippingViewModel();
    return (<ShippingViewModelContext.Provider value={model}>
        <FilterComponent/>
        <Tabs screenOptions={{ tabBarActiveTintColor: 'blue' }}>
            <Tabs.Screen
                name="index"
                options={{
                    headerShown:false,
                    title: t('LIST'),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="list" color={color} />,
                }}
            />
            <Tabs.Screen
                name="map"
                options={{
                    headerShown:false,
                    title: t('MAP'),
                    tabBarIcon: ({ color }) => <FontAwesome size={28} name="map" color={color} />,
                }}
            />
        </Tabs>
        </ShippingViewModelContext.Provider>
    );
}
