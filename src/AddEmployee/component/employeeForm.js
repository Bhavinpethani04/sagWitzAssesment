import React, {useState} from 'react';
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  TextInput,
} from 'react-native';

function EmployeeForm(props) {
  // all hooks
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [secureEntry, setSecureEntry] = useState(true);

  const [nameIsValid, setNameIsValid] = useState(false);
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [passwordIsValid, setPasswordIsValid] = useState(false);

  //   on press add employee button function
  const onPressAddEmployee = () => {
    //regex for email verify
    const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;

    let emailVerify = reg.test(email);

    // check length validation for name and password
    if (!name.length) {
      setNameIsValid(false);
    } else {
      setNameIsValid(true);
    }

    // email verification
    if (emailVerify == false) {
      setEmailIsValid(false);
    } else {
      setEmailIsValid(true);
    }

    //password verification
    if (!password.length) {
      setPasswordIsValid(false);
    } else {
      setPasswordIsValid(true);
    }
  };

  //hide show password
  const showPassword = () => {
    setSecureEntry(!secureEntry);
  };

  return (
    <View style={styles.formViewContainer}>
      {/* Display Employee number with use of props */}
      <Text style={styles.textInputLabel}>Employee {props.employeeItem}</Text>
      {/* textInput for the name */}
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Enter Name'}
        onChangeText={text => {
          setName(text);
        }}></TextInput>

      {/* error or success message */}
      <Text style={[nameIsValid ? styles.successMessage : styles.errorMessage]}>
        {nameIsValid ? 'Valid Name' : 'Invalid Name'}
      </Text>

      {/* email textInput */}
      <TextInput
        style={styles.textInputStyle}
        placeholder={'Enter Email'}
        onChangeText={text => {
          setEmail(text);
        }}></TextInput>

      {/* error or success message */}
      <Text
        style={[emailIsValid ? styles.successMessage : styles.errorMessage]}>
        {emailIsValid ? 'Valid Email' : 'Invalid Email'}
      </Text>

      {/* password textinput */}
      <View style={styles.passwordView}>
        <TextInput
          style={styles.passWordTextInput}
          placeholder={'Enter Password'}
          secureTextEntry={secureEntry}
          onChangeText={text => {
            setPassword(text);
          }}></TextInput>

        <TouchableOpacity onPress={() => showPassword()}>
          <Text style={styles.showButton}>SHOW</Text>
        </TouchableOpacity>
      </View>

      {/* error or success message */}
      <Text
        style={[passwordIsValid ? styles.successMessage : styles.errorMessage]}>
        {passwordIsValid ? 'Valid Password' : 'Invalid Password'}
      </Text>

      {/* Add Employee Buttton  */}
      <TouchableOpacity
        onPress={() => onPressAddEmployee()}
        style={styles.button}>
        <Text style={styles.buttonText}>Add Employee</Text>
      </TouchableOpacity>
    </View>
  );
}

export default EmployeeForm;

const styles = StyleSheet.create({
  formViewContainer: {
    width: '90%',
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    padding: 10,
    marginTop: 15,
    borderRadius: 5,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,

    elevation: 8,
  },
  textInputLabel: {
    marginTop: 10,
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 14,
  },

  textInputStyle: {
    width: '100%',
    height: 45,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    paddingLeft: 10,
  },

  errorMessage: {
    marginTop: 10,
    color: 'red',
    fontSize: 13,
  },

  successMessage: {
    marginTop: 10,
    color: 'green',
    fontSize: 13,
  },

  button: {
    width: '100%',
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    backgroundColor: '#000000',
    marginTop: 10,
  },

  buttonText: {
    color: '#ffffff',
    fontWeight: 'bold',
  },

  passwordView: {
    width: '100%',
    height: 45,
    borderColor: '#BDBDBD',
    borderWidth: 1,
    borderRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  passWordTextInput: {
    width: '80%',
    height: 45,
    paddingLeft: 10,
  },

  showButton: {
    fontWeight: 'bold',
    marginRight: 10,
    color: '#000000',
    fontSize: 12,
  },
});
