// you got this don't cry
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
    
  const navigation = useNavigation();

    const handleLogin = () => {


      navigation.navigate('Login');
    }
      
    const handleSignUp = () => {

      navigation.navigate('SignUp');
    };

    return (
      <View style={styles.container}>
        {/* hay un problema aca */}
        {/* <Image source={require('../assets/PawTitas-logo.png')} style={styles.img} />  */}
        <Text style={styles.title}>Pawtitas</Text>
        <Pressable style={styles.button} onPress={handleLogin}>
    
            <Text style={styles.textButton}>Inciar Sesión</Text>
        </Pressable>
  
          <Pressable style={styles.button} onPress={handleSignUp}>
    
            <Text style={styles.textButton}>Registrarse</Text>
         </Pressable>

    </View>
    );
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FFF8EB',
      alignItems: 'center',
      justifyContent: 'center',
    },
    title: {
      fontSize: 45,
      margin: 20,
  
    },
    button: {
      backgroundColor:'#FF6C1F',
      borderRadius: 20,
      width: 200,
      padding: 20,
      margin: 10, 
      fontWeight: 700
    },
    textButton: {
      color: '#FFF8EB',
      textAlign: 'center',
      fontSize: 18, 
    }, 
    img:{
      width: 150, 
      height: 150,
    }
  });
  
export default RegisterScreen;