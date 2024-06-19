import React, { useState, useRef, useEffect } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Image, TouchableOpacity, Animated, Easing, Text } from 'react-native';
import { useFonts, OpenSans_400Regular, OpenSans_300Light } from '@expo-google-fonts/open-sans';
import Icon from 'react-native-vector-icons/AntDesign';
import Slider from '@react-native-community/slider';

const App = () => {
  const [overlayVisible, setOverlayVisible] = useState(false);
  const [centralImage, setCentralImage] = useState(require('./assets/images/Vovo_juju.png'));
  const [timer, setTimer] = useState(0); // Timer começa em 00:00
  const [isRunning, setIsRunning] = useState(false);
  const [count, setCount] = useState(5); // Estado para o número
  const translateY = useRef(new Animated.Value(300)).current; // Inicialmente fora da tela

  const [fonteLoaded] = useFonts({
    OpenSans_400Regular,
    OpenSans_300Light,
  });

  useEffect(() => {
    if (!fonteLoaded) {
      return;
    }
  }, [fonteLoaded]);

  useEffect(() => {
    let interval;
    if (isRunning && timer > 0) {
      interval = setInterval(() => {
        setTimer((prevTimer) => prevTimer - 1);
      }, 1000);
    } else if (timer === 0 && isRunning) {
      setIsRunning(false);
      setCount((prevCount) => prevCount + 1); // Incrementa o número quando o timer chega a 0
    }
    return () => clearInterval(interval);
  }, [isRunning, timer]);

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

  const toggleTimer = () => {
    setIsRunning((prevRunning) => !prevRunning);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const handleSliderChange = (value) => {
    setTimer(value * 5 * 60); // Cada valor do slider representa 5 minutos
    setIsRunning(false); // Parar o timer se estiver rodando
  };

  if (!fonteLoaded) {
    return null;
  }

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.abacaxiButton}>
        <Image source={require('./assets/images/abacaxi.png')} style={styles.imageAbacate}/>
        <Text style={styles.text}>{count}</Text>
      </TouchableOpacity>
      <View style={styles.centralContainer}>
        <TouchableOpacity onPress={toggleOverlay}>
          <Image source={centralImage} style={styles.image} />
        </TouchableOpacity>
        <Text style={styles.timerText}>{formatTime(timer)}</Text>
        <TouchableOpacity onPress={toggleTimer}>
          <Icon name={isRunning ? "caretleft" : "caretright"} size={25} color='#000' style={styles.icon} />
        </TouchableOpacity>
        {!isRunning && (
          <Slider
            style={styles.slider}
            minimumValue={1}
            maximumValue={12}
            step={1}
            onValueChange={handleSliderChange}
            minimumTrackTintColor="#1B3810"
            maximumTrackTintColor="#000000"
            thumbImage={require('./assets/images/abacaxi.png')}
          />
        )}
      </View>
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
  imageAbacate: {
    marginLeft: -10,
    marginBottom: 8,
  },
  text: {
    fontFamily: 'OpenSans_400Regular',
    fontSize: 20,
  },
  centralContainer: {
    alignItems: 'center',
  },
  image: {
    marginTop: 80
  },
  timerText: {
    marginTop: 20,
    fontSize: 58,
    fontFamily: 'OpenSans_300Light',
    textAlign: 'center',
    color: '#1B3810'
  },
  icon: {
    marginTop: 10, // Ajuste a margem conforme necessário
  },
  slider: {
    width: 200,
    height: 40,
    marginTop: 20,
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
    height: 12,
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

export default App;