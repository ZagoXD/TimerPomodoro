import React, { useState, useRef } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Animated, Easing, Text } from 'react-native';
import { useFonts, OpenSans_400Regular } from '@expo-google-fonts/open-sans'

const TelaPrincipal = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [centralImage, setCentralImage] = useState(require('./assets/images/Vovo_juju.png'));
  const translateY = useRef(new Animated.Value(300)).current; // Inicialmente fora da tela
 
   const [fonteLoaded] = useFonts({
     OpenSans_400Regular,
   })
   if (!fonteLoaded){
     return null
   }
 
   const toggleOverlay = () => {
     if (overlayVisible) {
       // Animar para fora da tela
       Animated.timing(translateY, {
         toValue: 300,
         duration: 300,
         easing: Easing.ease,
         useNativeDriver: true,
       }).start(() => setOverlayVisible(false));
     } else {
       setOverlayVisible(true);
       // Animar para dentro da tela
       Animated.timing(translateY, {
         toValue: 0,
         duration: 300,
         easing: Easing.ease,
         useNativeDriver: true,
       }).start();
     }
   };
 
   const changeCentralImage = (image) => {
     setCentralImage(image);
   };


  return (
    <View style={styles.container}>
    <TouchableOpacity style={styles.abacaxiButton}>
      <Image source={require('./assets/images/abacaxi.png')} style={styles.imageAbacate}/>
      <Text style={styles.text}>5</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={toggleOverlay}>
      <Image source={centralImage} style={styles.image} />
    </TouchableOpacity>
    <StatusBar style="auto" />

    {overlayVisible && (
      <Animated.View style={[styles.overlay, { transform: [{ translateY }] }]}>
        <TouchableOpacity style={styles.closeButton} onPress={toggleOverlay}>
        </TouchableOpacity>
        <View style={styles.imagesContainer}>
          <TouchableOpacity onPress={() => changeCentralImage(require('./assets/images/Vovo_juju.png'))}>
            <Image source={require('./assets/images/Card_Vovo juju_1.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCentralImage(require('./assets/images/MC_juju.png'))}>
            <Image source={require('./assets/images/Card_Vovo juju_2.png')}/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => changeCentralImage(require('./assets/images/Pato_Juju.png'))}>
            <Image source={require('./assets/images/Card_Vovo Juju_3.png')}/>
          </TouchableOpacity>
        </View>
      </Animated.View>
    )}
  </View>
);
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: '#FAFFF9',
  alignItems: 'center',
  justifyContent: 'center',
},
abacaxiButton: {
  position: 'absolute',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  top: 70,
  left: 30,
  width: 110,
  height: 32,
  backgroundColor: '#CDDECA',
  borderRadius: 100,
  flexDirection: 'row',

},
imageAbacate:{
  marginLeft: -10,
  marginBottom: 8,
},
text:{
  fontFamily: 'OpenSans_400Regular',
  fontSize: 20
},
image: {
  
},
overlay: {
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
  backgroundColor: '#F4E3E1',
  padding: 10,
  alignItems: 'center',
  justifyContent: 'center',
  borderTopLeftRadius: 50,
  borderTopRightRadius: 50,
  height: '33%',
},
closeButton: {
  backgroundColor: '#B4908C',
  borderRadius: 15,
  marginBottom: 10,
  position: 'absolute',
  top: 20,
  width: '38%',
  height: 12
},
closeButtonText: {
  fontSize: 18,
  fontWeight: 'bold',
  color: '#000',
},
imagesContainer: {
  flexDirection: 'row',
  width: '100%',
  justifyContent: 'space-evenly',
},
cardImage: {
  width: 80,
  height: 80,
},
});

export default TelaPrincipal;