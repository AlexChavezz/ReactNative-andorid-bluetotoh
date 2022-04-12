import { useState } from 'react';
import BluetoothSerial from 'react-native-bluetooth-serial-next';

export const useDevices = () => {
    const [pairedDevices, setPairedDevices] = useState([]);
    
    async function getDevices(){
        const pairedDevices = await BluetoothSerial.list(); 
        setPairedDevices(pairedDevices);
    }
    function clearPairedDevices(){
        setPairedDevices([]);
    }
    return [ pairedDevices, getDevices, clearPairedDevices ];
}
