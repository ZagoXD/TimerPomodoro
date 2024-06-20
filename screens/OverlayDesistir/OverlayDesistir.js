import React, { useState } from 'react';
import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';

const OverlayDesistir = () => {
  const [fonteLoaded] = useFonts({
    NunitoSans_700Bold,
    OpenSans_400Regular,
  });

  if (!fonteLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnClose}>
        <Image source={require('../../assets/images/close.png')} style={styles.closeB} />
      </TouchableOpacity>
      <View style={styles.viewEscrita}>
        <Text style={styles.h1}>Tem certeza que vai desistir bem?</Text>
        <Text style={styles.text}>Cuidado, se desistir vai perder um abacate.</Text>
        <Text style={styles.text2}>Como assim não gosta de abacate?</Text>
        <TouchableOpacity style={styles.btnDesistir}>
          <Text style={styles.btnText}>Desistir</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.viewImagem}>
        <Image source={require('../../assets/images/imgDesistir.png')} style={styles.image} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#DEFBD9',
  },
  closeB: {
    width: 20,
    height: 20,
  },
  btnClose: {
    position: 'absolute',
    top: 70,
    right: 40,
    zIndex: 1,
  },
  viewEscrita: {
    flex: 7,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 40,
  },
  viewImagem: {
    flex: 3,
    justifyContent: 'flex-end',
  },
  image: {
    width: '100%',
    height: '100%',
  },
  h1: {
    color: '#1F371B',
    fontFamily: 'NunitoSans_700Bold',
    fontSize: 34,
    marginBottom: 40,
  },
  text: {
    color: '#1F371BE5',
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 5,
  },
  text2: {
    color: '#1F371BE5',
    fontSize: 18,
    fontFamily: 'OpenSans_400Regular',
    marginBottom: 20,
  },
  btnDesistir: {
    backgroundColor: '#FF0000',
    marginTop: 20,
    marginBottom: -50,
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 100,
  },
  btnText: {
    color: '#FAFFF9',
    fontSize: 18,
    fontFamily: 'NunitoSans_700Bold',
  },
});

export default OverlayDesistir;