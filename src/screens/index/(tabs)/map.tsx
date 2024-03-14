import MapView from "react-native-maps";

import { StyleSheet, View } from 'react-native';
import MapComponent from "../../../features/shippings/components/map.component";
export default function Map() {
    return (
        <View style={styles.container}>
            <MapComponent/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
