import {Stack} from 'expo-router/stack';
import FilterComponent from "../../features/shippings/components/filter.component";

export default function IndexLayout() {
    return (
        <Stack>
            <Stack.Screen name="(tabs)" options={{headerShown: false}}/>
        </Stack>
    );
}
