import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';


import MenuButton from '../components/MenuButton';

export default class MenuWindow extends React.Component{
    handleButtonPress = () => {        
        const {onChangeWindow} = this.props;
        onChangeWindow(this.props.window);
    }
    render(){
        return (
            <View style={styles.container}>
              <MenuButton text="PLAY" window = 'gameWindow' onPress = {(newWindow) => {this.handleButtonPress(newWindow)}}/>
              <MenuButton text="SETTINGS" window = 'settingsWindow' onPress = {(newWindow) => {this.handleButtonPress(newWindow)}}/>
              <MenuButton text="EXIT"  window = 'exitWindow' onPress = {(newWindow) => {this.handleButtonPress(newWindow)}}/>
            </View>
        );
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
  