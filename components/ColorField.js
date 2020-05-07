import React from 'react';
import { View, StyleSheet } from 'react-native';

export default class ColorField extends React.Component {
  render() {
    return (
      <View
        style={[this.styles.colorStyle, this.props.style || this.styles.shape]}
      />
    );
  }
  styles = StyleSheet.create({
    colorStyle: {
      backgroundColor: `rgb(${this.props.color.red}, ${
        this.props.color.green
      }, ${this.props.color.blue})`,
    },
    shape: {
      width: '90%',
      aspectRatio: 2 / 1,
      borderRadius: 20,
    },
  });
}
