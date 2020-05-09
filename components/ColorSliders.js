import React from 'react';
import {View, StyleSheet, Text, Slider} from 'react-native';

export default class ColorSlider extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            red: 0,
            green: 0,
            blue: 0,
        }
    }
    valueChange = ()=>{
        const {onValueChange} = this.props;
        const color = {
            red: this.state.red,
            green: this.state.green,
            blue: this.state.blue,
        }
        onValueChange(color);
    }
    render(){
        return(
            <View style = {styles.container}>
                <View style = {styles.sliderLine}>
                    <Slider
                        style={{flex:8}}
                        minimumValue={0}
                        maximumValue={250}
                        step = {10}
                        minimumTrackTintColor="#FF0000"
                        maximumTrackTintColor="#F00000"
                        onValueChange = {(value)=>{                            
                            this.setState({red:value}, function(){
                                this.valueChange();
                            });
                        }}
                    />
                    <Text style = {styles.valueText}>{this.state.red}</Text>
                </View>
                <View style = {styles.sliderLine}>
                    <Slider
                        style={{flex:8}}
                        minimumValue={0}
                        maximumValue={250}
                        step = {10}
                        minimumTrackTintColor="#00FF00"
                        maximumTrackTintColor="#00F000"
                        onValueChange = {(value)=>{
                            this.setState({green:value}, function(){
                                this.valueChange();
                            });
                        }}
                    />
                    <Text style = {styles.valueText}>{this.state.green}</Text>
                </View>
                <View style = {styles.sliderLine}>
                    <Slider
                        style={{flex:8}}
                        minimumValue={0}
                        maximumValue={250}
                        step = {10}
                        minimumTrackTintColor="#0000FF"
                        maximumTrackTintColor="#0000F0"
                        onValueChange = {(value)=>{
                            this.setState({blue:value}, function(){
                                this.valueChange();
                            });
                        }}
                    />
                    <Text style = {styles.valueText}>{this.state.blue}</Text>
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
      width:'100%',
      aspectRatio:2/1,
      backgroundColor: '#000',
      borderRadius:5,
      justifyContent: 'center',
      padding:20
    },
    sliderLine:{
        flexDirection:"row",
        marginVertical:8,
    },
    valueText:{
        flex:1,
        backgroundColor:'#fff',
        borderRadius:1,
    }
});