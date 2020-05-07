import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class MenuButton extends React.Component{
    handleButtonPress = () => {        
        const {onPress} = this.props;
        onPress(this.props.window);
    }
    render(){
        return(
            <View>
                <TouchableOpacity style = {this.props.style || styles.button} onPress={() => {this.handleButtonPress(this.props.window)}}>
                    <Text style = {styles.text}>{this.props.text}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    button:{
        margin:10,
        backgroundColor: '#A8898F',
        borderRadius:5,
        width:'45%',
        aspectRatio:4/1,
        alignItems:'center',
    },
    text:{
        fontFamily:'notoserif',
        fontSize: 30,
    }
})