import {FlatList, Text} from "react-native";
import {ShippingViewModelContext} from "../viewmodels/shipping.viewmodel";
import {useTranslation} from "react-i18next";
import styles from "./styles";
import {TransportType} from "../../../shared/models/TransportModel";
import {useContext} from "react";
import {Link} from "expo-router";


export default function ListComponent() {
    const {t} = useTranslation();
    const {getShipping} =  useContext(ShippingViewModelContext);
    const {data} = getShipping();

    return (
        <FlatList
            style={styles.list}
            data={data || []}
            keyExtractor={(item)=>`${item.id}`}
            renderItem={
                ({item}) => (<Link href={{
                    pathname:"/details",
                    params: {id:item.id}
                } as never} style={styles.listItem} key={item.id}>
                    <Text>{`#${item.transport.id}: ${item.driver.name} (${t(`${TransportType[item.transport.type]}`)})`}</Text>
                </Link>)
        }/>
    );
}
