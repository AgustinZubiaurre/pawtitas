import { Text, View, StyleSheet, TextInput } from "react-native";

const LoginScreen = () => {
  return (
    <View style={styles.container}>
        <Text style={styles.title}>Inciar Sesión</Text>
        <TextInput style={styles.input} placeholder="Mail" />
        <TextInput style={styles.input} placeholder="Constraseña" />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
      backgroundColor: '#FFF8EB',
      alignItems: 'center',
      justifyContent: 'center',
  },

  title:{
    fontSize: 30,

  },

  input: {
    width: 200,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: '#FF6C1F',
    borderRadius: 20
  }
})

export default LoginScreen;