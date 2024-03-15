import {StyleSheet} from "react-native";

export  default   StyleSheet.create({
    container: {
        flex: 1,
    },
    list:{
        width:"95%"
    },
    listItem: {
        textAlign:"left",
        backgroundColor:"#e3e3e3",
        width:"100%",
        marginBottom:5,
        paddingLeft:10,
        paddingTop:15,
        paddingBottom:17,
        paddingRight: 10
    },
    map: {
        width: '100%',
        height: '100%',
    },
    mapDetails: {
        width: '100%',
        height: 200
    },
    detailsInfoRow:{
      flexDirection:"row",
        paddingTop:20,
        paddingLeft:20
    },
    detailsLabel: {
      fontWeight:"bold",
        width: 150
    },
    picker: {
        flex: 1,
        width: 190,
        marginLeft:10,
        marginTop:10,
        marginRight:15,
        marginBottom:10,
    },
    apply: {
        width: 160,
        justifyContent: 'center', alignItems: 'center', flex: 1,
        marginTop:15,
        marginBottom:10,
        marginRight:20,
        paddingTop: 10,
        paddingBottom: 12,
        backgroundColor: '#147ed3',
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#fff',
    }
});
