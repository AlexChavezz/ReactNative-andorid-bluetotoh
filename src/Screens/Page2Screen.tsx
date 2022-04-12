import React from 'react';
import { View, Text } from 'react-native';

export const Page2Screen = ({route}) => {
    const { name } = route.params;
return (
    <View>
        <Text>
            {name}
        </Text>
    </View>
    );
}
