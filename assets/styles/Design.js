/* eslint-disable prettier/prettier */
import { StyleSheet } from 'react-native';
import { windowheight } from './Dimentions';
const Design = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    tophalf: {
        height: windowheight / 3.8,
        paddingHorizontal:10,
        width: '100%',
        justifyContent: 'center',
    },
    bottomhalf: {
        height: windowheight / 3,
        paddingHorizontal:10,
        width: '100%',
        justifyContent: 'center',
    },
    h1: {
        fontSize: 30,
        fontFamily: 'poppinsmedium',
        color: '#000',
        alignSelf: 'center',
        marginVertical: 20,
    },
    h2: {
        fontFamily: 'poppinsmedium',
        color: '#000',
        fontSize: 17,
        marginLeft: 28,
        marginBottom: 10,
    },
    black: {
        fontFamily: 'poppinsregular',
        fontSize: 17,
        color: '#000',
    },
    or: {
        fontFamily: 'poppinsmedium',
        color: '#000',
        fontSize: 17,
        marginBottom:35,
        alignSelf: 'center',
    },
    inputv: {
        borderColor: '#ECE7E9',
        backgroundColor: '#F0F3F8',
        height: 55,
        borderRadius: 12,
        borderWidth: 1,
        width: '90%',
        alignSelf: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 25,
    },
    input: {
        borderRadius: 12,
        borderWidth: 1,
        alignItems: 'center',
        borderColor: '#ECE7E9',
        backgroundColor: '#F0F3F8',
        width: '90%',
        height: 55,
        paddingHorizontal: 25,
        fontSize: 17,
        fontFamily: 'poppinsmedium',
        alignSelf: 'center',
        lineHeight: 20,
        marginBottom: 6,
    },
    inpute: {
        alignItems: 'center',
        backgroundColor: '#F0F3F8',
        height: 55,
        fontSize: 17,
        fontFamily: 'poppinsmedium',
        lineHeight: 20,
        width: '95%',
    },
    btn: {
        width: '90%',
        backgroundColor: '#D91C10',
        alignItems: 'center',
        alignSelf: 'center',
        borderRadius: 12,
        height: 56,
        marginTop: 30,
        justifyContent: 'center',
    },
    white: {
        fontFamily: 'poppinsregular',
        color: '#fff',
        fontSize: 17,
    },
    //Seats.js Design
    container2: {
        flex: 1,
        alignItems: 'center',
        paddingTop: 45,
    },
    containernof: {
        alignItems: 'center',
        paddingTop: 45,
    },
    hotelname1: {
        fontSize: 20,
        fontFamily: 'poppinsmedium',
        color: '#000',
        marginBottom: 25,
    },
    hotelname1c: {
        fontSize: 20,
        fontFamily: 'poppinsmedium',
        color: '#000',
        marginBottom: 5,
    },
    tableview: {
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        marginBottom:20,
    },
    singletable: {
        alignItems: 'center',
    },
    tableimg: {
        height: 70,
        width: 90,
        marginHorizontal: 10,
    },
    search: {
        width: '80%',
        backgroundColor: '#EAEAEA',
        height: 50,
        borderRadius: 30,
        marginBottom: 15,
        fontFamily: 'poppinsregular',
        color: '#000',
        fontSize: 17,
        paddingHorizontal: 25,

    },
    category: {
        borderWidth: 2,
        borderColor: '#D91C10',
        borderRadius: 20,
        alignItems: 'center',
        paddingHorizontal: 20,
        marginHorizontal: 3,
    },
    listcontain: {
        flex: 1,
        width: '100%',
        backgroundColor: '#EAEAEA',
        alignContent: 'center',
        borderTopEndRadius: 30,
        borderTopStartRadius: 30,
        paddingTop: 20,
    },
    orderbtn: {
        flexDirection: 'row',
        alignSelf: 'flex-end',
        alignItems: 'center',
        justifyContent: 'space-evenly',
        width: '100%',
        height: 55,
    },
    orderbtnleft: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-evenly',
        backgroundColor: '#D91C10',
        flexDirection: 'row',
    },
    orderbtnright: {
        flex: 1,
        height: '100%',
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'center',
        backgroundColor: '#8E140C',
    },
    modalcontainer: {
        flex: 1,
        width: '100%',
        backgroundColor: 'rgba(0,0,0,0.7)',
        alignSelf: 'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    modal: {
        width: '80%',
        backgroundColor: '#fff',
        alignItems: 'center',
        height: windowheight / 3,
        borderRadius: 20,
    },
    h1m: {
        fontSize: 23,
        fontFamily: 'poppinsmedium',
        color: '#fff',
        alignSelf: 'center',
        marginVertical: 5,
    },
    modalhead: {
        width: '100%',
        backgroundColor: '#D91C10',
        borderTopLeftRadius: 20,
        borderTopRightRadius: 20,
    },
    modalbutton: {
        borderWidth: 2,
        borderColor: '#D91C10',
        borderRadius: 15,
        alignItems: 'center',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    modalbtm: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'space-evenly',
    },
});

export default Design;
