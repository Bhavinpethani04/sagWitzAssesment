import React, {useState} from 'react';
import {Text, View, StyleSheet, TouchableOpacity, FlatList} from 'react-native';
import EmployeeForm from './component/employeeForm';

function EmployeeList() {
  //hook for store employee list
  const [employeeList, setEmployeeList] = useState([1]);

  //add and remove button UI In Class Component
  const buttonView = () => {
    return (
      <View style={styles.buttonOuterView}>
        {/* remove Button */}
        <TouchableOpacity
          onPress={() => addRemoveEmployee('remove')}
          style={[styles.buttonView, styles.removeEmployeeButton]}>
          <Text style={styles.buttonText}>REMOVE</Text>
        </TouchableOpacity>

        {/* add button */}
        <TouchableOpacity
          onPress={() => addRemoveEmployee('add')}
          style={[styles.buttonView, styles.addEmployeeButton]}>
          <Text style={styles.buttonText}>ADD</Text>
        </TouchableOpacity>
      </View>
    );
  };

  //logical operations for the add and remove employee
  const addRemoveEmployee = opr => {
    //scope for add button
    if (opr == 'add') {
      if (employeeList.length) {
        let data = [...employeeList];
        let previosData = [...employeeList];
        //get previos employee number
        let previousEmployeeNo = previosData.pop();
        let nextEmployeeNo = previousEmployeeNo + 1;
        data.push(nextEmployeeNo);
        setEmployeeList(data);
      } else {
        //if no any data available in the array
        let data = [];
        data.push(1);
        setEmployeeList(data);
      }
    } else {
      // scope for remove button
      if (employeeList.length) {
        let data = [...employeeList];
        data.pop();
        setEmployeeList(data);
      }
    }
  };
  //rander item for the flatlist
  const renderItem = ({item}) => <EmployeeForm employeeItem={item} />;

  //main return part
  return (
    <View styles={styles.container}>
      {/* In class button component*/}
      {buttonView()}
      {/* flatlist */}
      <FlatList
        style={styles.FlatListStyle}
        contentContainerStyle={styles.flatListContentContainerStyle}
        data={employeeList}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default EmployeeList;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  header: {
    width: '100%',
    height: 60,
    backgroundColor: '#BDBDBD',
  },
  buttonOuterView: {
    width: '90%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingTop: 10,
    alignSelf: 'center',
    marginTop: 30,
  },

  buttonView: {
    height: 50,
    width: '47%',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  removeEmployeeButton: {
    backgroundColor: '#B71C1C',
  },

  addEmployeeButton: {
    backgroundColor: '#004D40',
  },

  buttonText: {
    fontWeight: 'bold',
    color: '#ffffff',
  },

  FlatListStyle: {
    height: '82%',
    marginTop: 15,
  },

  flatListContentContainerStyle: {
    paddingBottom: 30,
  },
});
