import React from 'react';
import { ScrollView } from 'react-native';
import { Item } from './ItemList';

export const DeviceList = ({ pairedDevices, isBluetoothEnable }) => {
    return (
        <ScrollView>
            {
                isBluetoothEnable &&
                pairedDevices.map( device =>
                    <Item
                        {...device}
                        key={device.id}
                    />)
            }
        </ScrollView>
    );
}
