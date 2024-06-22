import React, { useEffect } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Comeco = () => {
  const navigation = useNavigation();

  useEffect(() => {
    const timer = setTimeout(() => {
      navigation.navigate('Login');
    }, 1000); // 1000 milissegundos = 1 segundo

    return () => clearTimeout(timer); // Limpa o timer se o componente for desmontado antes do tempo
  }, [navigation]);

  return (
    <View style={styles.container}>
      <Image source={require('../../assets/images/AbacateGrande.png')} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafff9',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Comeco;