import React from 'react';
import { Text } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface ToggleButtonBluetoothProps {
    title: string,
    buttonStyle: string,
    textStyle: string,
    onPress: () => void,
}

export const ToggleButtonBluetooth = ({ title, buttonStyle, textStyle, onPress }: ToggleButtonBluetoothProps) => {
    return (
        <TouchableOpacity
        activeOpacity={.5}
            style={buttonStyle}
            onPress={onPress}
        >
            <Text
                style={textStyle}
            >
                {title}
            </Text>
        </TouchableOpacity>
    );
}
