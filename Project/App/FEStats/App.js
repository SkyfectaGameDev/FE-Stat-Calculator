import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import portrait from './assets/images/portraits/shadowDragon/Marth_Portrait_FE11.webp'
import { SelectList } from 'react-native-dropdown-select-list';

// ---------- App Structure (HTML) ----------
export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEStats</Text>
      <View style={styles.characterProfile}>
        <Image style={styles.characterPortrait} source={portrait} alt="Placeholder Portrait"></Image>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

// ---------- App Styling (CSS) ----------
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171717',
  },

  title: {
    color: '#fff',
    padding: 30,
    fontSize: 24,
    textAlign: 'center',
  },

  characterProfile: {
    display: 'flex',
    padding: 20,
  },

  characterPortrait: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  characterDropdown: {

  }
});
