import { View, Text } from 'react-native';
import SettingsComponent from "../../features/settings/components/settings.component";

export default function Settings() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
           <SettingsComponent/>
        </View>
    );
}
