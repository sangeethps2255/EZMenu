/* eslint-disable prettier/prettier */
/* eslint-disable react-native/no-inline-styles */
import {Text, View, Image, FlatList, TouchableOpacity} from 'react-native';
import React from 'react';
import {seatdata} from '../other/Data';
import Design from '../styles/Design';
import {windowheight} from '../styles/Dimentions';
const Waiter1 = ({navigation}) => {
  return (
    <View style={{backgroundColor:'#fff',flex:1,alignItems:'center',paddingTop:15}}>
      <Text style={Design.hotelname1}>Waiter Name</Text>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          width: '80%',
          marginBottom: 5,
        }}>
      <View style={{marginTop: 15, height: windowheight / 1.3}}>
        <FlatList
          scrollEnabled={true}
          showsVerticalScrollIndicator={false}
          horizontal={false}
          numColumns={3}
          keyExtractor={item => item.id}
          data={seatdata}
          renderItem={({item}) => (
            <TouchableOpacity onPress={() => navigation.navigate('Bookfood')}>
              <View style={Design.tableview}>
                <View style={Design.singletable}>
                  <Image style={Design.tableimg} source={item.seat} />
                  <Text>{item.id}</Text>
                </View>
              </View>
            </TouchableOpacity>
          )}
        />
        </View>
  </View>
  </View>
  );
};

export default Waiter1;
