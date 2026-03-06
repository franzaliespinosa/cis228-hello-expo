import { HelloWave } from '@/components/hello-wave';
import ParallaxScrollView from '@/components/parallax-scroll-view';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import React, { useState } from 'react';
import { Alert, Button, Image, StyleSheet, TextInput } from 'react-native';


export default function HomeScreen() {
  const [name, setName] = useState('');
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/assets/images/golshi.png')}
          style={styles.golshiLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Welcome to Franz' app of nonsense!</ThemedText>
        <HelloWave />
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
          <Image
            source={require('@/assets/images/mambo.png')}
            style={styles.mambo}
          />
        <ThemedText type="subtitle" >What is your name?</ThemedText>
        <TextInput
          style={styles.input}
          placeholder="Enter your name"
          value={name}
          onChangeText={setName}
        />
        <Button
          title="Say Hello"
          onPress={() => Alert.alert("Hello there!", `Hello ${name}!`)}
        />
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
    paddingHorizontal: 10,
  },
  stepContainer: {
    gap: 12, 
    marginBottom: 12,
    padding: 12,
    backgroundColor: '#ffffff', 
    borderRadius: 8,
    shadowColor: '#000',      
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,          
  },
  golshiLogo: {
    height: '100%',
    width: '100%',
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
  mambo: {
    width: 200,
    height: 200,
    alignSelf: 'center',
    marginBottom: 10,
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    borderRadius: 8,
    backgroundColor: '#ffffff',
    alignSelf: 'center',
    marginBottom: 10,
  },
});
