import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/Navigations/StackNavigation';
import { Text, View, StyleSheet } from 'react-native';
import { StatusContext } from './src/context/StatusContext';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  const [deviceConnected, setDeviceConnected] = useState(null);

  return (
    <NavigationContainer>
      <StatusContext.Provider
        value={{
          isConnected,
          setIsConnected,
          deviceConnected,
          setDeviceConnected
        }}>
        <View
          style={isConnected ? [styles.alertIsConnected, styles.alertConnected] : [styles.alertIsConnected, styles.alertDiscconected]}
        >
          <Text>
            {isConnected ? `Conectado a: ${deviceConnected}` : "Desconectado"}
          </Text>
        </View>
        <StackNavigation />
      </StatusContext.Provider>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  alertIsConnected: {
    height: 40,
    alignItems: 'center',
    justifyContent: 'center',
    position: "absolute",
    bottom: 0
  },
  alertConnected: {
    backgroundColor: "#d1e7dd",
    border: "1px solid #badbcc",
  },
  alertDiscconected: {
    backgroundColor: "#f8d7da",
    border: "1px solid #f5c2c7",
  },
  textConnected: {
    color: "#0f5132",
  },
  textDisconnected: {
    color: '#842029',
  }

})
export default App;