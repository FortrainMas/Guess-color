import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

import ColorField from '../components/ColorField';
import ColorSlider from '../components/ColorSliders';

export default class GameWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showedColor: getRandomColor(),
            guessedColor: {red: 0, green: 0, blue: 0},
            guessed: true,
        }
    }
    onNewColor = (color) => {
        this.setState({guessedColor: color});
        this.setState({guessed: !this.state.guessed});
    }
    render(){
        return(
            <View style = {styles.container}>
                <ColorField color = {this.state.showedColor}></ColorField>
                <Text>Color</Text>
                <ColorField  color = {this.state.guessedColor} />
                <Text>{String(this.state.guessed)}</Text>     
                <ColorSlider onValueChange = {(color)=>{this.onNewColor(color)}}/>           
            </View>
        )
    }
}

function getRandomColor(){
    //Formula (Math.random() * 100).toFixed() % 25 * 10 return  number between 0 and 250 multiple 10
    let color = {
        red: (Math.random() * 100).toFixed() % 25 * 10,
        green: (Math.random() * 100).toFixed() % 25 * 10,
        blue: (Math.random() * 100).toFixed() % 25 * 10,
    }
    return color;
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:20
    },
});