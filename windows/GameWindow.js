import React from 'react';
import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';

export default class GameWindow extends React.Component{
    render(){
        return(
            <View style = {styles.container}>
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