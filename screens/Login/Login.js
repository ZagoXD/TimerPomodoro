import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

const Login = () => {
  const navigation = useNavigation(); // Obter objeto de navegação
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [fonteLoaded] = useFonts({
    NunitoSans_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  });
  
  if (!fonteLoaded){
    return null
  }

  const handleLogin = () => {
    navigation.navigate('TelaPrincipal');
  };

  const handleRegister = () => {
    navigation.navigate('CreateAcc');
  };

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/abacaxi.png')} style={styles.image} />
      <Text style={styles.h1}>Faça seu login para começar</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
        autoCapitalize="none"
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        autoCapitalize="none"
      />
      <TouchableOpacity style={styles.buttonLogin} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.buttonCreate} onPress={handleRegister}>
        <Text style={styles.buttonTextCreate}>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Esqueci minha senha</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },
  image: {
    width: 30,
    height: 36,
    marginBottom: 100,
    marginTop: -50
  },
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'justify',
    width: '80%',
    fontFamily:'NunitoSans_700Bold'
  },
  input: {
    width: '80%',
    height: 56,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 10,
    marginBottom: 25,
    paddingHorizontal: 8,
    fontFamily: 'OpenSans_600SemiBold',
    borderColor: '#7E9F70',
    color:'#06150080',
  },
  buttonLogin: {
    width: '80%',
    backgroundColor: '#7E9F70',
    padding: 14,
    borderRadius: 37,
    marginBottom: 25,
    alignItems: 'center',
  },
  buttonCreate: {
    width: '80%',
    backgroundColor: 'white',
    padding: 14,
    borderWidth: 1,
    borderColor: '#7E9F70',
    borderRadius: 37,
    marginBottom: 25,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
    fontFamily:'NunitoSans_700Bold',
  },
  buttonTextCreate: {
    color: '#7E9F70',
    fontSize: 20,
    fontFamily:'NunitoSans_700Bold',
  },
  forgotPassword: {
    color: '#061500',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
    fontFamily:'OpenSans_400Regular',
  },
});

export default Login;