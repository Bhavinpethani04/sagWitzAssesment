import React, {useState} from 'react';
import {Text, View} from 'react-native';
import EmployeeList from './src/AddEmployee/index';
function App() {
  return (
    <View>
      {/* main route component */}
      <EmployeeList />
    </View>
  );
}

export default App;
