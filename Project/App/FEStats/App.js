import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image} from 'react-native';
import portrait from './assets/images/portraits/shadowDragon/Marth_Portrait_FE11.webp'
import { SelectList } from 'react-native-dropdown-select-list';


export default function App() {
  
  //#region ---------- Dropdown Menus ----------
  
  // - Selected State -
  const [selected, setSelected] = React.useState("");

  // - Menus & Data -
  const data1 = [
    {key:'1', value:'Box 1, Option 1'},
    {key:'1', value:'Box 1, Option 2'},
    {key:'1', value:'Box 1, Option 3'},
    {key:'1', value:'Box 1, Option 4'},
    {key:'1', value:'Box 1, Option 5'},
  ]
  const data2 = [
    {key:'1', value:'Box 2, Option 1'},
    {key:'1', value:'Box 2, Option 2'},
    {key:'1', value:'Box 2, Option 3'},
    {key:'1', value:'Box 2, Option 4'},
    {key:'1', value:'Box 2, Option 5'},
  ]
  const data3 = [
    {key:'1', value:'Box 3, Option 1'},
    {key:'1', value:'Box 3, Option 2'},
    {key:'1', value:'Box 3, Option 3'},
    {key:'1', value:'Box 3, Option 4'},
    {key:'1', value:'Box 3, Option 5'},
  ]
  //#endregion

  //#region ---------- App Structure (HTML) ----------
  return (
    <View style={styles.container}>
      <Text style={styles.title}>FEStats Alpha 0.23.0403c</Text>
      <View style={styles.characterProfile}>
        <View>
          <Image style={styles.characterPortrait} source={portrait} alt="Placeholder Portrait"></Image>
          <Text style={styles.characterName}>Marth</Text>
        </View>
        <View style={styles.characterDropdown}>
          {/* ----- Dropdown Menu 1 ----- */}
          <SelectList
            data={data1}
            setSelected={setSelected}
            boxStyles={{backgroundColor: '#fff', width: 210, height: 40}}
            inputStyles={{fontSize: 10}}
            dropdownStyles={{backgroundColor: '#fff'}}
            dropdownTextStyles={{fontSize: 10}}
            >
          </SelectList>
          {/* ----- Dropdown Menu 2 ----- */}
          <SelectList
            data={data2}
            setSelected={setSelected}
            boxStyles={{backgroundColor: '#fff', width: 210, height: 40}}
            inputStyles={{fontSize: 10}}
            dropdownStyles={{backgroundColor: '#fff'}}
            dropdownTextStyles={{fontSize: 10}}
            >
          </SelectList>
          {/* ----- Dropdown Menu 3 ----- */}
          <SelectList
            data={data3}
            setSelected={setSelected}
            boxStyles={{backgroundColor: '#fff', width: 210, height: 40}}
            inputStyles={{fontSize: 10}}
            dropdownStyles={{backgroundColor: '#fff'}}
            dropdownTextStyles={{fontSize: 10}}
            >
          </SelectList>
        </View>
      </View>
      <StatusBar style="auto" />
    </View>
  );
  //#endregion
}

//#region ---------- App Styling (CSS) ----------
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
    flexDirection: 'row',
    padding: 20,
    gap: 10
  },

  characterPortraitContainer: {
    display: 'flex',
    flexDirection: 'column',
  },

  characterPortrait: {
    height: 100,
    width: 100,
    borderWidth: 2,
    borderColor: '#fff',
    borderRadius: 10,
    backgroundColor: '#fff',
  },

  characterName: {
    color: '#fff',
    textAlign: 'center'
  },

  characterDropdown: {
    display: 'flex',
    flexDirection: 'column',
  }
});
//#endregion


/*#region ---------- Credits ----------

Programming:            Skyfecta
Logic & Math:           AuroraHertz
Dropdown Select List:   https://github.com/danish1658/react-native-dropdown-select-list

#endregion */