import { StyleSheet } from "react-native";
import { colors } from "../../constants/themes";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#060e1f',
        alignItems: "flex-start",
        justifyContent: "center",
    },
    text:{
        fontFamily: 'Lato-Regular',
        fontSize: 15,
        padding:20,
        marginBottom:10,
        color: colors.secondary,
    },
    title:{
        fontFamily: 'Lato-Bold',
        fontSize: 22,
        padding:20,
        color: colors.text,
    },
    image:{
        width: 30, 
        height: 20,
        marginTop: 15,
        marginEnd: -15, 
        marginLeft: 15,
    },
})