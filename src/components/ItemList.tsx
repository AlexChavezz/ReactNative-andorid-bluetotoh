import React from 'react';
import { View, Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export const Item = ({ item }) => {
    const { name, address } = item;


    return (
        <TouchableOpacity
        style={{backgroundColor:'#ccc'}}
        >
            <Text
                style={{ color: 'black' }}
            >
                {
                    name
                }
            </Text>
            <Text>
                {
                    address
                }
            </Text>
        </TouchableOpacity>
    );
}