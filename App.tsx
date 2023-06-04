import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from './src/screen/navigation';

const App = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};
export default App;
