import 'react-native-gesture-handler';

import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigation } from './src/Navigations/StackNavigation';
import { ConectedContext } from './src/context/ConectedContext';

const App = () => {
  const [isConnected, setIsConnected] = useState(false);
  return (
    <NavigationContainer>
      <ConectedContext.Provider value={{
        isConnected, 
        setIsConnected
      }}>
      <StackNavigation />
      </ConectedContext.Provider>
    </NavigationContainer>
    );
}

export default App;