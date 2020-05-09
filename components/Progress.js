import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Progress extends React.Component{
    render(){
        if(!this.props.guessed){
            return(
                <View style = {WinStyle.view}>
                    <Text style = {WinStyle.text}>Well done</Text>
                </View>
            )
        }else{
                return(
                    <View style = {LoseStyle.view}>
                        <Text style = {LoseStyle.text}>You didn't guess</Text>
                    </View>
                )
        }
    }
}
const WinStyle = StyleSheet.create({
    view:{backgroundColor: '#83cc0e',
        width:'80%',
        aspectRatio: 6/1,
        borderRadius:5,
        marginBottom: '10%',
        alignItems: 'center',
        textAlignVertical: 'center',
        borderColor: '#83cc0e',
        borderWidth:3,
    },
    text:{
        alignSelf:'center',
        color: 'white',
        fontSize: 25,
    },
});

const LoseStyle = StyleSheet.create({
    view:{
        backgroundColor: '#93263F',
        width:'80%',
        aspectRatio: 6/1,
        borderRadius:5,
        marginBottom: '10%',
        alignItems: 'center',
        textAlignVertical: 'center',
        borderColor: 'black',
        borderWidth:3,
    },
    text:{
        alignSelf:'center',
        color: 'white',
        fontSize: 25,
    },
})