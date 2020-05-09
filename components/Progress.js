import React from 'react';
import {View, StyleSheet, Text} from 'react-native';

export default class Progress extends React.Component{
    render(){
        if(this.props.isGuessed){
            return(
                <View style = {[WinStyle.view, styles.view]}>
                    <Text style = {styles.text}>Well done</Text>
                </View>
            )
        }else{
            return(
                <View style = {[LoseStyle.view, styles.view]}>
                    <Text style = {styles.text}>You didn't guess</Text>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    view:{
        width:'60%',
        aspectRatio: 5/1,
        borderRadius:5,
        marginBottom: '3%',
        alignItems: 'center',
        textAlignVertical: 'center',
        borderWidth:3,
    },
    text:{        
        alignSelf:'center',
        color: 'white',
        fontSize: 20,
    },
});

const WinStyle = StyleSheet.create({
    view:{
        backgroundColor: '#83cc0e',        
        borderColor: '#83cc0e',
    },
});

const LoseStyle = StyleSheet.create({
    view:{
        backgroundColor: '#93263F',
        borderColor: 'black',      
    },
})