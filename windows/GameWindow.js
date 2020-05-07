import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import ColorField from '../components/ColorField';

export default class GameWindow extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
                <ColorField color = {{red:230, green:30, blue:30}}></ColorField>
                <Text>PlayWindow is too shy, but we agree with him, and you will see him soon</Text>
            </View>
        )
    }
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