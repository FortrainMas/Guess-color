import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, ScrollView} from 'react-native';

import ColorField from '../components/ColorField';
import ColorSlider from '../components/ColorSliders';
import Progress from '../components/Progress'
import BottomPart from '../components/BottomPartButtons';

export default class GameWindow extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            showedColor: getRandomColor(),
            guessedColor: {red: 0, green: 0, blue: 0},
            isGuessed: true,
        }
    }
    //Handle color update in ColorField
    onNewColor = (color) => {
        console.log(this.state.showedColor);
        this.setState({guessedColor: color}, function(){
            if(this.state.guessedColor.red == this.state.showedColor.red &&
                this.state.showedColor.green == this.state.guessedColor.green &&
                this.state.showedColor.blue == this.state.guessedColor.blue)
            {
                this.setState({isGuessed:true});
            }
        });
    }
    nextButtonHandler = () =>{
        this.setState({
            guessedColor:{red: 0, green: 0, blue: 0},
            showedColor: getRandomColor(),
            isGuessed: false,
        });
        
    }
    render(){
        console.log(this.state)
        return(
            <View style = {styles.container}>
                <Progress isGuessed = {this.state.isGuessed}/>
                <ColorField color = {this.state.showedColor}></ColorField>
                <Text style = {styles.text}>Color</Text>
                <ColorField  color = {this.state.guessedColor} />
                <Text style = {styles.text}>Your color</Text>  
                <ColorSlider onValueChange = {(color)=>{this.onNewColor(color)}}/>   
                <BottomPart onNextButton = {this.nextButtonHandler} isGuessed = {this.state.isGuessed}/>
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
    text:{
        fontSize:25,
        alignSelf: 'flex-start',
        marginLeft:'5%',
        marginBottom: '3%',
    },
});