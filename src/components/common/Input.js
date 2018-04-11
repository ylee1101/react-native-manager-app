import React, { Component } from "react";
import { StyleSheet, View, TextInput, Text } from "react-native";
// import { Button, Card, CardSection } from "./common";

class Input extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      label,
      value,
      onChangeText,
      placeholder,
      secureTextEntry
    } = this.props;
    const { inputStyle, labelStyle, containerStyle } = styles;

    return (
      <View style={containerStyle}>
        <Text style={labelStyle}>{label}</Text>
        <TextInput
          secureTextEntry={secureTextEntry}
          placeholder={placeholder}
          autoCorrect={false}
          style={inputStyle}
          value={value}
          onChangeText={onChangeText}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  inputStyle: {
    color: "#000",
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 2
  },
  labelStyle: {
    paddingLeft: 20,
    fontSize: 18,
    flex: 1
  },
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: "row", //to make input and label align in same row
    alignItems: "center"
  }
});

export { Input };
