import React, { useEffect, useRef } from 'react';
<<<<<<< HEAD
import { View, Text, Animated, StyleSheet, Easing } from 'react-native';

export default function LoadingScreen() {
  const fadeAnim = useRef(new Animated.Value(0)).current;
  const scaleAnim = useRef(new Animated.Value(0.8)).current;
  const pulseAnim = useRef(new Animated.Value(1)).current;
  const slideAnim = useRef(new Animated.Value(20)).current;

  useEffect(() => {
    // Main entrance animation
    Animated.parallel([
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 800,
        useNativeDriver: true,
      }),
      Animated.timing(scaleAnim, {
        toValue: 1,
        duration: 800,
        easing: Easing.elastic(1),
        useNativeDriver: true,
      }),
      Animated.timing(slideAnim, {
        toValue: 0,
        duration: 800,
        useNativeDriver: true,
      })
    ]).start();

    // Continuous pulse animation
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseAnim, {
          toValue: 1.05,
          duration: 800,
          useNativeDriver: true,
        }),
        Animated.timing(pulseAnim, {
          toValue: 1,
          duration: 800,
          useNativeDriver: true,
        })
=======
import { View, Text, StyleSheet, Animated, Easing } from 'react-native';

export default function LoadingScreen() {
  // Animation values
  const spinValue = useRef(new Animated.Value(0)).current;
  const fadeInValue = useRef(new Animated.Value(0)).current;
  const progressWidth = useRef(new Animated.Value(0)).current;
  const pulseValue = useRef(new Animated.Value(1)).current;

  useEffect(() => {
    // Spin animation for logo
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();

    // Fade in animation for container
    Animated.timing(fadeInValue, {
      toValue: 1,
      duration: 800,
      useNativeDriver: true,
    }).start();

    // Progress bar animation
    Animated.timing(progressWidth, {
      toValue: 1,
      duration: 3000,
      easing: Easing.bezier(0.4, 0, 0.2, 1),
      useNativeDriver: false,
    }).start();

    // Pulse animation for text
    Animated.loop(
      Animated.sequence([
        Animated.timing(pulseValue, {
          toValue: 1.05,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(pulseValue, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
      ])
    ).start();
  }, []);

<<<<<<< HEAD
=======
  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const progress = progressWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.animationContainer,
<<<<<<< HEAD
          { 
            opacity: fadeAnim,
            transform: [
              { scale: scaleAnim },
              { translateY: slideAnim }
            ]
          }
        ]}
      >
        <Animated.Image
          source={require('../assets/icon.png')}
          style={[
            styles.logo, 
            { 
              transform: [{ scale: pulseAnim }],
              shadowOpacity: fadeAnim
            }
          ]}
        />
        <Animated.Text 
          style={[
            styles.text,
            { 
              opacity: fadeAnim,
              transform: [{ translateY: slideAnim }]
            }
          ]}
        >
          Lab Safely
        </Animated.Text>
=======
          { opacity: fadeInValue }
        ]}
      >
        {/* Animated Logo */}
        <Animated.View 
          style={[
            styles.logoContainer,
            { 
              transform: [
                { rotate: spin },
                { scale: pulseValue }
              ] 
            }
          ]}
        >
          <View style={styles.logoInner}>
            <Text style={styles.logoText}>LS</Text>
          </View>
        </Animated.View>
        
        {/* Animated Text */}
        <Animated.View style={{ transform: [{ scale: pulseValue }] }}>
          <Text style={styles.text}>
            Lab Safely
          </Text>
        </Animated.View>
        
        {/* Progress Bar */}
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
        <View style={styles.progressContainer}>
          <Animated.View 
            style={[
              styles.progressBar,
<<<<<<< HEAD
              { 
                transform: [
                  { 
                    scaleX: fadeAnim.interpolate({
                      inputRange: [0, 1],
                      outputRange: [0, 1]
                    }) 
                  }
                ] 
              }
            ]}
          />
        </View>
        <Text style={styles.subtext}>Initializing lab safety systems...</Text>
=======
              { width: progress }
            ]} 
          />
        </View>
        
        <Text style={styles.subtext}>
          Initializing lab safety systems...
        </Text>
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
<<<<<<< HEAD
    backgroundColor: '#f8f9fa',
=======
    backgroundColor: '#f0f4f8',
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
  },
  animationContainer: {
    alignItems: 'center',
    padding: 30,
<<<<<<< HEAD
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 8,
    elevation: 5,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    shadowColor: '#007bff',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 8,
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#2c3e50',
    marginBottom: 30,
    textAlign: 'center',
  },
  subtext: {
    fontSize: 14,
    color: '#7f8c8d',
    marginTop: 20,
  },
  progressContainer: {
    height: 4,
    width: 200,
    backgroundColor: '#ecf0f1',
    borderRadius: 2,
=======
    borderRadius: 16,
    backgroundColor: '#ffffff',
    width: '80%',
    maxWidth: 350,
    shadowColor: '#2d3748',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 10,
    elevation: 5,
  },
  logoContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#3b82f6',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
    shadowColor: '#3b82f6',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 10,
    elevation: 6,
  },
  logoInner: {
    width: 90,
    height: 90,
    borderRadius: 45,
    backgroundColor: '#ffffff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  logoText: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#3b82f6',
  },
  text: {
    fontSize: 24,
    fontWeight: '700',
    color: '#1e293b',
    marginBottom: 24,
    textAlign: 'center',
    letterSpacing: 0.5,
  },
  subtext: {
    fontSize: 14,
    color: '#64748b',
    marginTop: 24,
    letterSpacing: 0.3,
  },
  progressContainer: {
    height: 6,
    width: '100%',
    backgroundColor: '#e2e8f0',
    borderRadius: 3,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
<<<<<<< HEAD
    width: '100%',
    backgroundColor: '#3498db',
    borderRadius: 2,
    transformOrigin: 'left center',
=======
    backgroundColor: '#3b82f6',
    borderRadius: 3,
>>>>>>> 609dd53 (13/8/2025 dharsan login page done in mongoDB)
  },
});