import React from 'react';
import { View, Text, StyleSheet } from 'react-native';


const App = () => {
  return (
    <View
      style={styles.container}
    >
    <Text style={{color:"white"}}>
      android
    </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#181818',
  }
})


export default App;