/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {
    Text,
    View,
    TextInput,
    TouchableOpacity,
    ScrollView,
    Image,
    Modal,
} from 'react-native';
import { useRoute } from '@react-navigation/native';
import React, { useState } from 'react';
import Design from '../styles/Design';
import { listdata } from '../other/Data';
import Listitems from '../other/Listitems';
import { windowheight } from '../styles/Dimentions';
const Bookfood = ({ navigation }) => {
    const route = useRoute();
    const [open, setOpen] = useState(false);
    return (
        <View style={Design.container2}>
            <Text style={Design.hotelname1c}>Jumeirah Beach Hotel</Text>
            <Text style={Design.black}>Table {route.params.seatno}</Text>
            <View
                style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'center',
                    marginTop: 10,
                    marginBottom: 15,
                    marginHorizontal:15,
                }}>
                    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>All</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Beverages</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Snacks</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Juice</Text>
                </TouchableOpacity>
                <TouchableOpacity style={Design.category}>
                    <Text style={Design.black}>Arabian</Text>
                </TouchableOpacity>
                    </ScrollView>
            </View>
            <TextInput style={Design.search} placeholder="Search Here" />
            <View style={Design.listcontain}>
                <ScrollView>
                    <View>
                        {listdata.map(item => (
                            <Listitems
                                key={item.id}
                                image={item.image}
                                title={item.title}
                                price={item.price}
                            />
                        ))}
                    </View>
                </ScrollView>
                <View style={Design.orderbtn}>
                    <TouchableOpacity style={Design.orderbtnleft} onPress={() => setOpen(true)}>
                        <Text style={Design.white}>Add To Cart</Text>
                        <Image style={{ height: 28, width: 28 }} source={require('../images/cart.png')} />
                    </TouchableOpacity>
                    <Modal transparent visible={open} animationType="fade">
                        <View style={Design.modalcontainer}>
                            <View style={{
                            width: '80%',
                            backgroundColor: '#fff',
                            alignItems: 'center',
                            height: windowheight / 4,
                            borderRadius: 20}}>
                                <View style={Design.modalhead}>
                                    <Text style={Design.h1m}>Alert</Text>
                                </View>
                                <View style={Design.modalbtm}>
                                    <Text style={Design.black}>Your Order is about to be placed</Text>
                                    <TouchableOpacity style={Design.modalbutton} onPress={() => setOpen(false)}>
                                        <Text style={Design.black}>Close</Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </Modal>
                    <TouchableOpacity style={Design.orderbtnright} onPress={() => navigation.navigate('Customer')}>
                        <Text style={Design.white}>View Details</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};

export default Bookfood;
