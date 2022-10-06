import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({

    title: {
        fontFamily: 'Lato-Bold',
        fontSize: 20,
        color: colors.background,
        backgroundColor: '#c8aa6b',
        width: '100%',
        textAlign: 'center', 
    },
    categories:{
        margin:3,
        color:'black',
        backgroundColor:'#042e48',
        borderRadius: 5,
        alignItems: 'center',
    },
    image:{
        width: 125,
        height: 125,
        marginTop:15,
        borderRadius:50,
        alignItems: 'center',
    }
});