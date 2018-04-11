import React, { Component } from "react";
import {
  TouchableOpacity,
  TouchableHighlight,
  StyleSheet,
  Text,
  View,
  Image
} from "react-native";
// import Card from "./Card";
// import CardSection from "./CardSection";

class Button extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { buttonStyle, textStyle } = styles;
    const { onPress, children } = this.props;
    return (
      <TouchableOpacity onPress={onPress} style={buttonStyle}>
        <Text style={textStyle}>{children}</Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  buttonStyle: {
    flex: 1, //i want this button to expand as much as to fill the content,
    alignSelf: "stretch",
    backgroundColor: "#fff",
    borderRadius: 5,
    borderWidth: 1,
    borderColor: "#007aff",
    marginLeft: 5,
    marginRight: 5
  },
  textStyle: {
    alignSelf: "center",
    color: "#007aff",
    fontSize: 16,
    fontWeight: "600", //thickness of font
    paddingTop: 10,
    paddingBottom: 10
  }
});

export { Button };
