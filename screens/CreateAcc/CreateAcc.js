import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans'
import { OpenSans_400Regular, OpenSans_600SemiBold } from '@expo-google-fonts/open-sans'
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation
import { Ionicons } from '@expo/vector-icons'


const CreateAcc = () => {
  const navigation = useNavigation(); // Obter objeto de navegação
  const [email, setEmail] = useState('');
  const [text, setText] = useState('');
  const [password, setPassword] = useState('');
  const [hidePass, setHidePass] = useState(true)

  const [fonteLoaded] = useFonts({
    NunitoSans_700Bold,
    OpenSans_400Regular,
    OpenSans_600SemiBold,
  })
  if (!fonteLoaded){
    return null
  }

  const handleHaveLogin = () => {
    navigation.navigate('Login');
  };

  const handleRegistered = () => {
    navigation.navigate('TelaPrincipal');
  };

  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <TouchableOpacity style={styles.cancelButton} onPress={handleHaveLogin}>
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
      <View style={styles.input}>
        <TextInput
          style={styles.inputSenha}
          placeholder="Senha"
          value={password}
          onChangeText={setPassword}
          secureTextEntry={hidePass}
          autoCapitalize="none"
        />
        <TouchableOpacity onPress={ ()=> setHidePass(!hidePass) }>
          {
            hidePass ? 
            <Ionicons name="eye" color="#3E5A33" size={25}/>
            :
            <Ionicons name="eye-off" color="#3E5A33" size={25}/>
          }
        </TouchableOpacity>
      </View>
      <TouchableOpacity style={styles.buttonCreated} onPress={handleRegistered}>
        <Text style={styles.buttonTextCreated}>Cadastrar</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleHaveLogin}>
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
    backgroundColor: '#fafff9'
  },
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    width: '80%',
    marginBottom: 100,
    marginTop: -80
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
    flexDirection: 'row',
    alignItems: 'center',
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
    backgroundColor:'white'
  },
  inputSenha:{
    width:'87%'
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