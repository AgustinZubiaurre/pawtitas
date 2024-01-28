import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HomeScreen from './home';


const LoginScreen = () => {

//  const navigation = useNavigation(); esto no funca
  const handleLogin = () => {

    // aca deberia navegar al login pero no funca
    console.log('Login button pressed')
  }
    
  const handleSignUp = () => {
    // acá deberia navegar al signup
    console.log('Sign Up button pressed');
  };

  return (
    <View style={styles.container}>
      
        
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleSignUp}>
          <Text style={styles.buttonText}>SIGN UP</Text>
        </TouchableOpacity>
      </View>
    
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#103F2B', 
    alignItems: 'center',
  },
  loginContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  input: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 15,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
  button: {
    backgroundColor: "#FC8D08",
    padding: 10,
    borderRadius: 20,
    alignItems: 'center',
    marginBottom: 10,
    paddingHorizontal : 50,
    width: 200,
    height : 50
  
  },
  buttonText: {
    color: 'black',
    fontWeight: 'normal',
    fontSize: 24,

  },
});

export default LoginScreen;
