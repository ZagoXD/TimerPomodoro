import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans'

const CreateAcc = () => {
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');

  const [fonteLoaded] = useFonts({
    NunitoSans_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  })
  if (!fonteLoaded){
    return null
  }

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Text style={styles.cancelButtonText}>Cancelar</Text>
        </TouchableOpacity>
        <Image source={require('../../assets/images/abacaxi.png')} style={styles.image} />
      </View>
      <Text style={styles.h1}>Crie sua conta</Text>
      <TextInput
        style={styles.input}
        placeholder="Nome de Usuário"
        value={text}
        onChangeText={setText}
        keyboardType="default"
        autoCapitalize="none"
      />
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
      <TouchableOpacity style={styles.buttonCreated}>
        <Text style={styles.buttonTextCreated}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity>
        <Text style={styles.PossuiAcc}>já tenho uma conta</Text>
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
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 100,
    marginTop: -50
  },
  image: {
    width: 30,
    height: 36,
    marginLeft: '25%', 
  },
  h1: {
    fontSize: 34,
    fontWeight: 'bold',
    marginBottom: 40,
    textAlign: 'justify',
    width: '80%',
    fontFamily: 'NunitoSans_700Bold',
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
  buttonCreated: {
    width: '80%',
    backgroundColor: '#7E9F70',
    padding: 14,
    borderRadius: 37,
    marginBottom: 25,
    alignItems: 'center',
  },
  buttonTextCreated: {
    color: 'white',
    fontSize: 20,
    fontFamily: 'NunitoSans_700Bold',
  },
  PossuiAcc: {
    color: '#061500',
    fontSize: 16,
    marginTop: 20,
    textDecorationLine: 'underline',
    fontFamily: 'OpenSans_400Regular',
  },
  cancelButtonText: {
    color: '#000000',
    fontSize: 16,
    fontFamily: 'OpenSans_400Regular',
  },
});

export default CreateAcc;