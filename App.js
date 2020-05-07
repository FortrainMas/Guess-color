import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import MenuButton from './components/MenuButton';
import MenuWindow from './windows/MenuWindow';
import GameWindow from './windows/GameWindow';

export default class App extends React.Component{
  constructor(props){
    super(props);
    this.state = {window: 'menuWindow'};
  }
  winodwChangeHandle = (newWindow) => {
    this.setState({window: newWindow});
  }
  render(){
    if(this.state.window == 'menuWindow'){
      return (
        <View style={styles.container}>
          <MenuWindow onChangeWindow = {(newWindow) => {this.winodwChangeHandle(newWindow)}}/>
        </View>
      );
    }
    return(<GameWindow></GameWindow>)
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
