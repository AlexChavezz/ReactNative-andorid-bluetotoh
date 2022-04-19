import React from 'react';
import { ScrollView } from 'react-native';
import { Item } from './ItemList';

export const DeviceList = ({ pairedDevices }) => {
    return (
        <ScrollView>
            {
                
                pairedDevices.map( device =>
                    <Item
                        {...device}
                        key={device.id}
                    />)
            }
            {/* <FlatList
                    data={pairedDevices}
                    renderItem={Item}
                    keyExtractor={item => item.id}
                /> */}
            {/* 
                <ToggleButtonBluetooth
                    title="ON"
                    onPress={() => writeSomething("F")}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
                <ToggleButtonBluetooth
                    title="OFF"
                    onPress={() => writeSomething("A")}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
                <ToggleButtonBluetooth
                    title="Read"
                    onPress={readSomething}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                />
                <ToggleButtonBluetooth
                    title="Go To Page Description"
                    onPress={()=> navigator.navigate("Page2Screen", {name:"melissa"})}
                    buttonStyle={styles.toggleButton}
                    textStyle={styles.toggleButtonText}
                /> */}
        </ScrollView>
    );
}
