import React from 'react';
import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, SafeAreaView, ScrollView} from 'react-native';
import { SelectList } from 'react-native-dropdown-select-list';
import { Table, TableWrapper, Row, Rows, Col, Cols, Cell } from 'react-native-table-component';
import Checkbox from 'expo-checkbox';

import portrait from './assets/images/portraits/shadowDragon/shiida.png'


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

  //#region ---------- Table Contents ----------

  // - Headers -
  const headers = ['Lvl', 'HP', 'Str', 'Mag', 'Skl', 'Spd', 'Lck', 'Def', 'Res']

  // - Rows -
  const rows = [
    ['1', '', '', '', '', '', '', '', ''],
    ['2', '', '', '', '', '', '', '', ''],
    ['3', '', '', '', '', '', '', '', ''],
    ['4', '', '', '', '', '', '', '', ''],
    ['5', '', '', '', '', '', '', '', ''],
    ['6', '', '', '', '', '', '', '', ''],
    ['7', '', '', '', '', '', '', '', ''],
    ['8', '', '', '', '', '', '', '', ''],
    ['9', '', '', '', '', '', '', '', ''],
    ['10', '', '', '', '', '', '', '', ''],
    ['11', '', '', '', '', '', '', '', ''],
    ['12', '', '', '', '', '', '', '', ''],
    ['13', '', '', '', '', '', '', '', ''],
    ['14', '', '', '', '', '', '', '', ''],
    ['15', '', '', '', '', '', '', '', ''],
    ['16', '', '', '', '', '', '', '', ''],
    ['17', '', '', '', '', '', '', '', ''],
    ['18', '', '', '', '', '', '', '', ''],
    ['19', '', '', '', '', '', '', '', ''],
    ['20', '', '', '', '', '', '', '', '']
  ]

  //#region ---------- App Structure (HTML) ----------
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView style={styles.container}>
        <Text style={styles.title}>FEStats Alpha 0.23.0403e</Text>
        <View style={styles.characterProfile}>
          <View>
            <Image style={styles.characterPortrait} source={portrait} alt="Placeholder Portrait"></Image>
            <Text style={styles.characterName}>Shiida</Text>
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
              placeholder={'Select Character'}
              searchPlaceholder=''
            />
            {/* ----- Dropdown Menu 2 ----- */}
            <SelectList
              data={data2}
              setSelected={setSelected}
              boxStyles={{backgroundColor: '#fff', width: 210, height: 40}}
              inputStyles={{fontSize: 10}}
              dropdownStyles={{backgroundColor: '#fff'}}
              dropdownTextStyles={{fontSize: 10}}
              placeholder={'Pre-Promoted Class'}
              searchPlaceholder=''
              />
            {/* ----- Dropdown Menu 3 ----- */}
            <SelectList
              data={data3}
              setSelected={setSelected}
              boxStyles={{backgroundColor: '#fff', width: 210, height: 40}}
              inputStyles={{fontSize: 10}}
              dropdownStyles={{backgroundColor: '#fff'}}
              dropdownTextStyles={{fontSize: 10}}
              placeholder={'Promoted Class'}
              searchPlaceholder=''
            />
            {/* ----- Checkbox ----- */}
            <View style={styles.checkGroup}>
              <Text style={styles.checkText}>Dynamic Growth</Text>
              <Checkbox
                
              />
            </View>
          </View>
        </View>
        {/* ----- Stats Table ----- */}
        <Table style={styles.statsTable} borderStyle={{borderWidth: 1}}>
          <Row 
            data={headers}
            style={{margins: 20, width: 320, height: 30, backgroundColor: '#e6e6e6'}}
            textStyle={{textAlign: 'center', fontWeight: 'bold'}}
          />
          <TableWrapper>
            <Rows
              data={rows}
              style={{margins: 20, width: 320, backgroundColor: '#fff'}}
              textStyle={{textAlign: 'center', fontSize: 10}}
            />
          </TableWrapper>
        </Table>
        <StatusBar style="auto" />
      </ScrollView>
    </SafeAreaView>
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
    width: 360,
    color: '#fff',
    paddingTop: 30,
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
    textAlign: 'center',
    width: 100,
  },

  characterDropdown: {
    display: 'flex',
    flexDirection: 'column',
    gap: 2
  },

  checkGroup: {
    height: 38,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: 'grey',
    borderRadius: 10
  },

  checkText: {
    fontSize: 10,
    paddingLeft: 20,
    paddingRight: 62
  },

  statsTable: {
    marginHorizontal: 20,
  }
});
//#endregion


/*#region ---------- Credits ----------

Programming:                          Skyfecta
Logic & Math:                         AuroraHertz

React Native Dropdown Select List:    https://github.com/danish1658/react-native-dropdown-select-list
React Native Table Component:         https://github.com/Gil2015/react-native-table-component

#endregion */