import { View, StyleSheet, Image, Text, TouchableOpacity } from 'react-native';
import { useFonts, NunitoSans_700Bold } from '@expo-google-fonts/nunito-sans';
import { OpenSans_400Regular } from '@expo-google-fonts/open-sans';
import { useNavigation } from '@react-navigation/native'; // Importar useNavigation

const OverlaySobre = () => {
  const navigation = useNavigation(); // Obter objeto de navegação
  const handleCloseAbout = () => {
    navigation.navigate('TelaPrincipal');
  };
  const [fonteLoaded] = useFonts({
    NunitoSans_700Bold,
    OpenSans_400Regular,
  });

  if (!fonteLoaded) {
    return null;
  }


  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.btnClose} onPress={handleCloseAbout}>
        <Image source={require('../../assets/images/close.png')} style={styles.closeB}  />
      </TouchableOpacity>
      <View style={styles.viewEscrita}>
        <Text style={styles.h1}>Para que servem os abacates?</Text>
        <Text style={styles.text}>Além de fazer bem e deixar o cabelo bonito,</Text>
        <Text style={styles.text2}>os abacates servem como moedas, ou seja, a cada timer completo você ganha um, porém se não terminar vai perder abacate bem.</Text>
      </View>
      <View style={styles.viewImagem}>
        <Image source={require('../../assets/images/Abacates.png')} style={styles.image} />
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
    alignItems: 'flex-start',
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
  },
});

export default OverlaySobre;