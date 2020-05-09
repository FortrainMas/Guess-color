import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text, Image} from 'react-native';

export default class BottomPart extends React.Component{
    buttonPressHandle = () => {
        //const {onPress} = this.props;
        //onPress();
        console.log('dsf')
    }
    render(){
        return(
            <View style = {NextButton.view}>
                <TouchableOpacity style = {homeButton.button}>
                    <Image style = {{width:'100%', height:'100%'}} source = {require('../assets/homeIcon.png')} />
                </TouchableOpacity>
                <TouchableOpacity style = {[NextButton.button, this.props.isGuessed ? NextButton.afterVictory : NextButton.beforeVictory]}
                                  onPress={this.buttonPressHandle} 
                                  disabled = {false}>
                    <Text style = {NextButton.text}>Next</Text>
                </TouchableOpacity>
                <TouchableOpacity style = {homeButton.button}>
                    <Image style = {{width:'100%', height:'100%'}} source = {require('../assets/lamp.png')} />
                </TouchableOpacity>
            </View>
        )
    }
}
const NextButton = StyleSheet.create({
    view:{
        flexDirection: 'row',
        width:'100%',
        aspectRatio:20/5,
        marginTop:'5%',
    },
    button:{
        flex:5,
        backgroundColor: '#4BBF00',
        borderRadius:5,
        alignItems:'center',
        marginHorizontal:'5%'
    },
    text:{
        fontSize:38,
        color: '#fff',
    },
    beforeVictory:{
        backgroundColor: '#BEBEBE'
    },
    afterVictory:{
        backgroundColor: '#4BBF00'
    }
})

const homeButton = {
    button:{
        flex:1
    }
}