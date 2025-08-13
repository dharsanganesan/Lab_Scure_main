import React, { useEffect, useRef } from 'react';
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
      ])
    ).start();
  }, []);

  const spin = spinValue.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '360deg'],
  });

  const progress = progressWidth.interpolate({
    inputRange: [0, 1],
    outputRange: ['0%', '100%'],
  });

  return (
    <View style={styles.container}>
      <Animated.View 
        style={[
          styles.animationContainer,
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
        <View style={styles.progressContainer}>
          <Animated.View 
            style={[
              styles.progressBar,
              { width: progress }
            ]} 
          />
        </View>
        
        <Text style={styles.subtext}>
          Initializing lab safety systems...
        </Text>
      </Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f0f4f8',
  },
  animationContainer: {
    alignItems: 'center',
    padding: 30,
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
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#3b82f6',
    borderRadius: 3,
  },
});