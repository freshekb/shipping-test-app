import { View, Text } from 'react-native';
import ListComponent from "../../../features/shippings/components/list.component";

export default function Tab() {
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1 }}>
            <ListComponent/>
        </View>
    );
}
