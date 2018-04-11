import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class CardSection extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <View style={[styles.containerStyle, this.props.style]}>{this.props.children}</View>;
  }
}

const styles = StyleSheet.create({
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    flexDirection: "row",
    borderColor: "#ddd",
    position: "relative"
  }
});

export { CardSection };
