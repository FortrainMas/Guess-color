import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class ColorField extends React.Component {
  color = this.props.color;
  //Make styles first time
  constructor(props){
      super(props);
      this.makeNewStyles();
  }
  
  render() {
    return (
      <View
        style={[this.styles.colorStyle, this.props.style || this.styles.shape]}
      />
    );
  }

  //Update styles with current props
  shouldComponentUpdate(nextProps){
      console.log(nextProps)
      this.color = nextProps.color;
      this.makeNewStyles();
      this.render();
      return true
  }
  
  //Update styles with current props
  makeNewStyles(){
    this.styles = StyleSheet.create({
        colorStyle: {
          backgroundColor: `rgb(${this.color.red}, ${
            this.color.green
          }, ${this.color.blue})`,
        },
        shape:  {
          width: '90%',
          aspectRatio: 2 / 1,
          borderRadius: 20,
        },
      });
  }
}
